module.exports = {
    livereload: {
        files: ['static/Less/*.less'],
		tasks: ['less:andigital'],
        options: {
            livereload: true
        }
    }
}