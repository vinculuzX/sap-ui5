var gulp  = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

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
    .pipe(livereload())
})

gulp.task('default',()=>{
    livereload.reload();
    gulp.watch(sassDir , gulp.parallel('sass'));
    gulp.watch(viewDir,()=>{
        gulp.src(viewDir).pipe(livereload())
    })
    gulp.watch(controllerDir,()=>{
        gulp.src(controllerDir).pipe(livereload())
    })
    gulp.watch(modelDir,()=>{
        gulp.src(modelDir).pipe(livereload())
    })
})

