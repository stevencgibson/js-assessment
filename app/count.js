exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    function log(n) {
      console.log(n);

      if (n < end) {
        n++;
        setTimeout(() => { log(n); }, 100);
      }
    }

    log(start);
  }
};
