var gulp = require('gulp')
var babel = require('gulp-babel')

gulp.task('babel', function () {
  return gulp.src('index.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'))
})

gulp.task('default', ['babel'])
