var bookmarks = require('../controllers/bookmark.controller');

module.exports = function(app) {
  app.route('/bookmarks')
  .get(bookmarks.find)
  .post(bookmarks.create);

  app.route('/bookmarks/search')
  .post(bookmarks.findText);
}
