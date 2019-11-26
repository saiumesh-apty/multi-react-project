const { join } = require('path');
const appSrc = join(process.cwd(), 'src');

const baseConfig = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                }, {
                    loader: "react-svg-loader",
                    options: {
                        svgo: {
                            plugins: [{
                                removeTitle: true
                            }]
                        }
                    }
                }],
        },
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: appSrc,
            loader: require.resolve('babel-loader'),
            options: {
                customize: require.resolve(
                    'babel-preset-react-app/webpack-overrides'
                ),
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                cacheCompression: false,
                compact: false,
            },
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ]
        },
        {
            test: /\.scss$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" },
            ]
        }
        ]
    }
};

module.exports = {
    baseConfig
};