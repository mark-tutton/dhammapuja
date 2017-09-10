const gulp        = require('gulp');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync');

/*
 * Comple files from scripts into both _site/assets/ (live injeciting) & site (for future jekyll builds)
 */

gulp.task('scripts', function() {
  return gulp.src([
    'app/_assets/_scripts/jquery/jquery-3.2.1.min.js',
    'app/_assets/_scripts/materialize.min.js',
    'app/_assets/_scripts/scripts.js',
    'app/_assets/_scripts/jquery/jquery.smooth-scroll.js',
    'app/_assets/_scripts/chanting.js'
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('_site/assets/scripts'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('app/assets/scripts/'));
});



/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
 gulp.task('scripts-prod', function() {
   return gulp.src([
     'app/_assets/_scripts/jquery/jquery-3.2.1.min.js',
     'app/_assets/_scripts/materialize.min.js',
     'app/_assets/_scripts/scripts.js',
     'app/_assets/_scripts/jquery/jquery.smooth-scroll.js',
     'app/_assets/_scripts/chanting.js'
   ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/scripts/'))
    .pipe(gulp.dest('app/assets/scripts/'));;
});
