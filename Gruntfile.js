const sass = require('sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Compilação de arquivos sass
        sass: {
            options: {
                implementation: sass, 
                sourceMap: true       
            },
            dist: {
                files: {
                    './dist/css/main.css': './src/styles/main.scss' 
                }
            }
        },
        // Compilação de arquivos js
        uglify: {
            target: {
                files: {
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        },
        // Compressão de imagens
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
        // Observação de arquivos alterados na etapa de desenvolvimento
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
