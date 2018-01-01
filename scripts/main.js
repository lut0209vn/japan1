'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );

$(".navbar-toggle").click(function(){
  $(".navbar-header .nav-main").stop().slideToggle("1");
});
var myInterval=setInterval(function(){
    var currentactive=$(".active");
    var currentimg=$(".backstretch1 .active").index();//2
    var nextimg=$(".backstretch1 .active").next();
    var lengimg=$(".backstretch1 img").length;//3

    $(".backstretch1 .active").removeClass("active");
    nextimg.addClass("active");
    if(currentimg==(lengimg-1)){
      $(".backstretch1 img").removeClass("active");
      $(".backstretch1 img:first-child").addClass("active");
    }
},4000);
// $(document).ready(function(){
  $(window).scroll(function(){
  	if ($(this).scrollTop() > 10) {
      $(".page-header").css("position","fixed");
  	} else {
      $(".page-header").css("position","relative");
  	}
  });
// }
