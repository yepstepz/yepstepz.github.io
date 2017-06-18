var gulp = require('gulp'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer');
var paths = {
    src: {
        css: './*.css',
    },

    dest: {
        css: './',
    }
};
gulp.task('prefix', function () {
    console.log(gulp.dest(paths.dest.css))
    return gulp.src(paths.src.css)
        .pipe(autoprefixer({
            browsers: [
                'last 3 versions',
                '> 1%'
            ],
            grid: true,
            cascade: false
        }))
        .pipe(gulp.dest(paths.dest.css))
});
gulp.task('prod', ['prefix']);