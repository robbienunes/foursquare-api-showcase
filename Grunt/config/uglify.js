module.exports = {
    options: {
        banner: '/*! ANDigital, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    js: {
        src: '.tmp/app.js',
        dest: 'static/Dist/js/app.min.js'
    }
};