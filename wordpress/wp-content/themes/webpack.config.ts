
import webpack from 'webpack';
import { build } from './config/build/build';
import { BuildMode, BuildPaths } from './config/build/types/types';
import path from 'path';

type Mode = 'production' | 'development';

interface EnvVariables {
    mode: BuildMode;
    port: number;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {

    const Paths: BuildPaths = {
        output: path.resolve(__dirname, 'my-theme'),
        entry: path.resolve(__dirname, 'src', 'main.js'),
        html: path.resolve(__dirname, 'src', 'index.php'),
        src: path.resolve(__dirname, 'src'),
    }
    const config: webpack.Configuration = build({
        port: env.port ?? 5000,
        mode: env.mode ?? 'development',
        paths: Paths,
        analyzer: env.analyzer ?? false
    });

    return config;
};