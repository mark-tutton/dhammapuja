const gulp        = require('gulp');
const browserSync = require('browser-sync');


/**
 * Wait for jekyll-dev, then launch the Server
 */

gulp.task('browser-sync', gulp.series('jekyll-dev', function(done) {
  browserSync.init({
    server: "_site",
    port: 4000
  });
  done();
}));
