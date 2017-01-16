
import gulp = require("gulp");

gulp.task("M-ElectronAngular", function () {
    gulp.src(["../../electron-angular/!(node_modules)/**/*.?(js|ts|js.map|html)", "../../electron-angular/*.?(js|ts|js.map)"]).pipe(gulp.dest("node_modules/elegular"));
});