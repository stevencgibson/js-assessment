exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj, null);
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map((item) => function() { return fn(item); });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    return Array.prototype.slice.call(arguments).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  },

  callIt: function(fn) {
    const argsMinusFn = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, argsMinusFn);
  },

  partialUsingArguments: function(fn) {
    const argsMinusFn = Array.prototype.slice.call(arguments, 1, arguments.length);

    return function() {
      return fn.apply(null, argsMinusFn.concat(Array.prototype.slice.call(arguments)));
    };
  },

  curryIt: function(fn) {

  }
};
