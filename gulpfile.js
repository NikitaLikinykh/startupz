const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); // Используем библиотеку sass

// Таск для компиляции Sass
gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

// Таск для слежения за изменениями и автоматической компиляции
gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
});

// Задача по умолчанию
gulp.task("default", gulp.series("sass", "watch"));
