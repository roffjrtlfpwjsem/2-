var gulp = require('gulp');
// var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var css = require('gulp-uglifycss');
var rewritehtml = require('gulp-rewrite-image-path');

var src = 'public_html/src';
var dist = 'public_html/dist';

var paths = {
	js: src + '/js/*.js',
	sass: src + '/sass/*.scss',
	html: src + '/**/*.html',
	img: src + '/images/**/*.*',
	cssmin: dist + '/css/*.css'
};

// // 웹서버를 localhost:8000 로 실행한다.
// gulp.task('server', function () {
// 	return gulp.src(dist + '/')
// 		.pipe(webserver());
// });

// 이미지 파일을 압축한다.
gulp.task('gulp-imagemin', function () {
	return gulp.src(paths.img)
  // .pipe(imagemin())
  // .pipe(gulp.dest(dist + '/images'));
});

// 자바스크립트 파일을  압축한다.
gulp.task('gulp-uglify', function () {
	return gulp.src(paths.js)
  .pipe(uglify())
  .pipe(gulp.dest(dist + '/js'));
});

// sass 파일을 css 로 컴파일한다.
gulp.task('gulp-sass', function () {
return gulp.src(paths.sass)
  .pipe(sass())
	.on('error', swallowError)  //에러가 나도 watch가 멈추지 않는다.
  .pipe(gulp.dest(dist + '/css'));
});

// css 압축
gulp.task('gulp-uglifycss', function () {
   return gulp.src(paths.cssmin)
	.pipe(css())
  .pipe(gulp.dest(dist + '/css'));
});

// HTML 파일을 압축한다.
gulp.task('gulp-minify-html', function () {
return gulp.src(paths.html)
  .pipe(minifyhtml())
	// .pipe(rewritehtml({path:"images/"}))
  .pipe(gulp.dest(dist + '/'));
});

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', function () {
livereload.listen();
gulp.watch(paths.js, ['gulp-uglify']);
gulp.watch(paths.sass, ['gulp-sass']);
gulp.watch(paths.html, ['gulp-minify-html']);
gulp.watch(paths.img, ['gulp-imagemin']);
gulp.watch(paths.cssmin, ['gulp-uglifycss']);
gulp.watch(dist + '/**').on('change', livereload.changed);
});

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

//기본 task 설정
gulp.task('default', [
'gulp-uglify', 'gulp-imagemin',
'gulp-sass',
 'gulp-minify-html',
'gulp-uglifycss', 'watch' ]);
