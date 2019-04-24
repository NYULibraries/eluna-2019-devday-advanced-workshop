'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let concat = require("gulp-concat");

let buildParams = config.buildParams;

gulp.task('watch-css', ['select-view'], () => {

    gulp.watch([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()],['custom-css']);
});




gulp.task('custom-css', ['select-view'], () => {

    return gulp.src([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()])
        .pipe(concat(buildParams.customCssFile))
        .pipe(gulp.dest(buildParams.viewCssDir()));


});