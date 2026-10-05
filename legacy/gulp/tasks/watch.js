const gulp = require('gulp');


/**
 * Watch scss files for changes & recompile
 * Watch js files for changes & recompiles
 * Watch html/md/images/audio files, run jekyll & reload BrowserSync
 */

gulp.task('watch', function (done) {
  gulp.watch(
    [
      'app/_assets/_styles/_sass/**/*.scss',
    ], gulp.series('sass'));

  gulp.watch(
    [
      'app/_assets/_scripts/**/*.js'
    ], gulp.series('scripts'));

  gulp.watch(
    [
      'app/**/*.txt',
      'app/**/*.html',
      'app/_layouts/**/*.html',
      'app/_includes/**/*.html',
      'app/assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,gif,GIF,webp,WEBP,tif,TIF}',
      'app/assets/audio/**/*.{mp3,MP3,ogg,OGG,mp4,MP4}'
    ], gulp.series('jekyll-rebuild'));

    done();
});
