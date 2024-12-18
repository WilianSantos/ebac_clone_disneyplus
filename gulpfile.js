const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
//const imagemin = require('gulp-imagemin')

// Compilação do SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

// Compresão das imagens
// function images() {
//     return gulp.src('./src/images/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/images'))
// }

// Execução padrão (build)
exports.default = gulp.parallel(styles)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}