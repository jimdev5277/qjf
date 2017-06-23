import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'image', 'pages', 'mock', 'scripts', ['browser', 'server']));