const path = require('path');
var nodeExternals = require('webpack-node-externals');
//* SERVER FILE WHICH COMPILES THE TYPESCRIPT FILES
//* OUTPUTS FILE IN LINE 24 and runs that file as the server
const serverConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.server.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};
//* COMPILES THE REACT APP FROM CLIENT DIRECTORY WHICH LOOKS FOR TSX OR TS FILES AND COMPILES THEM
//* ALSO LOOKS FOR SCSS FILES in line 51 AND EXPORTS via Webpack CLI
//* TYPE "npx webpack" which finds and builds the project
const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/client/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.client.json'
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    }
};

module.exports = [serverConfig, clientConfig];