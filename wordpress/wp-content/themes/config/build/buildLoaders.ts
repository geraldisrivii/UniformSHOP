import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    let isDev = options.mode === 'development';


    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'vue-style-loader',
            "css-loader",
            "sass-loader"
        ],
    }

    const cssLoader = {
        test: /\.css$/i,
        use: [
            'vue-style-loader',
            "css-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
    }

    const vueLoader = {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
    }

    const imagesLoader = {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
    }

    return [
        scssLoader,
        cssLoader,
        // tsLoader,
        vueLoader,
        imagesLoader,
    ]
}