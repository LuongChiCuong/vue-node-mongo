var Bookmark = require('mongoose').model('Bookmark');
var Metascraper = require('metascraper');

exports.create = (req, res, next) => {
  var bm = new Bookmark(req.body);

  bm.save((err, result) => {
    console.log(err);
    console.log(bm);
      if (err) {
        console.log('error');
        return next(err);
      } else {
        console.log('save success');
        res.json(result);
      }
  });

}

// const getMeta = (url) => {
//   Metascraper.scrapeUrl(url).then((metadata) => {
//     callback(metadata);
//   }).catch((error) => {
//     console.log(error);
//   });
// }
//
// const callback = (data) => {
//   console.log(data);
// }
// load bookmark api
exports.find = (req, res, next) => {
  Bookmark.find((err, bms) => {
    if (err) return console.error(err);
    res.json(bms);
  })
}

// full text search api
exports.findText = (req, res, next) => {
  Bookmark.find(
    {$text: { $search: req.body.query }},
    {score: { $meta: "textScore" }},
    (err, result) => {
        if (err) return console.error(err);
        res.json(result);
    }
  ).sort(
    { score: { $meta: "textScore" }}
  )
}
