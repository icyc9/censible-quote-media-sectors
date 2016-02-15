require('../spec/spec_helper')

Agent = require('./').Agent

describe('Agent', function () {
  subject = new Agent

  this.timeout(10000)
  url = 'http://cs.quotemedia.com/index.php?section=Multi-Channel%20Module&subsection=Sectors%20Page'

  context('when calling as function', function () {
    it('throws an exception', function () {
      expect( Agent ).to.throw('Must instantiate using "new" keyword')
    })
  })

  describe('user(agent)', function () {
    var agent = 'chrome'

    it('changes the user agent', function (done) {
      subject
      .get(url)
      .end(function () {
        done()
      })
    })
  })

  describe('.retry(amount)', function () {
    it('has a retry method', function (done) {
      expect( subject.get(url) ).to.have.property('retry')
      done()
    })
  })

})
