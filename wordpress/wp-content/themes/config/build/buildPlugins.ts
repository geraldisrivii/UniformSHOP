import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/dist/pluginWebpack5';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    let isDev = options.mode === 'development';
    const plugins: Configuration['plugins'] = [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!composer.json', '!composer.lock', '!vendor/**', '!App/**', '!functions.php'],
        }),
        new HtmlWebpackPlugin({
            template: options.paths.html, filename: 'index.php', chunks: 'all',
        }),
        new VueLoaderPlugin(),
        !isDev && options.analyzer && new BundleAnalyzerPlugin(),
        // !isDev && new MiniCssExtractPlugin({
        //     filename: 'style.css',
        //     chunkFilename: 'assets/css/[name].css',
        // })
    ]


    return plugins;

}