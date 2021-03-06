'use strict';

import path from 'path';
import clean from 'gulp-clean';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target, url.scripts.assets);

    // Run task

    gulp.task('delete-packer', () => {

        return gulp.src([
                 path.join(target, url.scripts.assets, '*.*'),
                '!' + path.join(target, url.scripts.assets, 'app.min-*.js'),
            ], {
                read: false
            })
            .pipe(clean({
                force: true
            }))
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(dest));

    });

}