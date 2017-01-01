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
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
