'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mememe = new Module('mememe');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mememe.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Mememe.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Mememe.menus.add({
    title: 'Create Me',
    link: 'creator',
    roles: ['authenticated', 'anonymous'],
    menu: 'main'
  });
  
  Mememe.aggregateAsset('css', 'mememe.css');
  
  app.set('views', __dirname + '/server/views');
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Mememe.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Mememe.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Mememe.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Mememe;
});
