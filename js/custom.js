jQuery.noConflict();
(function( $ ) {
	$(function() {
		// More code using $ as alias to jQuery

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.royal-nav').singlePageNav({
        offset: $(".royal-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".royal-nav").addClass("sticky");
        }
        else{
            $(".royal-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */

		// More code using $ as alias to jQuery
	});
})(jQuery);
