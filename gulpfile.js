'use strict';

const gulp = require('gulp');

require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/jekyll');
require('./gulp/tasks/watch');
require('./gulp/tasks/browser-sync');
require('./gulp/tasks/critical-css');
require('./gulp/tasks/images');
require('./gulp/tasks/purifycss');


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

gulp.task('default', ['browser-sync', 'watch']);
gulp.task('critical', ['critical-home', 'critical-chant-index', 'critical-chanting', 'critical-404']);
gulp.task('build', ['scripts-prod', 'sass-prod', 'purify', 'jekyll-prod']);
