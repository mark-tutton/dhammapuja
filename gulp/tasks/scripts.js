const gulp        = require('gulp');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync');
const sourcemaps  = require('gulp-sourcemaps');

/*
 * Comple files from scripts into both _site/assets/ (live injeciting) & site (for future jekyll builds)
 */

gulp.task('scripts', function() {
  return gulp.src([
    //'app/_assets/_scripts/vendor/jquery/jquery-3.2.1.min.js',
    'app/_assets/_scripts/vendor/jquery/jquery-custom.min.js',
    //'app/_assets/_scripts/vendor/materialize.min.js',
    'app/_assets/_scripts/vendor/materialize.js',
    'app/_assets/_scripts/scripts.js',
    'app/_assets/_scripts/vendor/jquery/jquery.smooth-scroll.js',
    'app/_assets/_scripts/chanting.js'
    //'app/_assets/_scripts/vendor/smooth-scroll.js',
    //'app/_assets/_scripts/chanting-js.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/assets/scripts'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('app/assets/scripts/'));
});



/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
 gulp.task('scripts-prod', function() {
   return gulp.src([
     'app/_assets/_scripts/vendor/jquery/jquery-custom.min.js',
     'app/_assets/_scripts/vendor/materialize.js',
     'app/_assets/_scripts/scripts.js',
     'app/_assets/_scripts/vendor/jquery/jquery.smooth-scroll.js',
     'app/_assets/_scripts/chanting.js'
   ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/scripts/'))
    .pipe(gulp.dest('app/assets/scripts/'));;
});
