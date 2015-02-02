


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
  this.__logStream = process.stdout;

  /**
   * @type {!IWritableStream}
   */
  this.__infoStream = process.stdout;

  /**
   * @type {!IWritableStream}
   */
  this.__warnStream = process.stderr;

  /**
   * @type {!IWritableStream}
   */
  this.__errorStream = process.stderr;

  /**
   * @type {log.Codec}
   */
  this.__codec = codec;

};


/**
 * @inheritDoc
 */
log.Logger.prototype.log = function(var_args) {
  var message = this.__codec(4, log.args.apply(null, arguments));

  if (message) {
    this.__logStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.info = function(var_args) {
  var message = this.__codec(3, log.args.apply(null, arguments));

  if (message) {
    this.__infoStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.warn = function(var_args) {
  var message = this.__codec(2, log.args.apply(null, arguments));

  if (message) {
    this.__warnStream.write(message);
  }
};


/**
 * @inheritDoc
 */
log.Logger.prototype.error = function(var_args) {
  var message = this.__codec(1, log.args.apply(null, arguments));

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
