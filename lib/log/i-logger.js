


/**
 * @interface
 */
log.ILogger = function() {};


/**
 * @param {...} var_args
 */
log.ILogger.prototype.log = function(var_args) {};


/**
 * @param {...} var_args
 */
log.ILogger.prototype.info = function(var_args) {};


/**
 * @param {...} var_args
 */
log.ILogger.prototype.warn = function(var_args) {};


/**
 * @param {...} var_args
 */
log.ILogger.prototype.error = function(var_args) {};


/**
 * @param {number} level
 * @param {!IWritableStream} stream
 */
log.ILogger.prototype.initStream = function(level, stream) {};
