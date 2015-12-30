'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
plugins.source = require('vinyl-source-stream');
plugins.browserify = require('browserify');
plugins.watchify = require('watchify');
plugins.combine = require('stream-combiner2');

gulp.task('clean', require('del').bind(null, ['dist']));
gulp.task('jshint', require('./gulp/jshint')(gulp, plugins));
gulp.task('scripts:formio', require('./gulp/scripts')(gulp, plugins));
gulp.task('scripts:formio-full', require('./gulp/scripts-full')(gulp, plugins));
gulp.task('scripts', ['scripts:formio', 'scripts:formio-full']);
gulp.task('build', ['clean', 'scripts'], function() {
  gulp.start('jshint');
});
gulp.task('watch', require('./gulp/scripts')(gulp, plugins, true));
gulp.task('default', ['build', 'watch']);