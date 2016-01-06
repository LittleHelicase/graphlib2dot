var gulp = require('gulp')
var babel = require('gulp-babel')
var es = require('event-stream')

gulp.task('babel', function () {
  return es.concat(
    gulp.src('index.js')
      .pipe(babel())
      .pipe(gulp.dest('lib')),
    gulp.src('index_back.js')
      .pipe(babel())
      .pipe(gulp.dest('lib')))
})

gulp.task('default', ['babel'])
