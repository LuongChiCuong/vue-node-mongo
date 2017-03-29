var Ebook = require('mongoose').model('Ebook');

exports.create = (req, res, next) => {
  var book = new Ebook(req.body);

  bm.save((err, result) => {
    console.log(err);
    console.log(book);
      if (err) {
        console.log('error');
        return next(err);
      } else {
        console.log('save success');
        res.json(result);
      }
  });

}

exports.find = (req, res, next) => {
  Ebook.find((err, books) => {
    if (err) return console.error(err);
    res.json(books);
  })
}
