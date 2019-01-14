const gulp = require('gulp');
const log = require('fancy-log');
const critical = require('critical').stream;

// Generate & Inline Critical-path CSS

gulp.task('critical-home', function(done) {
  return gulp
    .src('app/index.html')
    .pipe(critical({base: 'app/', inline: false, css: ['app/assets/styles/main.css']}))
    .on('error', function(err) {
      log.error(err.message);
    })
    .pipe(gulp.dest('app/_includes/critical-css/'));
    done();
});

gulp.task('critical-chant-index', function(done) {
  return gulp
    .src('app/chanting/index.html')
    .pipe(critical({base: 'app/', inline: false, css: ['app/assets/styles/main.css']}))
    .on('error', function(err) {
      log.error(err.message);
    })
    .pipe(gulp.dest('app/_includes/critical-css/'));
    done();
});

gulp.task('critical-chanting', function(done) {
  return gulp
    .src('app/chanting/morning.html')
    .pipe(critical({base: 'app/', inline: false, css: ['app/assets/styles/main.css']}))
    .on('error', function(err) {
      log.error(err.message);
    })
    .pipe(gulp.dest('app/_includes/critical-css/'));
    done();
});

gulp.task('critical-404', function(done) {
  return gulp
    .src('app/404.html')
    .pipe(critical({base: 'app/', inline: false, css: ['app/assets/styles/main.css']}))
    .on('error', function(err) {
      log.error(err.message);
    })
    .pipe(gulp.dest('app/_includes/critical-css/'));
    done();
});
