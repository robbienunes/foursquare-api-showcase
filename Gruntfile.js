module.exports = function (grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'Grunt/config'),

        init: true,

        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: ['dependencies']
        }
    });
};