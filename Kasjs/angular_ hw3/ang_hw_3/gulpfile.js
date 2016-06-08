var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
gulp.task('less',function(){
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream : true
        }))
});
gulp.task('watch',['browserSync','less'],function(){
    gulp.watch('app/less/*.less',['less']);
    gulp.watch('app/js/*.js',browserSync.reload);
    gulp.watch('app/*.html',browserSync.reload);
});
gulp.task('browserSync',function(){
    browserSync.init({
        server :{
            baseDir : 'app'
        }
    })
});


