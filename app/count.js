exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer;

    function log(n) {
      console.log(n);

      if (n < end) {
        n++;
        timer = setTimeout(() => { log(n); }, 100);
      }
    }

    log(start);

    return {
      cancel: function() {
        clearTimeout(timer);
      }
    };
  }
};
