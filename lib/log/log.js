

/**
 * @namespace
 */
var log = {};


/**
 * @typedef {!function(number, !Array.<*>): ?Buffer}
 */
log.Codec;


/**
 * @param {!log.ILogger} logger
 * @param {number=} opt_level
 */
log.init = function(logger, opt_level) {
  console.__log = console.log;

  log.__level = opt_level || log.__level;
  log.__logger = logger;

  console.log = log.__log;
  console.info = log.__info;
  console.warn = log.__warn;
  console.error = log.__error;
};


/**
 * @param {...} var_args
 * @return {!Array.<*>}
 */
log.args = function(var_args) {
  return Array.apply(null, arguments);
};


/**
 * @type {number}
 */
log.__level = 4;


/**
 * @type {?log.ILogger}
 */
log.__logger = null;


/**
 * @param {...} var_args
 */
log.__log = function(var_args) {
  if (log.__logger && log.__level > 3) {
    log.__logger.log.apply(log.__logger, arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__info = function(var_args) {
  if (log.__logger && log.__level > 2) {
    log.__logger.info.apply(log.__logger, arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__warn = function(var_args) {
  if (log.__logger && log.__level > 1) {
    log.__logger.warn.apply(log.__logger, arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__error = function(var_args) {
  if (log.__logger) {
    log.__logger.error.apply(log.__logger, arguments);
  }
};
