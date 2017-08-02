(function($) {

  var app = {
    testAlert: function() {
      alert('JS is hooked up correctly.');
    },
    init: function() {
      app.testAlert();
    }
  };

  $(window).on('load', () => {
    app.init();
  });

})(window.jQuery);
