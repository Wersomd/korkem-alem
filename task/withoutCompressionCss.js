const { src, dest } = require("gulp");

const path = require("../config/path");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const shorthand = require("gulp-shorthand");
const csso = require("gulp-csso");
const groupMediaCssQueries = require("gulp-group-css-media-queries");

const withoutCompressionCss = () => {
    return src(["src/css/*.css", "src/css/**/*.css"])
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(shorthand())
        .pipe(groupMediaCssQueries())
        .pipe(csso())
        .pipe(dest(path.withoutCompressionCss.dest));
}

module.exports = withoutCompressionCss;