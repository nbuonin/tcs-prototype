var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var reload      = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: './'
        }
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
