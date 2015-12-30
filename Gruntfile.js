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
        "stylus": {
            "options": {
                "compress": false,
                "use": [
                    require( "kouto-swiss" )
                ]
            },
            "styles": {
                "files": {
                    "assets/styles.css": "src/stylus/styles.styl"
                }
            }
        },
        "csso": {
            "options": {
                "report": "gzip"
            },
            "styles": {
                "files": {
                    "assets/styles.min.css": "assets/styles.css"
                }
            }
        },
        "watch": {
            "jade": {
                "files": "src/jade/index.jade",
                "tasks": [ "html" ]
            },
            "stylus": {
                "files": "src/stylus/styles.styl",
                "tasks": [ "css" ]
            }
        }
    } );

    grunt.registerTask( "html", [ "jade" ] );

    grunt.registerTask( "css", [ "stylus", "csso" ] );

    grunt.registerTask( "default", [ "html", "css" ] );

    grunt.registerTask( "work", [ "default", "watch" ] );
};
