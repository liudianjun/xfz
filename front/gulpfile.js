var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var bs = require("browser-sync");
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var util = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");

var path = {
  'css':'./src/css/**/',
  'js':'./src/js/',
  'images':'./src/images/',
  'dist_css':'./dist/css/',
  'dist_js':'./dist/js/',
  'dist_images':'./dist/images/',
  'html':'./template/**/',
};

//创建html任务

gulp.task("html", function () {
    gulp.src(path.html + '*.html')

        .pipe(bs.reload({stream:true}))
});


//  创建css任务

gulp.task("css", function () {
    gulp.src(path.css + '*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(cssnano())
        .pipe(rename({"suffix":".min"}))
        .pipe(gulp.dest(path.dist_css))
        .pipe(bs.reload({stream:true}))
});

//  创建js任务

gulp.task("js", function () {
    gulp.src(path.js + '*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify().on("error",util.log))
        .pipe(sourcemaps.write())
        .pipe(rename({"suffix":".min"}))
        .pipe(gulp.dest(path.dist_js))
        .pipe(bs.reload({stream:true}))
});

//  创建images任务

gulp.task("images", function () {
    gulp.src(path.images + '*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest(path.dist_images))
        .pipe(bs.reload({stream:true}))
});

//监听文件修改任务

gulp.task("watch", function () {

    // gulp.watch(path.css + '*.css', ['css']);
    watch(path.css + '*.scss',gulp.series("css"));
    // gulp.watch(path.js + '*.js', ['js']);
    watch(path.js + '*.js', gulp.series("js"));
    // gulp.watch(path.images + '*.*', ['images']);
    watch(path.images + '*.*', gulp.series("images"));
    watch(path.html + '*.html', gulp.series("html"));

});

//初始化浏览器任务

gulp.task("bs", function() {

    bs.init({
        'server':{
            'baseDir':'./'
        }
    });

});

// 创建默认任务

// gulp.task('default', ['watch']);
gulp.task("default",gulp.parallel('bs', 'watch'));
gulp.task("default",gulp.parallel('watch'));