var Cheerio = require('cheerio')
var Promise = require('bluebird')

var url = 'app.quotemedia.com/quotetools/quoteModule.go?webmasterId=500&toolWidth=900&action=showSectorsSummary&qmpage=true&symbol=MSFT&hiddenTabs=all&toggle=advanced&cp=off&chln=0071bb&chfill=ee0071bb&chfill2=0071bb&symbolLinkTarget=off&hideChartLink=yes&advCharts=on&targetURL=http://cs.quotemedia.com/index.php?section=Multi-Channel+Module%26subsection=Sectors+Page%26demo=1'

var QuoteMedia = function (agent) {
  this._agent = agent
}

QuoteMedia.prototype.Sectors = function () {
  var deferred = Promise.pending()
  var Agent = this._agent

  var user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36"

  Agent
  .get(url)
  .set('User-Agent', user_agent)
  .end(function (error, response) {
    deferred.resolve(parse_sectors(response.text))
  })

  return deferred.promise
}

function parse_sectors (body) {
  
  var deferred = Promise.pending()
  var body = (body.substr(body.indexOf("n<") + 1)
    .replace('n");', '')
    .replace(/\\r/g, '')
    .replace(/\\t/g, '')
    .replace(/\\n/g, '')
    .replace(/\\/g, ''))

  var $ = Cheerio.load(body)

  var collection = []


  $(".qm_cycle").each(function (index) {
    
    var Sector = $($('.qm_cycle')[index])
    var Industries = $($(".qm_cycle")[index]).nextUntil('.qm_cycle')
    
    var item = {}
    item.Sector = (Sector.text().trim())
    item.Industries = []

    $(Industries).each(function (index) {
      
      var i = Industries[index]
      var IndustryName = ($(i).find(".qm_maintext").children().text())
      
      var cur = {}   
      cur.IndustryName = (IndustryName)
      cur.SubIndustries = []    

      $(i).find(".qm_sub_sector").each(function (index) {
       var sub = $(i).find(".qm_sub_sector")[index]
       var text = $(sub).children().text()
       cur.SubIndustries.push(text)
      })

      item.Industries.push(cur)
    })
    collection.push(item)
  })

  deferred.resolve(collection)

  return deferred.promise
}


module.exports = QuoteMedia