exports.render = function(req, res) {

  if (req.session.lastVisit) {
    console.log('last visit time: ' + req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  res.send('Hello World');
}
