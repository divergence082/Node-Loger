

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

  console.log = log.__log;
  console.info = log.__info;
  console.warn = log.__warn;
  console.error = log.__error;
};


/**
 * @type {number}
 */
log.__level = 3;


/**
 * @type {!log.ILogger}
 */
log.__logger = new log.Logger(process.stdin, process.stdin, process.stderr,
    process.stderr, log.encode);


/**
 * @param {...} var_args
 */
log.__log = function(var_args) {
  if (log.__level > 3) {
    log.__logger.log(arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__info = function(var_args) {
  if (log.__level > 2) {
    log.__logger.info(arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__warn = function(var_args) {
  if (log.__level > 1) {
    log.__logger.warn(arguments);
  }
};


/**
 * @param {...} var_args
 */
log.__error = function(var_args) {
  log.__logger.error(arguments);
};
