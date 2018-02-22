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
    'app/_assets/_scripts/vendor/jquery/jquery-3.2.1-custom.min.js',
    // 'app/_assets/_scripts/vendor/materialize-v0.100.2-custom.js',
    './node_modules/materialize-css/dist/js/materialize.min.js',
    // './node_modules/simple-jekyll-search/dest/simple-jekyll-search.min.js',
    'app/_assets/_scripts/vendor/simple-jekyll-search.min.js',
    './node_modules/plyr/dist/plyr.js',
    'app/_assets/_scripts/modules/header-scroll.js',
    'app/_assets/_scripts/modules/night-mode.js',
    'app/_assets/_scripts/init.js',
    './node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
    'app/_assets/_scripts/modules/chanting.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/assets/scripts'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('app/assets/scripts/'));
});



/**
 * Compile files from _js into both _site/assests/ (for live injecting) & site (for future jekyll builds)
 * Run this task before serving site to public
 */
 gulp.task('scripts-prod', function() {
   return gulp.src([
     'app/_assets/_scripts/vendor/jquery/jquery-3.2.1-custom.min.js',
     'app/_assets/_scripts/vendor/materialize-v0.100.2-custom.js',
     './node_modules/simple-jekyll-search/dest/simple-jekyll-search.min.js',
     './node_modules/plyr/dist/plyr.js',
     'app/_assets/_scripts/scripts.js',
     './node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
     'app/_assets/_scripts/chanting.js'
   ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/scripts/'))
    .pipe(gulp.dest('app/assets/scripts/'));
});
