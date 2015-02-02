

var log = require('../bin/index.js');

var test = {};


/**
 * Tests whether logger.__args works ok.
 */
test.args = function() {

  /**
   * @param {...} var_args
   */
  function check(var_args) {
    var args = log.args.apply(null, arguments);

    if (args instanceof Array && args.length > 1) {
      console.log('test.args: OK\n')
    } else {
      console.log('test.args: Fail\n')
    }
  }

  check(1, 2, 3);
};


/**
 * Tests whether args comes to encode function as array.
 */
test.encodeArgs = function() {

  /**
   * @param {number} level
   * @param {!Array.<*>} args
   * @return {!Buffer}
   */
  function encode(level, args) {
    if (args instanceof Array && args.length > 1) {
      return new Buffer('test.encodeArgs: OK\n');
    } else {
      return new Buffer('test.encodeArgs: Fail\n');
    }
  }

  log.init(new log.Logger(encode));
  console.log(1, 2, 3, 4);
};


test.args()
test.encodeArgs();