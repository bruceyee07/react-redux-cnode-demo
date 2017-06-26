const path = require('path')

console.log(process.env.NODE_ENV)
console.log(111)

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: './src'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.styl?$/,
				loader: 'style-loader!css-loader!stylus-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	}
}