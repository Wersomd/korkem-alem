const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const gulpif = require("gulp-if");

const svg = () => {
  return src([
    "src/img/*.svg",
    "src/img/**/*.svg",
  ])
    .pipe(
      plumber({
        errorHandler: notify.onError(),
      })
    )
    .pipe(newer(path.svg.dest))
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.svg.dest))
    .pipe(
      src([
        "src/img/*.svg",
        "src/img/**/*.svg",
      ])
    )
    .pipe(newer(path.svg.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.svg.dest));
};

module.exports = svg;
