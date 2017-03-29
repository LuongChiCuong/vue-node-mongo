var books = require('../controllers/ebook.controller');

module.exports = function(app) {
  app.route('/ebooks')
  .get(books.find)
  .post(books.create);
}
