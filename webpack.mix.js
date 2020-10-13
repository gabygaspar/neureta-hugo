const mix = require('laravel-mix');

mix.babelConfig({
  plugins: ['@babel/plugin-syntax-dynamic-import'],
});

const isDevelopment = process.env.NODE_ENV === 'development';
const publicPath = isDevelopment ? 'static' : 'public';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(publicPath);

mix
  .js('assets/js/home.js', `${publicPath}/js`)
  .extract();