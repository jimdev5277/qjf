import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
gulp.task('mock', () => {
     nodemon({
         script:'/server/mock/proxy.config.js',
         ext:'js',
         exec:'ssr --proxy server/mock/proxy.config.js -p 8001 --cors'
     })
});