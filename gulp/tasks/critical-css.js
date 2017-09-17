const gulp     = require('gulp');
const critical = require('critical');

/*
 * This generates the critical CSS for the relevant page. This speeds up the first paint of DOM content
 */

/*
 * Critical CSS for home/index
 */
gulp.task('critical-home', ['jekyll-prod'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'index.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/home-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-chant-index', ['jekyll-prod'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'chanting/index.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/chant-index-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for chanting index
 */
gulp.task('critical-chanting', ['jekyll-prod'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: 'chanting/morning.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/chanting-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});


/*
 * Critical CSS for 404
 */
gulp.task('critical-404', ['jekyll-prod'], function(cb) {
  critical.generate({
    //inline: true,
    base: 'app/',
    src: '404.html',
    css: ['app/assets/styles/main.css'],
    dest: '_includes/critical-css/404-critical.css',
    minify: true,
    width: 320,
    height: 480,
    ignore: ['font-face']
  });
});
