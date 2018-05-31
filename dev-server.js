const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./build/webpack.config.dev.js');
const options = {
  contentBase: path.join(__dirname, "dist"),
  hot: true,
  compress: 3000
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});