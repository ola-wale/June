var gulp = require('gulp'),
		concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src([
		'resources/js/jquery.min.js',
		'resources/js/angular.min.js',
		'resources/js/angular-route.min.js',
		'resources/js/angular-animate.min.js',
		'resources/js/chart.min.js',
		'resources/js/main.js',
		'resources/js/controllers/main.js',
		'resources/js/controllers/education.js',
		'resources/js/controllers/skills.js',
		'resources/js/controllers/experience.js',
		'resources/js/controllers/pricing.js',
		'resources/js/controllers/portfolio.js',
		'resources/js/controllers/contact.js',
		'resources/js/controllers/main-view.js',
		'resources/js/owl.carousel.min.js',
		'resources/js/isotope.pkgd.min.js',
	])
  .pipe(concat({ path: 'app.js', stat: { mode: 0666 }}))
  .pipe(gulp.dest('js/'));
});

gulp.task('css',function(){
	return gulp.src([
		'resources/css/bootstrap.min.css',
		'resources/css/animate.min.css',
		'resources/css/style.css',
		'resources/css/owl.carousel.css',
	])
	.pipe(concat({ path: 'app.css', stat: { mode: 0666 }}))
	.pipe(gulp.dest('css/'));
});