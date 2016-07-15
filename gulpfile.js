(function(gulp, jshint, karma) {
    "use strict";
    return [
        gulp.task("lint", function() {
            return gulp.src("*.js")
                .pipe(jshint())
                .pipe(jshint.reporter("default"));
        }),
        gulp.task("unit-test", function(){
            return gulp.src("./foobar")
            .pipe(karma({
                configFile: "karma.conf.js",
                action: "run"
            }));
        })
    ];
}(
    require("gulp"),
    require("gulp-jshint"),
    require("gulp-karma")
));
