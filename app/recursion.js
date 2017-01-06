exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let res = [];
    let dirTree = [];

    function readDir(dir) {
      dirTree.push(dir.dir);

      dir.files.forEach((item) => {
        if (typeof item === 'object') {
          readDir(item);
          return;
        }

        if (dirName && dirTree.indexOf(dirName) === -1) {
          return;
        }

        res.push(item);
      });

      dirTree.pop();
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
