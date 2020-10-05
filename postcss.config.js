const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    'layouts/**/*.html',
    'content/**/*.html',
    'assets/js/**/*.vue'
  ],
  // Fix for automatic paragraph with interpolation content with Hugo
  // https://discourse.gohugo.io/t/disable-automatic-paragraphs/9742
  whitelist: ['p'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['assets/css', 'node_modules'],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(process.env.HUGO_ENVIRONMENT !== 'development' ? [purgecss] : []),
  ],
};