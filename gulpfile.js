const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('scss', () => {
    return gulp
    .src('dev/scss/**/*.scss');
});

gulp.task('default', () => {

});