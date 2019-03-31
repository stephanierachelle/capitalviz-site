var gulp = require('gulp'),
svgmin = require('gulp-svgmin');

gulp.task('svgmin', function () {
    return gulp.src('./app/assets/images/icons.1/capitalviz-logo.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./app/temp/images'));
});