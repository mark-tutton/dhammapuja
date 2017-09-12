const gulp = require('gulp');
const purify = require('gulp-purifycss');


gulp.task('purify', ['scripts-prod', 'sass-prod'], function() {
  return gulp.src('app/assets/styles/main.css')
    .pipe(purify(['_site/assets/scripts/main.js', '_site/**/*.html']))
    .pipe(gulp.dest('app/assets/styles/'));
});
