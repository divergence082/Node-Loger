

/**
 * @param {number} level
 * @param {!Array.<*>} args
 * @return {?Buffer}
 */
log.encode = function(level, args) {
  var text = log.__color(-1) + log.__color(level);
  var i = 0;

  while (i < args.length) {
    text += args[i].toString();
    i += 1;
  }

  return new Buffer(text);
};


/**
 * @param {number} level
 * @return {string}
 */
log.__color = function(level) {
  var color = '\\';

  switch (level) {
    case 0: {
      return color += log.Color.RED;
    }

    case 1: {
      return color += log.Color.YELLOW;
    }

    case 2: {
      return color += log.Color.LIGHT_GRAY;
    }

    case 3: {
      return color += log.Color.GREEN;
    }
  }

  return color + log.Color.NONE;
};
