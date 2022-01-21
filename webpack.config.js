const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: [path.resolve(__dirname, "node_modules/@tensorflow/tfjs-react-native")],
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/env', { modules: 'commonjs' }], 
        ],
      }
    }
  });
  return config;
};