exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  },

  remove: function(arr, item) {
    return arr.filter((currentItem) => currentItem !== item);
  },

  removeWithoutCopy: function(arr, item) {
    let arrLength = arr.length;
    let i = 0;

    for (i; i < arrLength; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        arrLength = arrLength - 1;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
