const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass',function(){

    return gulp.src('./sass/**/*.scss')
    
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())


    .pipe(gulp.dest('./public/css'));

});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
  });

  gulp.task('minify-css', () => {
    return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));

  });