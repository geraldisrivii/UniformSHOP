import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/dist/pluginWebpack5';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    let isDev = options.mode === 'development';
    return [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!composer.json', '!composer.lock', '!vendor/**', '!App/**', '!functions.php'],
            // cleanAfterEveryBuildPatterns: [],
        }),
        new HtmlWebpackPlugin({ template: options.paths.html, filename: 'index.php' }),
        new VueLoaderPlugin(),
        !isDev && options.analyzer && new BundleAnalyzerPlugin(),
        !isDev && new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
}