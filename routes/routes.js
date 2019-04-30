var quotes = require('../data/quotes.json')

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to Jose Mourinho Quotes API. Please visit /quote to get a random quote");
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  app.get("/quote", function (req, res) {
    res.status(200).send(quotes[getRandomInt(100)]);
  });
}



module.exports = appRouter;