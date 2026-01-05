'use strict';

module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      { allowDeclareFields: true },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-transform-class-properties',
    // Template colocation - this associates .hbs files with .js/.ts files
    '@embroider/addon-dev/template-colocation-plugin',
  ],
};
