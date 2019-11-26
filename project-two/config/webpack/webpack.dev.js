process.env.NODE_ENV = 'production';

const path = require('path');
const merge = require('webpack-merge');
const chromeCommon = require('./webpack.common');
const outputPath = path.join(process.cwd(), 'build', 'dev');

module.exports = merge(chromeCommon, {
    entry: {
        project_two: path.join(process.cwd(), 'src', 'index.tsx')
    },
    output: {
        path: outputPath,
    },
    // devtool: 'eval-source-map',
    mode: process.env.NODE_ENV,
    watch: false,
});
