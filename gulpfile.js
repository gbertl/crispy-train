import pkg from 'gulp';
// const { src, dest, watch, series } = pkg;
const { src, dest, series, task, watch } = pkg;
import browserSync from 'browser-sync';
const bs = browserSync.create();
// import cleanCss from 'gulp-clean-css';
import purgeCss from '@fullhuman/postcss-purgecss';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
// import purgecss from 'gulp-purgecss';

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

export const globalStyles = () => {
  return src([
    'src/css/fonts.css',
    'src/css/animations.css',
    'src/css/root.css',
    'src/css/base.css',
    'src/css/utilities.css',
    'src/css/layouts/**/*.css',
    'src/css/components/**/*.css',
  ])
    .pipe(concat('global.css'))
    .pipe(dest('assets/css'));
};

export const pageStyles = () => {
  return src('src/css/pages.css').pipe(dest('assets/css'));
};

export const build = series(globalStyles, pageStyles);

export const watchAll = () => {
  watch('src/**/*.css', series(globalStyles, pageStyles));
};

export const watchMainStyles = () => {
  watch(['assets/css/**/*.css', './explore.html'], reload);
};

export default series(globalStyles, pageStyles, watchAll);
// export default series(serve, watchMainStyles)

export const purgeOne = () => {
  return src('assets/css/ted.css')
    .pipe(
      postcss([
        purgeCss({
          content: ['payments/payment.html', 'payments/payment-confirmed.html', '**/*.js'],
        }),
      ])
    )
    .pipe(dest('assets/css'));
};

// export const removeStyles = () => {
//   return src('src/css/framework-module-alpha.css')
//     .pipe(purgecss({
//       content: ['./explore-additional.html']
//     }))
//     .pipe(dest('build/css'))
// }

task('watch', () => {
  watch('./src/**/*.css', build);
});
