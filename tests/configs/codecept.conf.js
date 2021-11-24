require('dotenv').config();

exports.config = {

  helpers: {
    ApplitoolsHelper: {
      require: '../helpers/applitools_helper.js',
      applitoolsKey: process.env.APPLITOOLS_KEY,
      // args: ['--disable-gpu', '--no-sandbox'],
    },
    WebDriver: {
      url: 'https://unity.com',
      path: '/wd/hub',
      host: 'hub.lambdatest.com',
      port: 80,
      browser: 'safari',
      user: process.env.LAMBDATEST_USERNAME,
      key: process.env.LAMBDATEST_KEY,

      desiredCapabilities: {
        'LT:Options': {
          build: 'One Trust',
          name: 'One Trust on iPhone',
          platform: 'iOS',
          deviceName: 'iPhone 12',
          platformVersion: '14.4',
          browserName: 'Safari',
          console: true,
          network: false,
          visual: true,
        },
      },
    },
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
          debug: true,
        },
      },
      mochawesome: {
        stdout: './output/console.log',
        options: {
          steps: true,
          reportDir: './output',
          json: false,
          reportFilename: 'Automated_Test_Run_Report',
          inlineAssets: 'true',
          saveHtml: 'true',
          overwrite: 'true',
        },
      },
    },
  },
  output: '../output/',
  gherkin: {
    features: '../features/*.feature', // feature files location
    steps: '../step_definitions/*.ts', // step definitions location
  },
  include: {
    I: '../step_definitions/steps_file.js',
  },
  name: 'codeceptTest',
};
