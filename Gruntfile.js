module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.initConfig({
        sass: {
            server: {
                options: {

                },
                files: [{
                    expand: true,
                    cwd: 'src/styles/scss/',
                    src: ['*.{scss,sass}', '{,**/}*.{scss,sass}'],
                    dest: 'src/styles/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: [''],
            },
            css: {
                files: ['src/styles/css/*.css'],
                tasks: [''],
            },
            scss: {
                files: ['src/styles/{,**/}*.scss'],
                tasks: ['sass:server']
            }
        },

    });


    grunt.registerTask('serve', [
        'watch'
    ]);
};
