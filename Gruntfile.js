const sass = require('sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass, // Define o compilador Sass
                sourceMap: true       // Habilita o mapa de origem
            },
            dist: {
                files: {
                    './dist/css/main.css': './src/styles/main.scss' // Ajustado o caminho para "styles"
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                   
                    cwd: './src/images/',           
                    src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'], 
                    dest: './dist/images/'          
                }]
            }
        },
        watch: {
            sass: {
                files: ['./src/styles/**/*.scss'], 
                tasks: ['sass:dist']              
            }
        },
    });

    // Carregar dependências
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-imagemin')

    // Tarefas registradas
    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['sass:dist', 'uglify', 'imagemin'])
};
