'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Mememe, app, auth, database) {

  app.get('/mememe/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/mememe/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/mememe/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/mememe/example/render', function(req, res, next) {
    Mememe.render('index', {
      package: 'mememe'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
