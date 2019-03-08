'use strict';
var gulp  = require('gulp');
var sass = require('gulp-sass');
var browserSync =  require('browser-sync').create();

// Directory configuration
var rootDirectory = 'webapp/' ;
var viewDir = `${rootDirectory}view/*.xml`;
var controllerDir = `${rootDirectory}controller/*.js`;
var modelDir = `${rootDirectory}model/*.json`;
var sassDir = `${rootDirectory}sass/*.sass`;
var cssDir = `${rootDirectory}css/`;

gulp.task('sass',()=>{
    return gulp.src(sassDir)
    .pipe(sass())
    .pipe(gulp.dest(cssDir))
    .pipe(browserSync.stream())
})

gulp.task('server', gulp.parallel('sass' ,() => {
    browserSync.init({
        proxy: "localhost:8080/index.html"
    });
    gulp.watch(sassDir, gulp.parallel('sass'))
    gulp.watch(viewDir).on('change', browserSync.reload)
}));

gulp.task('default', gulp.parallel('server'));

