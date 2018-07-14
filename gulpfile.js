var
  gulp = require('gulp'),
  less = require('gulp-less')
  gulpif = require('gulp-if')
  concat = require('gulp-concat')
  connect = require('gulp-connect')
  cleanCSS = require('gulp-clean-css');

var paths = {
  styles: ['/css/*.less']
};

// gulp.task('minify-css', function() {
//     return gulp.src('css/*.css')
//         .pipe(cleanCSS( function(details) {
//             console.log(details.name + ': ' + details.stats.originalSize);
//             console.log(details.name + ': ' + details.stats.minifiedSize);
//         }))
//         .pipe(gulp.dest('dist'));
// });


gulp.task('styles', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS())
    // .pipe(concat('all.css'))
    .pipe(gulp.dest('/assets/build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(['*.html'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('default', [ 'watch', 'connect']);
