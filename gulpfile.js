const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyJS = require('gulp-uglify')
const minifyCSS = require('gulp-clean-css')
const injectString = require('gulp-inject-string')

gulp.task('clean', () => {
    return gulp.src(['./src/js/scripts.min.js', './src/css/styles.min.css'], { read: false, allowEmpty: true })
})

gulp.task('minify-js', () => {
    return gulp.src('./src/js/scripts/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(minifyJS())
        .pipe(injectString.prepend("'use strict'\n$(document).ready(function() {\n"))
        .pipe(injectString.append('\n});'))
        .pipe(gulp.dest('./src/js'))
})

gulp.task('minify-css', gulp.series('clean', () => {
    return gulp.src(['./src/css/styles/*.css', '!./src/css/styles.min.css']) // Exclui styles.min.css
        .pipe(concat('styles.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src/css'))
}))

gulp.task('default', gulp.parallel('minify-js', 'minify-css'))