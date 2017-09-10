const gulp     = require('gulp');
const critical = require('critical');


/*
 * Critical CSS for home/index
 */
gulp.task('critical-home', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'index.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/home-critical.css',
    minify: false,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-chant-index', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'chanting/index.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/chant-index-critical.css',
    minify: false,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-chanting', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'chanting/morning.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/chanting-critical.css',
    minify: false,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for 404
 */
gulp.task('critical-404', ['jekyll-dev'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: '404.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/404-critical.css',
    minify: false,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
