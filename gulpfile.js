import pkg from 'gulp';
// const { src, dest, watch, series } = pkg;
const { src, dest, series } = pkg;
// import browserSync from 'browser-sync';
// const bs = browserSync.create();
// import cleanCss from 'gulp-clean-css';
// import purgeCss from '@fullhuman/postcss-purgecss';
// import postcss from 'gulp-postcss';
import concat from 'gulp-concat';

// const serve = (cb) => {
//   bs.init({
//     server: {
//       baseDir: './',
//     },
//     open: false,
//     notify: false,
//   });
//   cb();
// };

// const reload = (cb) => {
//   bs.reload();
//   cb();
// };

export const globalStyles = () => {
  return src([
    'src/css/fonts.css',
    'src/css/animations.css',
    'src/css/root.css',
    'src/css/base.css',
    'src/css/utilities.css',
    'src/css/layouts/**/*.css',
    'src/css/components/**/*.css',
    'src/css/global.css',
  ])
    .pipe(concat('global.css'))
    .pipe(dest('assets/css'));
};

export const pageStyles = () => {
  return src('src/css/pages.css').pipe(dest('assets/css'));
};

export const build = series(globalStyles, pageStyles);
