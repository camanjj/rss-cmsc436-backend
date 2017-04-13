
module.exports = {

  tech: function () {
    return [
      {'NYT': "http://feeds.nytimes.com/nyt/rss/Technology"},
      {'NYT2': 'http://bits.blogs.nytimes.com/feed/'},
      {'NYT3': 'http://www.nytimes.com/services/xml/rss/nyt/PersonalTech.xml'},
      {'CNET': "http://news.cnet.com/RSS-feeds-from-CNET-News/2009-1090_3-980549.html?tag=ftr"},
      {'Gizmodo': "http://feeds.gawker.com/gizmodo/full"},
      {'Wired': "https://www.wired.com/feed"},
      {'TechCrunch': "http://feeds.feedburner.com/TechCrunch/"},
      {'PHYS': "https://phys.org/rss-feed/technology-news/"},
      {'Google': "https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=tc&output=rss"}
    ]
  },

  sports: function() {
    return [
      {'NYT': "http://www.nytimes.com/services/xml/rss/nyt/Sports.xml"},
      {'Google': 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=s&output=rss'},

    ]
  },

  business: function() {
    return [
      {'Reuters': "http://feeds.reuters.com/reuters/businessNews"},
      {'Google': "https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=b&output=rss"}
    ]
  },

  science: function() {
    return [
      {'NASA': "https://www.nasa.gov/rss/dyn/breaking_news.rss"},
      {'Science Daily': "http://www.sciencemag.org/rss/news_current.xml"},
      {'PHYS': "https://phys.org/rss-feed/editorials/"},
      {'Google': "https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=snc&output=rss"}
    ]
  },

  health: function() {
    return [
      {'Google': 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=m&output=rss'}
    ]
  },

  world: function() {
    return [
      {'Google': 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=w&output=rss'},
    ]
  }




}