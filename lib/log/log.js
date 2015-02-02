

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
 * @type {number}
 */
log.__level = 4;


/**
 * @type {?log.ILogger}
 */
log.__logger = null;


/**
 * @param {...} var_args
 * @return {!Array.<*>}
 */
log.__args = function(var_args) {
  var args = new Array(arguments.length);

  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i];
  }

  return args;
};


/**
 * @param {...} var_args
 */
log.__log = function(var_args) {
  if (log.__logger && log.__level > 3) {
    log.__logger.log(log.__args(arguments));
  }
};


/**
 * @param {...} var_args
 */
log.__info = function(var_args) {
  if (log.__logger && log.__level > 2) {
    log.__logger.info(log.__args(arguments));
  }
};


/**
 * @param {...} var_args
 */
log.__warn = function(var_args) {
  if (log.__logger && log.__level > 1) {
    log.__logger.warn(log.__args(arguments));
  }
};


/**
 * @param {...} var_args
 */
log.__error = function(var_args) {
  if (log.__logger) {
    log.__logger.error(log.__args(arguments));
  }
};
