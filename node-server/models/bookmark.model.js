var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookmarkSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: [{
    name: String
  }]
});

mongoose.model('Bookmark', BookmarkSchema);
