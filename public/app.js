(function($) {

  var app = {
    init: function() {
      app.mobileToggle();
      app.scroll();
    },
    mobileToggle: function() {  //c009
      $(document).on('click', '#t-mobileicon', function() {
        $('html').toggleClass('disable');
        $(this).toggleClass('active');
        $('#t-navitems').toggleClass('active');
        $('#t-overlay').toggleClass('active');
      });
    },
    scroll: function(){
      $('.scroll').on("click", function(e){
        if (this.hash !== "") {
          e.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 600, function(){
            window.location.hash = hash;
          });
        }
      });
    }
  };
  $(window).on('load', () => {
    app.init();
  });
})(window.jQuery);
