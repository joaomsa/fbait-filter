module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        shell: {
            installFirefox: {
                command: "firefox fbait-filter.user.js"
            },
            installChromium: {
                command: "chromium fbait-filter.user.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.registerTask("install:firefox", ["shell:installFirefox"]);
    grunt.registerTask("install:chromium", ["shell:installChromium"]);
    grunt.registerTask("install", ["install:firefox", "install:chromium"]);
    grunt.registerTask("default", ["install:firefox"]);
}
