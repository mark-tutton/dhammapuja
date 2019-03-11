const gulp        = require('gulp');
const browserSync = require('browser-sync');
const cp          = require('child_process');

const messages = {
  jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
  jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
};


/**
 * Build the Jekyll Site in dev mode
 */
gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml'], {stdio: 'inherit'})
    .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-dev', function (done) {
  browserSync.reload();
  done();
}));


/*
 * Build the site in production mode
 */
gulp.task('jekyll-prod', gulp.series('purify', function(done) {
  browserSync.notify(messages.jekyllProd);

  return cp.spawn('bundle', ['exec', 'jekyll', 'build'],
  {stdio: 'inherit'})
    .on('close', done);
}));
