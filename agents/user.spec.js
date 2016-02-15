
var User = require('./').User

describe('User', function () {
  describe('aol', function () {
    var agent = 'Mozilla/4.0 (compatible; MSIE 4.01; AOL 4.0; Windows 95)'

    it('has an agent', function () {
      expect(User.aol).to.equal(agent)
    })
  })

  describe('ie', function () {
    var agent = 'Mozilla/4.0 (compatible; MSIE 4.01; Windows 95)'

    it('has an agent', function () {
      expect(User.ie).to.equal(agent)
    })
  })

  describe('chrome', function () {
    var agent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/530.10 (KHTML, like Gecko) Chrome/ Safari/530.5'

    it('has an agent', function () {
      expect(User.chrome).to.equal(agent)
    })
  })

  describe('safari', function () {
    var agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit (KHTML, like Gecko)'

    it('has a user agent', function () {
      expect(User.safari).to.equal(agent)
    })
  })

  describe('firefox', function () {
    var agent = 'Mozilla/5.0 (Windows 95; en-US; rv:1.8.1.13) Gecko/20080313 Firefox'

    it('has an agent', function () {
      expect(User.firefox).to.equal(agent)
    })
  })

  describe('ios', function () {
    var agent = 'mozilla/5.0 (iphone; cpu iphone os 8_0_0 like mac os x) applewebkit/537.51.1 (KHTML, like Gecko) version/7.0 mobile/11a501 safari/9537.53'

    it('has an agent', function () {
      expect(User.ios).to.equal(agent)
    })
  })

  describe('android', function () {
    var agent = 'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9'

    it('has an agent', function () {
      expect(User.android).to.equal(agent)
    })
  })

})
