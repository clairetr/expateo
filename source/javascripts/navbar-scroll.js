// navbar transition jQuery script
$(window).scroll(function(e){
  if ($(this).scrollTop() > 0) {
    $(".navbar").removeClass("navbar-wagon").addClass("navbar-scrolled");
  }
  else {
    $(".navbar").removeClass("navbar-scrolled").addClass("navbar-wagon");
  }
});