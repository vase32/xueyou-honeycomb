'use strict';
const path = require('path');

module.exports = {
  /* honeybee config occupied */
  root: undefined,
  serverRoot: undefined,
  serverEnv: undefined,
  /* honeybee config end */
  debug: true,
  prefix: true,
  staticPath: undefined,
  logs: {
    sys: {
      level: 'INFO'
    }
  },
  middleware: {
    cookieSession: {
      config: {
        secret: 'defalutSecret!PLEASE!REPLACE!'
      }
    },
    webpack: {
      enable: true,
      module: 'honeypack',
      router: '/assets',
      config: {
        hot: true,
      },
    },
    spa: {
      enable: true,
      module: '../middleware/spa',
      config: {
        ignore: ['/api', '/assets'],
      },
    },
  },
  extension: {
  }
};
