'use strict';

const gulp = require('gulp');

require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/purifycss');
require('./gulp/tasks/jekyll');
require('./gulp/tasks/watch');
require('./gulp/tasks/browser-sync');
require('./gulp/tasks/critical-css');
require('./gulp/tasks/images');



/**
 * Default task, running just `gulp` will compile the sass, concats scripts,
 * and build the jekyll site, launch BrowserSync & watch files. (Adds sourcemaps to main.js and main.css)
 *
 *
 * Critical task, generates the critical CSS of each html file
 *
 *
 * Build task, running 'gulp build' will compile the sass,
 * concats scripts, cleans unused CSS,
 * and then builds the jekyll site. (Minifys Sass & scripts. No sourcemaps)
 *
 */

// gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
gulp.task('default', gulp.series('sass', 'scripts', 'watch', 'browser-sync'));

gulp.task('critical', gulp.series(gulp.parallel('critical-home', 'critical-chant-index', 'critical-chanting', 'critical-404')));
gulp.task('build', gulp.series('scripts-prod', 'sass-prod', 'purify', 'jekyll-prod'));
