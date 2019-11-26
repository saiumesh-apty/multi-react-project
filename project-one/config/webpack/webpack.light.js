process.env.NODE_ENV = 'production';

const path = require('path');
const merge = require('webpack-merge');
const chromeCommon = require('./webpack.common');
const outputPath = path.join(process.cwd(), 'build', 'dev');

module.exports = merge(chromeCommon, {
    output: {
        path: outputPath,
    },
    entry: {
        project_one_light: path.join(process.cwd(), 'src', 'index.tsx')
    },
    // devtool: 'eval-source-map',
    mode: process.env.NODE_ENV,
    watch: false,
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    }
});
