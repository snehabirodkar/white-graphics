///**
// * scripts.js
// * Contains Script for basic static website named "White Graphics"
// */
//$(window).on('load',function(){
//    $("#preloader").delay(500).fadeOut('slow');
//});
//$(document).ready(function(){
//    $("#team-right").owlCarousel({
//        items: 2,
//        autoplay: true,
//        margin: 20,
//        loop: true,
//        nav: true,
//        smartSpeed: 700,
//        autoplayHoverPause: true,
//        dots: false,
//        navText: ['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>']
//    });
//});
//
//$(document).ready(function(){
//    $("#progress-elements").waypoint(function(){
//        $(".progress-bar").each(function(){
//            $(this).animate({
//                width: $(this).attr("aria-valuenow")+"%"
//            },800);
//        });
//        this.destroy();
//    },{
//        offset: 'bottom-in-view'
//    });
//});
//
//$(document).ready(function(){
//$('#services-tabs').responsiveTabs({
////    startCollapsed: 'accordion'
//    animation: 'slide'
//    });
//});
//
//$(document).ready(function(){
//    $("#isotope-container").isotope({});
//    $("#isotope-filters").on("click", "button", function () {
//        let filterValue = $(this).attr("data-filter");
////        console.log(filterValue);
//        $("#isotope-container").isotope({
//            filter: filterValue
//        });
//        //active-button
//        $("#isotope-filters").find('.active').removeClass('active');
//        $(this).addClass('active');
//    });
//});
//$(document).ready(function(){
//    $("#portfolio-wrapper").magnificPopup({
//        delegate: 'a',
//        type: 'image',
//        gallery:{
//            enabled: true
//        },
//        zoom:{
//            enabled: true,
//            duration: 300,
//            easing: 'ease-in-out',
//            opener: function (openerElement){
//                return openerElement.is('img') ? openerElement :
//                openerElement.find('img');
//            }
//        }
//    })
//})
/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */


/*********************************************************
                        PRELOADER JS
*********************************************************/
$(window).on('load',function(){
    $("#preloader").delay(500).fadeOut('slow');
});

/*********************************************************
                        OWL CAROUSEL JS
*********************************************************/
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

/*********************************************************
                        PRELOADER JS
*********************************************************/
$(document).ready(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            
            $(this).animate({
                width:$(this).attr("aria-valuenow")+"%"
            },800);
        });
        this.destroy();
    },{
        offset:'bottom-in-view'
//        offset:'50%'
    });
});


$(document).ready(function(){
    $('#services-tabs').responsiveTabs({
//    startCollapsed: 'accordion'
        animation:'slide'
    });

});



$(document).ready(function(){
    $("#isotope-container").isotope({});
    
    $("#isotope-filters").on("click","button",function(){
        let filtervalue = $(this).attr("data-filter");
//        console.log(filtervalue);
        
        $("#isotope-container").isotope({
            filter:filtervalue
        });
        $("#isotope-filters").find('.active').removeClass('active');
    
    $(this).addClass('active');
})

});
    

$(document).ready(function(){
  $("#carousel-elements").owlCarousel({
      items:6,
      autoplay:true,
      margin:20,
      loop:true,
      nav:true,
      smartSpeed:1000,
      autoplayHoverPause:false,
      dots:false,
      navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
      responsive:{
          0:{
          items:2
        },
          480:{
              items:3
          },
          768:{
              items:6
          }
          
      }
  })
});


/*********************************************************
                    TRSTIMONIAL COUNTER JS
*********************************************************/



$(document).ready(function(){
  $("#testimonial-cards").owlCarousel({
      items:1,
      autoplay:true,
      margin:20,
      loop:true,
      nav:true,
      smartSpeed:1000,
      autoplayHoverPause:true,
      dots:false,
      navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
      
  });
});


$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      autoplay:true,
      margin:20,
      loop:true,
      nav:true,
      smartSpeed:1000,
      autoplayHoverPause:true,
      dots:false,
      navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
      
  });
});

/*********************************************************
                    PORTFOLIO MAGNIFIC POPUP JS
*********************************************************/


$(document).ready(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        },
        zoom:{
            enabled:true,
            duration:300,
            easing:'ease-in-out',
            opener:function(openerElement){
                return openerElement.is('img') ? openerElement:openerElement.find('img');
            }
        }
    })
});


/*********************************************************
                    STATS COUNTER JS
*********************************************************/

$(document).ready(function(){ 
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            })
});


/*********************************************************
                    MAPS JS
*********************************************************/

$(window).on('load',function(){
   
    var addressString = "301,Evergreen Chs.,Airoli,Maharashtra,India";
    var myLatLng = {
    lat:19.046605, 
    lng:73.011354
    };
    
    var myMap = new google.maps.Map(document.getElementById("map"),{
        zoom:13,
        center:myLatLng
    });
    
     var custimg = "img/map/";
    var marker = new google.maps.Marker({
        position:myLatLng,
        map:myMap,
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        title:"click to see",
        icon: custimg + 'logo.jpg'
    });
    
//    var image = 
    
    var infoWindow = new google.maps.InfoWindow({
       content:addressString 
    });
    marker.addListener('click',function(){
        infoWindow.open(myMap,marker);
    });
    
});













//marker = new google.maps.Marker({
//    map: map,
//    draggable: true,
//    animation: google.maps.Animation.DROP,
//    position: {lat: 59.327, lng: 18.067}
//  });
//  marker.addListener('click', toggleBounce);
//}
//
//function toggleBounce() {
//  if (marker.getAnimation() !== null) {
//    marker.setAnimation(null);
//  } else {
//    marker.setAnimation(google.maps.Animation.BOUNCE);
//  }
//}
//
//



