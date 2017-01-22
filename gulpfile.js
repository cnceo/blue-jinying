var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var connect = require('gulp-connect');
//执行
gulp.task(
  'default',
  [
    'base',
    'index',
    'news',
    'news_detail',
    'financial_car',
    'financial_community',
    'financial_education'
  ],
  function(){});
//base
gulp.task('base',function(){
  //JS插件压缩
  gulp.src([
    './src/js/base.js',
    './src/js/dydong.change.js',
    './src/js/dydong.oneScroll.js',
    './src/js/dydong.keepScroll.js'
    ])
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩
  gulp.src([
    './src/css/base.css',
    './src/css/animate.css'
  ])
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //assets 文件转移
  gulp.src('./src/assets/**/*.*')
      .pipe(gulp.dest('./dest/assets/'))
  //images 文件转移
  gulp.src('./src/images/**/**/*.*')
      .pipe(gulp.dest('./dest/images/'))
  
});
//index
gulp.task('index',function(){
  //JS文件压缩
  gulp.src('./src/js/index.js')
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩合并
  gulp.src(['./src/css/index.css','./src/css/index.an.css'])
      .pipe(concat("index.css"))
      .pipe(gulp.dest('./dest/css/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/index/*.*')
      .pipe(gulp.dest('./dest/images/index/'))
  //路径替
  gulp.src('./src/index.html')
      .pipe(replace(/<!-- need minify -->([\s\S]*)<!-- need minify over -->/, '<link rel="stylesheet" type="text/css" href="css/index.css">'))
      .pipe(gulp.dest('./dest/'))
});

//news
gulp.task('news',function(){
  //JS文件压缩
  gulp.src('./src/js/news.js')
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩合并
  gulp.src(['./src/css/news.css'])
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/news/*.*')
      .pipe(gulp.dest('./dest/images/news/'))
  //路径替
  gulp.src('./src/news.html')
      .pipe(gulp.dest('./dest/'))
});

//news_detail
gulp.task('news_detail',function(){
  //CSS压缩合并
  gulp.src(['./src/css/news_detail.css'])
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/news/*.*')
      .pipe(gulp.dest('./dest/images/news/'))
  //路径替
  gulp.src('./src/news_detail.html')
      .pipe(gulp.dest('./dest/'))
});

//financial_car
gulp.task('financial_car',function(){
  //JS文件压缩
  gulp.src('./src/js/financial_car.js')
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩合并
  gulp.src(['./src/css/financial_car.css','./src/css/financial_car.an.css'])
      .pipe(concat("financial_car.css"))
      .pipe(gulp.dest('./dest/css/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/financial/car/*.*')
      .pipe(gulp.dest('./dest/images/financial/car/'))
  //路径替
  gulp.src('./src/financial_car.html')
      .pipe(replace(/<!-- need minify -->([\s\S]*)<!-- need minify over -->/, '<link rel="stylesheet" type="text/css" href="css/financial_car.css">'))
      .pipe(gulp.dest('./dest/'))
});

//financial_community
gulp.task('financial_community',function(){
  //JS文件压缩
  gulp.src('./src/js/financial_community.js')
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩合并
  gulp.src(['./src/css/financial_community.css','./src/css/financial_community.an.css'])
      .pipe(concat("financial_community.css"))
      .pipe(gulp.dest('./dest/css/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/financial/community/*.*')
      .pipe(gulp.dest('./dest/images/financial/community/'))
  //路径替
  gulp.src('./src/financial_community.html')
      .pipe(replace(/<!-- need minify -->([\s\S]*)<!-- need minify over -->/, '<link rel="stylesheet" type="text/css" href="css/financial_community.css">'))
      .pipe(gulp.dest('./dest/'))
});

//financial_education
gulp.task('financial_education',function(){
  //JS文件压缩
  gulp.src('./src/js/financial_education.js')
      .pipe(uglify({mangle:true}))
      .pipe(gulp.dest('./dest/js/'))
  //CSS压缩合并
  gulp.src(['./src/css/financial_education.css','./src/css/financial_education.an.css'])
      .pipe(concat("financial_education.css"))
      .pipe(gulp.dest('./dest/css/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('./dest/css/'))
  //图片文件更新
  gulp.src('./src/images/financial/education/*.*')
      .pipe(gulp.dest('./dest/images/financial/education/'))
  //路径替
  gulp.src('./src/financial_education.html')
      .pipe(replace(/<!-- need minify -->([\s\S]*)<!-- need minify over -->/, '<link rel="stylesheet" type="text/css" href="css/financial_education.css">'))
      .pipe(gulp.dest('./dest/'))
});



//定义livereload任务
gulp.task('connect',function(){
  connect.server({
    port:8220,
    livereload:true
  });
});
//定义看守任务
var watch_file={
  'html':'src/*.html',
  'js':'src/js/*.js',
  'css':'src/css/*.css',
  'images':'src/images/**/*',
}
gulp.task('watch',function(){
  for(var key in watch_file){
    gulp.watch(watch_file[key],[key]);
  }
});
for(var key in watch_file){
gulp.task(key, function(){
  gulp.src(watch_file[key])
      .pipe(connect.reload());
});
}
gulp.task('livereload',['connect','watch']);


