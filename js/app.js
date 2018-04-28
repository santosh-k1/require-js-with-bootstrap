
// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "js/vendor",
    "paths": {
      "app": "js/vendor"
    },
    "shim": {
        "backbone": ["jquery", "underscore"],
        "bootstrap": ["jquery"]
    }
});


//Load Web App JavaScript Dependencies/Plugins
define([
    "jquery",
    "modernizr",
    "underscore",
    "backbone",
    "bootstrap"
], function($)
{
    $(function()
    {

        //do stuff
        console.log('required plugins loaded...');

    });
});

// Load the main app module to start the app
//requirejs(["app/main"]);