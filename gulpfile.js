const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const imagemin = require('gulp-imagemin')

// Compilação do SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

// Função para otimizar imagens
// function images() {
//     return gulp.src('./src/images/**/*')
//         .pipe(gulp.dest('./dist/images'))
//         //.pipe(imagemin())
// }

// Execução padrão (build)
exports.default = gulp.parallel(styles)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}