var Cheerio = require('cheerio')
var Promise = require('bluebird')

var url = 'http://cs.quotemedia.com/index.php?section=Multi-Channel%20Module&subsection=Sectors%20Page'

var QuoteMedia = function (agent) {
  this._agent = agent
}

QuoteMedia.prototype.Sectors = function () {
  var deferred = Promise.pending()
  var Agent = this._agent

  Agent
  .get(url)
  .end(function (error, response) {
    deferred.resolve([])
    parse_sectors(response.text)
  })

  return deferred.promise
}

function parse_sectors (body) {
  var deferred = Promise.pending()

  var $ = Cheerio.load(body)

  var tables = $($("tbody")
    .children()
    .first()
    .first()
    .children()
    .children()[3])
    .children()
    .children()
    .first()
    .children()
    
  var sectors = []

  $(tables).each(function (table) {
    var subject = $($(tables)[table]).children()
    subject.each(function (item) {
      var Sector = $($(subject)[item]).attr('class').substr(18, $(subject).attr('class').length).replace('xt','')
      if(!Sector.length)
        return;
      var item = $($(subject)[item])
      sectors.push(item)
    })
  })

  sectors.forEach(function (sector) {
    var next = $(sector).nextUntil(sector, 'div')
  })

  return deferred.promise
}


module.exports = QuoteMedia