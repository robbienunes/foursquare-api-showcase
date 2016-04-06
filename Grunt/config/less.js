module.exports = {
    andigital: {
		options: {
			sourceMap: true,
			sourceMapFilename: 'static/Content/css/style.css.map',
			sourceMapURL: 'static/Content/css/style.css.map',
			sourceMapBasepath: 'static/Content/css',
            sourceMapRootpath: '/',
			paths: ["css"]
		},
		files: {
			"static/Content/css/style.css": "static/Less/style.less"
		}
	}
};