var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task("local-ui-server", function() {
	connect.server({
		port: 3000
	});
});

gulp.task("default", ["local-ui-server"]);