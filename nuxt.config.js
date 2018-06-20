const conf = require('./config');
module.exports = {
  mode: conf.mode,
  head: conf.head,
  css: conf.css,
  modules: conf.modules,
  markdownit: {
    injected: true
  },
  plugins: conf.plugins,

  loading: false,
  loadingIndicator: {
    name: 'cube-grid',
    color: '#323330',
    background: 'white'
  },
  render: {
    bundleRenderer: {
      shouldPreload: file => {
        return ['js'].includes(file);
      }
    }
  },
  dev: conf.isDev,
  generate: {
    dir: 'docs'
  },
  build: {
    extractCSS: true,
    optimization: conf.build.optimizationn,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (isClient) {
        config.performance.maxEntrypointSize = 1510000;
        config.performance.maxAssetSize = 500000;
        config.module.rules.push(conf.build.extraRules);
      }
    }
  }
};