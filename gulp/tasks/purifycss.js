const gulp    = require('gulp');
const purify  = require('gulp-purifycss');
const cssnano = require('gulp-cssnano');

/*
 * Removes unused CSS
 */

gulp.task('purify', gulp.series('scripts-prod', 'sass-prod', function() {
  return gulp.src('app/assets/styles/main.css')
    .pipe(purify(['_site/assets/scripts/main.js', '_site/**/*.html']))
    .pipe(cssnano())
    .pipe(gulp.dest('app/assets/styles/'));
}));
