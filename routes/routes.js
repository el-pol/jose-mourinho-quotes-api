var quotes = require('../data/quotes.json')

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).sendFile('index.html');
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  app.get("/quote", function (req, res) {
    res.status(200).send(quotes[getRandomInt(100)]);
  });
}



module.exports = appRouter;