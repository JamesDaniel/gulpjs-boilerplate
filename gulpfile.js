var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log('hello gulp');
});

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function() {
  return gulp.src('scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
