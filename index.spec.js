var QuoteMedia = require('./')
var Agent = require('./agents').Agent

describe('Censible', function () {

  var subject = (new QuoteMedia(new Agent))	

  describe('quote-media-sectors', function () {
    it('responds with an array', function (done) {
      subject.Sectors()
      .then(function (response) {
        expect(response).to.be.an.instanceOf(Array)
        done()
      })
    })
  })

})