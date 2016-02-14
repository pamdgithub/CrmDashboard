var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    gulpprint = require('gulp-print'),
    gulpif = require('gulp-if'),
    args = require('yargs').argv;
gulp.task('default', function() {
    //place code for your default task here
});

gulp.task('vet',function() {
    return gulp
    .src([
        './src/**/*.js',
        './*.js'
    ])
    .pipe(gulpif(args.verbose,gulpprint()))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish',{verbose:true}));
});
