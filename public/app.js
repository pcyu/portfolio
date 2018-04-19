(function($) {

  var app = {
    init: function() {
      app.mobileToggle();
    },
    mobileToggle: function() {  //c009
      $(document).on('click', '#t-mobileicon', function() {
        $('html').toggleClass('disable');
        $(this).toggleClass('active');
        $('#t-navitems').toggleClass('active');
        $('#t-overlay').toggleClass('active');
      });
    },
    toggleBox: function(){
      $('.viewport').click(function(){
        $(this).toggleClass('inactive');
      });
    }
  };

  $(window).on('load', () => {
    app.init();
  });

  $(window).on('resize', () => {
    app.sizer();  //c007
  });

})(window.jQuery);
