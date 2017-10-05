/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
//var sass = require('gulp-sass');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('message', function () {
    return console.log('gulp is running');
});

//copy controllers
gulp.task('copyControllers', function () {
    gulp.src('./Controllers/*.cs').pipe(gulp.dest('dist/controllers'));
});

gulp.task('watch', function () {
    gulp.watch('./Controllers/*.cs', ['copyControllers']);
});

//compile css
//gulp.task('sass', function () {
//    gulp.src('./Views/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('dist/Views'));
//});

