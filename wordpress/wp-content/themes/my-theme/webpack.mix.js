
let mix = require('laravel-mix');
const path = require('path');

mix.js('src/main.js', 'assets/js')
    // .sourceMaps()
    .vue({ version: 3 })
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    });;