const gulp                   = require('gulp');
const imagemin               = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngQuant       = require ('imagemin-pngquant');



gulp.task('images', function() {
  gulp.src('app/_assets/_images/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,gif,GIF}')
    .pipe(imagemin([
      imagemin.gifsicle(),
      imageminJpegRecompress({
        loops: 4,
        min: 70,
        max: 85,
        quality: 'veryhigh'
      }),
      imageminPngQuant(),
        imagemin.svgo()
    ], {
      verbose: true
    }))

    .pipe(gulp.dest('app/assets/img'))
});
