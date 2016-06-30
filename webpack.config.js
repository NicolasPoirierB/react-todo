module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/js/',
        filename: 'main.min.js'
    },
    devServer: {
        inline: true,
        hot: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}
