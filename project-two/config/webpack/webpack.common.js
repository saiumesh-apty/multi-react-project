//@ts-check
const path = require('path');
const merge = require('webpack-merge');
const { baseConfig } = require('./base.config');

const config = merge(baseConfig, {
});

module.exports = config;
