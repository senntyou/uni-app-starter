module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'node', 'prettier'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  globals: {
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true,
    plus: true,
    uni: true,
    Vue: true,
    wx: true,
    my: true,
    swan: true,
    tt: true,
    qh: true,
    qa: true,
    HWH5: true,
    weex: true,
    __id__: true,
    __uniConfig: true,
    __uniRoutes: true,
    __registerPage: true,
    UniViewJSBridge: true,
    UniServiceJSBridge: true,
    __PLATFORM__: true,
    __VERSION__: true,
    __GLOBAL__: true,
    __PLATFORM_TITLE__: true,
    __PLATFORM_PREFIX__: true,
    it: true,
    describe: true,
    expect: true,
  },
  rules: {
    'no-unused-vars': 0,
    'default-case': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    radix: 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
    'no-multi-assign': 0,
    'prefer-rest-params': 0,
    'import/prefer-default-export': 0,
  },
};
