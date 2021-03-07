const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfarmer5102",
    projectName: "subTwo",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    context: path.join(__dirname, 'src'),
    entry: {serverEntry: ['./index.js']},
    output: {
      filename: 'index.js'
    }
  });
  
};
