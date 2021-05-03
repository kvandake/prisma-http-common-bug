module.exports = function(options) {
  return {
    ...options,
    target: 'node',
    externals: [...options.externals, '_http_common']
  };
};