(function(gulp) {
    "use strict";
    var jshint = require("gulp-jshint");

    // Lint Task
    gulp.task("lint", function() {
        return gulp.src("gulpfile.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
        return 5;
    });
}(
    require("gulp")
));
