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

$(document).ready(function(){
$('#services-tabs').responsiveTabs({
//    startCollapsed: 'accordion'
    animation: 'slide'
    });
});

$(document).ready(function(){
    $("#isotope-container").isotope({});
    $("#isotope-filters").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter");
//        console.log(filterValue);
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active-button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        },
        zoom:{
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement){
                return openerElement.is('img') ? openerElement :
                openerElement.find('img');
            }
        }
    })
})