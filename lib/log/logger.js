


/**
 * @param {!IWritableStream} logStream
 * @param {!IWritableStream} infoStream
 * @param {!IWritableStream} warnStream
 * @param {!IWritableStream} errorStream
 * @param {log.Codec} codec
 *
 * @constructor
 * @implements {log.ILogger}
 */
log.Logger = function(logStream, infoStream, warnStream, errorStream, codec) {

  /**
   * @type {!IWritableStream}
   */
  this.__logStream = logStream;

  /**
   * @type {!IWritableStream}
   */
  this.__infoStream = infoStream;

  /**
   * @type {!IWritableStream}
   */
  this.__warnStream = warnStream;

  /**
   * @type {!IWritableStream}
   */
  this.__errorStream = errorStream;

  /**
   * @type {log.Codec}
   */
  this.__codec = codec;

};


/**
 * @inheritDoc
 */
log.Logger.prototype.log = function(var_args) {
  var message = this.__codec(4, this.__arguments(arguments));

  if (message) {
    this.__logStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.info = function(var_args) {
  var message = this.__codec(3, this.__arguments(arguments));

  if (message) {
    this.__infoStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.warn = function(var_args) {
  var message = this.__codec(2, this.__arguments(arguments));

  if (message) {
    this.__warnStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.error = function(var_args) {
  var message = this.__codec(1, this.__arguments(arguments));

  if (message) {
    this.__errorStream.write(message);
  }
};


/**
 * @param {...} var_args
 * @return {!Array.<*>}
 */
log.Logger.prototype.__arguments = function(var_args) {
  var args = [];
  var i = 0;

  while (i < arguments.length) {
    args.push(arguments[i]);

    i += 1;
  }

  return args;
};
