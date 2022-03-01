const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');

const scripts = require('./scripts');
const styles = require('./styles');

function browsersync() {
  browserSync.init({
    server: { baseDir: 'dist' },
    notify: false,
    online: true,
  });
}

function js() {
  return src(scripts)
    .pipe(concat('scripts.js'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

function css() {
  return src(styles)
    .pipe(concat('main.css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function html() {
  return src('src/templates/**/*.html')
    .pipe(dest('dist/'))
    .pipe(browserSync.stream());
}

function cleanDist() {
  return del('dist/**/*', { force: true });
}

function startWatch() {
  watch('./src/js/**/*.js', js);
  watch('./src/css/**/*.css', css);
  watch('./src/templates/**/*.html', html);
}

module.exports = {
  build: series(cleanDist, css, js, html),
  start: parallel(css, js, html, browsersync, startWatch),
};
