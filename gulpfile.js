var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp.config')(),
    $ = require('gulp-load-plugins')({lazy:true});

gulp.task('default', function() {
    //place code for your default task here
});

gulp.task('vet',function() {
    return gulp
    .src(config.alljs)
    .pipe($.if(args.verbose,$.print()))
    .pipe($.jscs())
    .pipe($.jscs.reporter())
    .pipe($.jscs.reporter('fail'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
	.pipe($.jshint.reporter('fail'));
});
