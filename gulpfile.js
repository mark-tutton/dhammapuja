'use strict';


const gulp        = require('gulp');
/*
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const sourcemaps  = require('gulp-sourcemaps');
const cssnano     = require('gulp-cssnano');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const cp          = require('child_process');
const critical    = require('critical');
*/




require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/jekyll');
require('./gulp/tasks/watch');
require('./gulp/tasks/browser-sync');
require('./gulp/tasks/critical-css');


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
