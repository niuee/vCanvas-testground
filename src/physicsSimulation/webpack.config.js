const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
{
    mode: "development",
    entry: {index: path.resolve(__dirname, './physicsSimulation.ts'), physicsWorker: path.resolve(__dirname, './physicsSimulationWorker.ts')},
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../../dist/physicsSimulation/'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: "src/physicsSimulation/html/index.html",
            filename: 'index.html',
            inject: 'body',
            path: path.resolve(__dirname, '../../dist/physicsSimulation/'),// Output directory
            publicPath: "/"
        })
    ],
    devServer: {
        static: path.resolve(__dirname, '../../dist/physicsSimulation/'), // Specify the directory for serving static files
    },
}
];