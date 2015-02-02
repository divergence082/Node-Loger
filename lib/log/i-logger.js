


/**
 * @interface
 */
log.ILogger = function() {};


/**
 * @param {!Array.<*>} args
 */
log.ILogger.prototype.log = function(args) {};


/**
 * @param {!Array.<*>} args
 */
log.ILogger.prototype.info = function(args) {};


/**
 * @param {!Array.<*>} args
 */
log.ILogger.prototype.warn = function(args) {};


/**
 * @param {!Array.<*>} args
 */
log.ILogger.prototype.error = function(args) {};


/**
 * @param {number} level
 * @param {!IWritableStream} stream
 */
log.ILogger.prototype.initStream = function(level, stream) {};
