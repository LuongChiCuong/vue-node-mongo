var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function() {
  var app = express();

  app.use(function (req, res, next) {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
      // Pass to next layer of middleware
      next();
  });

  if (process.env.NODE_ENV === 'development') {
    // provide logger middleware
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    // provide response compression
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  //this module provide several middleware to handle request data
  app.use(bodyParser.json());
  // this module provide DELETE and PUT HTTP vers legacy support
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  require('../routes/index.route.js') (app);
  require('../routes/bookmark.route.js') (app);
  require('../routes/ebook.route.js') (app);

  app.use(express.static('public'));

  return app;
}
