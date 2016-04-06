var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    karma   = require('karma').Server;

gulp.task('default', ['watch']);

gulp.task('test', function(done){
	new karma({
		configFile: __dirname + '/karma.conf.js'
	}, done).start();
});

gulp.task('jshint', function(){
	return gulp.src(['src/*.js', 'spec/*.spec.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
	gulp.watch('src/*.js', ['jshint']);
	gulp.watch('spec/*.spec.js', ['jshint', 'test']);
});