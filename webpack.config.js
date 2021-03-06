const path = require('path');
module.exports = {
    mode:"production",
    entry: {
        index: "./src/index.js",
        // about: "./src/about.js",
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader',
                ] 
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    }
}