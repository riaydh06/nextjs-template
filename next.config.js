const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const bundleAnalyzer = require('@next/bundle-analyzer');

dotenvLoad();
const withNextEnv = nextEnv();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  browserslist: ['>0.2%', 'not dead', 'not op_mini all'],

  publicRuntimeConfig: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },

  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
};

module.exports = withNextEnv(withBundleAnalyzer(config));
