// {
//     "end_year": "",
//     "intensity": 16,
//     "sector": "",
//     "topic": "growth",
//     "insight": "IEA Says Oil Prices May Fall Even Further Before Supply Fades in 2016",
//     "url": "http://www.bloomberg.com/news/articles/2015-07-10/iea-says-oil-price-may-fall-further-before-supply-fades-in-2016",
//     "region": "",
//     "start_year": 2016,
//     "impact": "",
//     "added": "July, 03 2016 06:00:25",
//     "published": "July, 10 2015 00:00:00",
//     "country": "",
//     "relevance": 4,
//     "pestle": "Economic",
//     "source": "Bloomberg Business",
//     "title": "Non-OPEC supply growth is expected to grind to a halt in 2016.",
//     "likelihood": 4
// },
const mongoose = require("mongoose");

const Bulletin = mongoose.model("Bulletin", {
  start_year: {
    type: String,
  },
  likelihood: {
    type: Number,
  },
  title: {
    type: String,
  },
  source: {
    type: String,
  },
  pestle: {
    type: String,
  },
  relevance: {
    type: Number,
  },
  country: {
    type: String,
  },
  impact: {
    type: Number,
  },
  added: {
    type: Date,
  },
  published: {
    type: Date,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  end_year: {
    type: String,
  },
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
});

module.exports = Bulletin;
