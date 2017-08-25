// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/css", function(req, res) {
    res.sendFile(path.join(__dirname, "../../assets/css/stylesheet.css"));
    console.log(__dirname);
  });

  app.get("/photo/:friend", function(req, res) {
    var bestfriend = req.params.friend;

    switch(bestfriend)
    {
        case "carrie":
            res.sendFile(path.join(__dirname, "../../assets/images/Carrie_Bradshaw.jpg"));
            console.log(__dirname);
            break;
        case "charlotte":
            res.sendFile(path.join(__dirname, "../../assets/images/Charlotte_York.jpg"));
            console.log(__dirname);
            break;
        case "samantha":
            res.sendFile(path.join(__dirname, "../../assets/images/Samantha_Jones.jpg"));
            console.log(__dirname);
            break;
        case "miranda":
            res.sendFile(path.join(__dirname, "../../assets/images/Miranda_Hobbes.jpg"));
            console.log(__dirname);
            break;
        case "trey":
            res.sendFile(path.join(__dirname, "../../assets/images/trey-macdougal-512x512.jpg"));
            console.log(__dirname);
            break;
        case "aidan":
            res.sendFile(path.join(__dirname, "../../assets/images/aidan-shaw-512x512.jpg"));
            console.log(__dirname);
            break;
        case "john":
            res.sendFile(path.join(__dirname, "../../assets/images/mr-big-512x512.jpg"));
            console.log(__dirname);
            break;
        case "stanford":
            res.sendFile(path.join(__dirname, "../../assets/images/stanford-blatch-512x512.jpg"));
            console.log(__dirname);
            break;
        default:
            //code block
    }

  });

};
