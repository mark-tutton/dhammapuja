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
 * Default task: Running `gulp` will compile the sass, concats scripts,
 * build the jekyll site, launch BrowserSync, and watch files. (Adds sourcemaps to main.js and main.css)
 *
 *
 * Critical task: Generates the critical CSS of each html file.
 *
 *
 * Build task: Running 'gulp build' will compile the sass,
 * concat scripts, clean unused CSS,
 * and then build the jekyll site. (Minifys Sass & scripts. No sourcemaps)
 *
 */

gulp.task('default', gulp.series('sass', 'scripts', 'watch', 'browser-sync'));

gulp.task('critical', gulp.series(gulp.parallel('critical-home', 'critical-chant-index', 'critical-chanting', 'critical-404')));

gulp.task('build', gulp.series('scripts-prod', 'sass-prod', 'jekyll-prod', 'critical'));
