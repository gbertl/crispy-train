import pkg from 'gulp';
const { watch, series } = pkg;
import browserSync from 'browser-sync';
const bs = browserSync.create();

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

const watchAll = () => {
  watch(['**/*.html', '**/*.css', '**/*.js'], reload);
};

export default series(serve, watchAll);
