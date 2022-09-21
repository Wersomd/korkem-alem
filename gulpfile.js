const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");
const app = require("./config/app.js");

const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const svg = require('./task/svg');
const font = require('./task/font.js');
const withoutCompressionCss = require('./task/withoutCompressionCss.js');
const jsonTask = require('./task/jsonTask');


const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.svg.watch, svg).on("all", browserSync.reload)
    watch(path.font.watch, font).on("all", browserSync.reload);
    watch(path.withoutCompressionCss.watch, withoutCompressionCss).on("all", browserSync.reload);
    watch(path.jsonTask.watch, jsonTask).on("all", browserSync.reload);

}

const build = series(
    clear,
    parallel(html, scss, js, img, svg, font, withoutCompressionCss, jsonTask)
);

const dev = series(
    build,
    parallel(watcher, server)
);


exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.svg = svg;
exports.font = font;
exports.clear = clear;
exports.withoutCompressionCss = withoutCompressionCss;
exports.jsonTask = jsonTask;

exports.default = app.isProd
    ? build
    : dev;