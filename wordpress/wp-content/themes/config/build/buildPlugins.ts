import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/dist/pluginWebpack5';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

import { BuildOptions } from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    let isDev = options.mode === 'development';
    return [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new VueLoaderPlugin(),
        !isDev && options.analyzer && new BundleAnalyzerPlugin(),
        !isDev && new MiniCssExtractPlugin()
    ]
}