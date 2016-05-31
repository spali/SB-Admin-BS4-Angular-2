import {join} from 'path';
import {FONT_DEST} from '../config';

export = function buildFontsDev(gulp, plugins) {
  return function () {
    return gulp.src([
        // TODO: should be defined in config.ts
        join('node_modules/font-awesome/fonts', '*.{eot,ttf,woff,woff2,otf}')
      ])
      .pipe(gulp.dest(FONT_DEST));
  };
}
