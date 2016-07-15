(function(task, src, jshint){
    "use strict";
    return task("lint", function(){
        return src("gulpfile.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
    })  
}(
    require("gulp").task,
    require("gulp").src,
    require("jshint")
));