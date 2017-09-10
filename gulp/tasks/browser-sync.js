const gulp        = require('gulp');
const browserSync = require('browser-sync');


/**
 * Wait for jekyll-dev, then launch the Server
 */

gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 4000
  });
});
