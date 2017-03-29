var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EbookSchema = new Schema({
  title: String,
  url: String,
  img: String
});

// EbookSchema.index({title: 'text'});

mongoose.model('Ebook', EbookSchema);
