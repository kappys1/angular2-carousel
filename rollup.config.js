export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ng2-carousel-module.umd.js',
    sourceMap: true,
    format: 'umd',
    moduleName: 'ng.carouselModule',
    external: ['hammerjs','@angular/core','@angular/platform-browser','@angular/common'],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/platform-browser': 'ng.platform-browser',
        'hammerjs': 'Hammer'
    }
}