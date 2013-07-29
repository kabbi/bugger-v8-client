
var fromV8Type = require('../types').fromV8Type;

module.exports = function _continue(opts, cb) {
  if ('function' === typeof opts) {
    cb = opts;
    opts = null;
  }
  if ('function' !== typeof cb) cb = function(){}

  return this._sendRequest('continue', opts, function(err, raw, refMap) {
    if (err != null) return cb(err);
    return cb();
  });
};