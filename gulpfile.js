'use strict';

const gulp        = require('gulp');


require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/jekyll');
require('./gulp/tasks/watch');
require('./gulp/tasks/browser-sync');
require('./gulp/tasks/critical-css');
require('./gulp/tasks/images');


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 *
 * Build task, running 'gulp build' will compile the sass(no sourcemaps, minifys),
 * concats & minifys scripts, and then compiles the jekyll site.
 *
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['scripts-prod', 'sass-prod', 'jekyll-prod']);
