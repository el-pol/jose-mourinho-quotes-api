const { send } = require('micro')
const { router, get } = require('microrouter')
const quoteData = require('../data/quotes.json')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const quotes = (req, res) => {
  const { quotes } = quoteData
  const oneRandomQuote = quotes[getRandomInt(100)]
  return send(res, 200, oneRandomQuote)
}


const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/quotes', quotes),
  get('/*', notfound),
)