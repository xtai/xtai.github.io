var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('build', shell.task(['jekyll build --watch --incremental']));

gulp.task('serve', function () {
  browserSync.init({
    'files': '_site/**',
    'server': {
      'baseDir': '_site/'
    },
    'ghostMode': {
      'clicks': true,
      'forms': false,
      'scroll': false
    },
    'injectChanges': false,
    'reloadDelay': 500,
    'reloadDebounce': 500
  });
});

gulp.task('default', ['build', 'serve']);
