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

        sass:{
            options:{
                outputStyle: 'compressed'
            },
            dist:{
                    files:[{
                        src : 'components/sass/style.scss',
                        dest:'builds/development/sass/style.css'
                    }] 
                }
            
        },
        watch:{
            options:{
                spawn: false
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
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default',['concat', 'sass', 'watch']);
};