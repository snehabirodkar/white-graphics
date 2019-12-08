/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */
$(window).on('load',function(){
    $("#preloader").delay(500).fadeOut('slow');
});
$(document).ready(function(){
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        margin: 20,
        loop: true,
        nav: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>']
    });
});

$(document).ready(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow")+"%"
            },800);
        });
        this.destroy();
    },{
        offset: 'bottom-in-view'
    });
});