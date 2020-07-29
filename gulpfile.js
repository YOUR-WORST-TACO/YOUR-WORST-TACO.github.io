const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('styles'));
    return gulp.src('styles/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('styles'));
});

gulp.task('sass:clean', () => {
    return del([
        'styles/main.css',
    ]);
});

gulp.task('sass:watch', () => {
    gulp.watch('styles/scss/**/*.scss', gulp.series('sass'));
});