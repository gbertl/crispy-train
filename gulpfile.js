import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
import browserSync from 'browser-sync';
const bs = browserSync.create();
import cleanCss from 'gulp-clean-css';
import purgeCss from '@fullhuman/postcss-purgecss';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';

const serve = (cb) => {
  bs.init({
    server: {
      baseDir: './',
    },
    open: false,
    notify: false,
  });
  cb();
};

const reload = (cb) => {
  bs.reload();
  cb();
};

export const cleanPages = () => {
  return src('assets/css/pages/**/*.css')
    .pipe(postcss([purgeCss({ content: ['**/*.html', '**/*.js'] })]))
    .pipe(
      cleanCss({
        format: 'beautify',
        level: {
          2: {
            all: false,
            mergeAdjacentRules: true,
            overrideProperties: true,
            removeEmpty: true,
            removeDuplicateRules: true,
          },
        },
      })
    )
    .pipe(dest('dist'));
};

const watchAll = () => {
  watch(['**/*.html', '**/*.css', '**/*.js'], reload);
};

export default series(serve, watchAll);
