// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['react-app', 'airbnb'],
  // Allows ESLint to resolve alias defined in react-scripts' webpack config
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('kai-react-scripts-next/config/webpack.config.dev.js'),
      },
    },
  },
  globals: {
    TimelineLite: false,
    TimelineMax: false,
    TweenLite: false,
    TweenMax: false,
    Back: false,
    Bounce: false,
    Circ: false,
    Cubic: false,
    Ease: false,
    EaseLookup: false,
    Elastic: false,
    Expo: false,
    Linear: false,
    Power0: false,
    Power1: false,
    Power2: false,
    Power3: false,
    Power4: false,
    Quad: false,
    Quart: false,
    Quint: false,
    RoughEase: false,
    Sine: false,
    SlowMo: false,
    SteppedEase: false,
    Strong: false,
    Draggable: false,
    SplitText: false,
    VelocityTracker: false,
    CSSPlugin: false,
    ThrowPropsPlugin: false,
    BezierPlugin: false,
  },
  // add your custom rules here
  rules: {
    'jsx-a11y/href-no-hash': 'off', // This rule is used in CRA but has been removed in the later version of jsx-a11y used by airbnb
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // allow optionalDependencies
    // 'import/no-extraneous-dependencies': ['error', {
    //   'optionalDependencies': ['test/unit/index.js']
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
  },
};
