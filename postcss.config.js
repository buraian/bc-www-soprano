const path = require('path')
const fs = require('fs')

module.exports = {
    parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-assets': {
            loadPaths: ['./src/assets/images'],
            relative: true,
        },
        // 'postcss-map': {
        //     basePath: './config/variables/',
        //     maps: fs.readdirSync(path.join(__dirname, './config/variables')),
        // },
        // 'postcss-mixins': { mixinsDir: path.join(__dirname, './config/mixins') },
        // 'lost': {},
        'postcss-preset-env': {},
        'precss': {},
        'postcss-color-function': {},
        'postcss-calc': {},
        'postcss-nested': {},
        'autoprefixer': {},
        'cssnano': {},
        'doiuse': {
            ignoreFiles: ['**/normalize.css'],
        },
    },
}
