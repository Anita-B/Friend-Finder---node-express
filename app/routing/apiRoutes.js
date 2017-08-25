// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on potential friends
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // Routes
  // =============================================================

  // provides JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // takes in JSON input
  // used to handle incoming survey results
  // route will also be used to handle compatibility logic
  app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
    //newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    //console.log(newfriend.scores);
    //console.log("friend1 ", friendData[0].scores);
    var bestFriend = [];


    //console.log("num in friends array",  friendData.length);
    for(var i = 0; i < friendData.length; i++){

      var compare = [];

      for(var j = 0; j < 10; j++){
        //minus the scores for each Question
        if(newfriend.scores[j] === 'NaN')
        {
          newfriend.scores[j] = 0;
        }
        else {
          newfriend.scores[j] = parseInt(newfriend.scores[j]);
        }
        compare[j] = Math.abs(friendData[i].scores[j] -  newfriend.scores[j]);
      }

      var total = compare.reduce(function(sum, value) {
        return sum + value;
      }, 0);

      bestFriend[i] = total;
    }
    // find index of smallest number which indicates best friend
    var min = bestFriend[0];
    var minIndex = 0;

    for (var i = 1; i < bestFriend.length; i++) {
        if (bestFriend[i] < min) {
            minIndex = i;
            min = bestFriend[i];
            //console.log(bestFriend[i] +" "+ min +" "+minIndex);
        }
    }
    //console.log("closest ", minIndex);

    friendData.push(newfriend);

    res.json(friendData[minIndex]);
  });

};
