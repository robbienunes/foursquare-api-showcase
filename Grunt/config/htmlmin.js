module.exports = {
    dist: {
      options: {
		collapseWhitespace: true,
		conservativeCollapse: true,
        removeComments: true,
		minifyJS: true
      },
      files: {
        'static/index.html': 'static/index.html'
      }
    }
}