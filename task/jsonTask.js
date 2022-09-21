const { src, dest } = require("gulp");

const path = require("../config/path.js");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");



const jsonTask = () => {
    return src(["src/*.json", "src/**/*.json"])
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(dest(path.jsonTask.dest))
}

module.exports = jsonTask;