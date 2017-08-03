var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    cp          = require('child_process')
;

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */

gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Watch scss files for changes & reload
 * Watch js files for changes & reload
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_assets/css/**/*.scss', '_assets/css/**/*.css'], ['css']);
    gulp.watch('_assets/js/**/*.js', ['scripts']);

    gulp.watch(['_assets/img/**/*.png',
               '_assets/img/**/*.jpg',
               '_assets/img/**/*.svg'], ['jekyll-rebuild']);

    gulp.watch(['**/*.html'], ['jekyll-rebuild']);

    browserSync.reload({reloadDelay: 5000});
});

gulp.task('css', function() {
  gulp.src(['_assets/css/**/*.scss', '_assets/css/**/*.css'])
    browserSync.reload();
});


gulp.task('scripts', function() {
  gulp.src('_assets/js/**/*.js')
    browserSync.reload();
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
