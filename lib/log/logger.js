


/**
 * @param {log.Codec} codec
 *
 * @constructor
 * @implements {log.ILogger}
 */
log.Logger = function(codec) {

  /**
   * @type {!IWritableStream}
   */
  this.__logStream = process.stdin;

  /**
   * @type {!IWritableStream}
   */
  this.__infoStream = process.stdin;

  /**
   * @type {!IWritableStream}
   */
  this.__warnStream = process.stdout;

  /**
   * @type {!IWritableStream}
   */
  this.__errorStream = process.stdout;

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
 * @inheritDoc
 */
log.Logger.prototype.initStream = function(level, stream) {

  switch (level) {

    case (1): {
      this.__errorStream = stream;
      break;
    }

    case (2): {
      this.__warnStream = stream;
      break;
    }

    case (3): {
      this.__infoStream = stream;
      break;
    }

    case (4): {
      this.__logStream = stream;
      break;
    }
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
