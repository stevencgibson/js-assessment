exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let res = [];

    function readDir(data) {
      data.files.forEach((item) => {
        if (typeof item === 'object') {
          readDir(item)
          return;
        }

        res.push(item);
      });
    }

    readDir(data);

    return res;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
