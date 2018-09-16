module.exports =  function(grunt) {

    grunt.initConfig({
        concat : {
            options:{
                separator: "\n\n//\n//-------------------------------------------------------------------------------------------------------------------------------\n//\n\n",
                banner:"\n\n//-------------------------------------------------------------------------------------------------------------------------------\n",
            },
            dist:{
                src : ['components/scripts/*.js'],
                dest:'builds/development/js/scripts.js'
            } 
        },
        bower_concat:{
            all:{
                dest: {
                    'js': 'builds/development/js/_bower.js',
                    'css': 'builds/development/css/_bower.css'
                  },
            }
        },
        sass:{
            options:{
                outputStyle: 'compressed'
            },
            dist:{
                    files:[{
                        src : 'components/sass/style.scss',
                        dest:'builds/development/css/style.css'
                    }] 
                }
            
        },
        connect:{
            server:{
                options:{
                    hostname:'localhost',
                    port: 8000,
                    base:'builds/development/',
                    livereload: true
                }
            }
        },
        wiredep:{
            target:{
                src:'builds/development/**/*.html'
            }
        },
        watch:{
            options:{
                spawn: false,
                livereload: true,
            },
            scripts:{
                files:[
                    'builds/development/**/*.html',
                    'components/scripts/**/*.js',
                    'components/sass/**/*.scss',

                ],
                tasks:['concat', 'sass'],
            },

        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');



    grunt.registerTask('default',[ 'wiredep', 'concat', 'sass','bower_concat', 'connect', 'watch']);
};