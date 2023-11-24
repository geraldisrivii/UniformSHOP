import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.ts', '.tsx', '.js', '.vue'],
        alias: {
            '@': options.paths.src
        }
    }
}