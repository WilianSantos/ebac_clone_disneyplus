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
async function images() {
    const imagemin = await import('gulp-imagemin');

    return gulp.src('./src/images/**/*')
        .pipe(imagemin.default()) // Use .default para módulos ESM
        .pipe(gulp.dest('./dist/images'));
}

// Execução padrão (build)
exports.default = gulp.series(images, gulp.parallel(styles))


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}