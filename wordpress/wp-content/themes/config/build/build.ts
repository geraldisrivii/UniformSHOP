import webpack from "webpack";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function build(options: BuildOptions): webpack.Configuration {
    const {mode, port, paths} = options;

    let isDev = mode === 'development';

    const config: webpack.Configuration = {
        mode: mode ?? 'development',
        entry: {
            main: paths.entry,
        },
        output: {
            path: paths.output,
            filename: 'js/[name].[contenthash].js',
            // clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : false,
    }

    return config;
}