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

$(window).scroll(function(){
	if ($(this).scrollTop() > 10) {
    $(".page-header").css("position","fixed");
	} else {
    $(".page-header").css("position","relative");
	}
});
//wow
new WOW().init();
//scroll
$(document).ready(function () {
            //Smooth scrolling when click to nav
            $('.nav-main li a').click(function (e) {
                e.preventDefault();
                var curLink = $(this);
                var scrollPoint = $(curLink.attr('href')).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
            })
            $(window).scroll(function () {
                onScrollHandle();
            });
            // function onScrollHandle() {
            //     //Navbar shrink when scroll down
            //     $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
            //     //Get current scroll position
            //     var currentScrollPos = $(document).scrollTop();
            //     //Iterate through all node
            //     $('.nav-main li a').each(function () {
            //         var curLink = $(this);
            //         var refElem = $(curLink.attr('href'));
            //         //Compare the value of current position and the every section position in each scroll
            //         if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
            //             //Remove class active in all nav
            //             $('.nav-main li ').removeClass("active");
            //             //Add class active
            //             curLink.parent().addClass("active");
            //         }
            //         else {
            //             curLink.parent().removeClass("active");
            //         }
            //     });
            // }
        });
