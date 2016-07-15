(function(gulp, jshint) {
    "use strict";
    return [
        gulp.task("lint", function() {
            return gulp.src("gulpfile.js")
                .pipe(jshint())
                .pipe(jshint.reporter("default"));
        })
    ];
}(
    require("gulp"),
    require("gulp-jshint")
));
