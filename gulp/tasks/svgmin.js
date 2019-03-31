var gulp = require('gulp'),
svgmin = require('gulp-svgmin');

gulp.task('svgmin', function () {
    return gulp.src('./app/assets/images/icons.1/*')
        .pipe(svgmin())
    return gulp.src('./app/assets/images/icons')
    .pipe(gulp.dest(''));
});
