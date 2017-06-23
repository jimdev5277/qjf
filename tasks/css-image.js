 import gulp from 'gulp';
 import gulpif from 'gulp-if';
 import livereload from 'gulp-livereload';
 import args from './util/args';
 import sass from "gulp-ruby-sass";

 gulp.task('css', () => {
     return sass('./app/css/**/*.scss', {
             base: './app/css/'
         }).on('error', sass.logError)
         .pipe(gulp.dest('./server/public/css'))
         .pipe(gulpif(args.watch, livereload()))
 });

 gulp.task('image', () => {
     return gulp.src(['./app/image/**/*'], {
             base: './app/image'
         })
         .pipe(gulp.dest('./server/public/image'));
 })