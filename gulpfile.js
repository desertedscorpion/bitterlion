var gulp = require("gulp");

// Include Our Plugins
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// Lint Task
       gulp.task("lint", function() {
    return gulp.src("gulpfile.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
        return 5;
});
