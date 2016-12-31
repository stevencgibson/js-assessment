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
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((accumulator, currentValue) => {
      if (currentValue === item) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map((currentValue) => currentValue * currentValue);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((accumulator, currentValue, index) => {
      if (currentValue === target) {
        accumulator.push(index);
      }

      return accumulator;
    }, []);
  }
};
