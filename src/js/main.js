(function($) {

  var app = {
    testAlert: function() {
      alert('JS is hooked up correctly.');
    },
    init: function() {
      //app.testAlert();  //c002
      app.mobileToggle();
    },
    mobileToggle: function() {
      $(document).on('click', '#mobile', function() {
        $('html').toggleClass('disable');
        $('#mobile').toggleClass('active');
        $('#themobilemenu').toggleClass('active');
        $('#thenav').toggleClass('inactive');
        $('#thenimg').toggleClass('opacity');
        $('#theoverlay').toggleClass('active');
      });
    }
  };

  $(window).on('load', () => {
    app.init();
  });

})(window.jQuery);
