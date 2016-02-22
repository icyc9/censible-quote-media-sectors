var QuoteMedia = require('./')
var Agent = require('./agents').Agent

require('./spec/spec_helper.js')

describe('Censible', function () {

  var subject = (new QuoteMedia(new Agent))	

  describe('quote-media-sectors', function () {
    this.timeout(10000)
    it('responds with an array', function (done) {
      subject.Sectors()
      .then(function (response) {
        console.log(response)
        expect(response).to.be.an.instanceOf(Array)
        done()
      })
    })
  })

})