var express = require('express');
var app = express();
var router = express.Router();

// router.route('/')
// .get(function(req, res, next) {
//   res.send('Hello World');
//   // res.json(req.user);
// })
// .put(function(req, res, next) {
//   // just an example of maybe updating the user
//   req.user.name = req.params.name;
//   // save user ... etc
//   res.json(req.user);
// })
// .post(function(req, res, next) {
//   next(new Error('not implemented'));
// })
// .delete(function(req, res, next) {
//   next(new Error('not implemented'));
// });
//
// module.exports = router;

module.exports = function(app) {
  var index = require('../controllers/index.controller');
  app.get('/', index.render);
};
