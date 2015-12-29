// leny.github.io - Grunt tasks

"use strict";

module.exports = function( grunt ) {

    require( "load-grunt-tasks" )( grunt );

    grunt.initConfig( {
        "jade": {
            "options": {
                "compress": false
            },
            "page": {
                "files": {
                    "index.html": "src/jade/index.jade"
                }
            }
        },
        "watch": {
            "jade": {
                "files": "src/jade/index.jade",
                "tasks": [ "html" ]
            }
        }
    } );

    grunt.registerTask( "html", [ "jade" ] );

    grunt.registerTask( "default", [ "html" ] );

    grunt.registerTask( "work", [ "default", "watch" ] );
};
