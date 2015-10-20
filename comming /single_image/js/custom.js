/*
* Theme Name: Exit 
* File name: custom.js
* Theme URL: exit.mordorthemes.com
* Description: Exit - Beautiful Under Construction template
* Author: Mordorthemes
* Author URL: http://www.mordorthemes.com
* Support: support@mordorthemes.com
* Version: 1.0
*/





/* ==============================================
    Page Preloader
=============================================== */
$(window).load(function() { 
    $("#loader").delay(500).fadeOut(); 
    $(".mask").delay(1000).fadeOut("slow");
});








/* Start Ready Function */
jQuery(document).ready(function ($) { 

'use strict';






/* ==============================================
    Slideshow Images
=============================================== */
$(".wrapper").backstretch
  ("img/img1.jpg");








/* ==============================================
   Countdown
=============================================== */
    // Create a countdown instance. Change the launchDay according to your needs.
    // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
    // Thus the launchDay below denotes 7 May, 2014.
    var launchDay = new Date(2015, 5-1, 7);
    $('#timer').countdown({
    until: launchDay
    });






/* ==============================================
   Goole map resize on modal windows
=============================================== */
$('#localize').bind('opened', function() {
google.maps.event.trigger(window, 'load', initialize);
});







/* ==============================================
   About Carousel
=============================================== */
  $("#about-carousel").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    pagination: true,
    paginationSpeed : 400,
    transitionStyle : "backSlide",
    singleItem : true,
    autoHeight : true,
    autoPlay: false
  });






});
/* end ready function */






/* ==============================================
    Sticky Footer
=============================================== */
$(document).ready(function(){

    'use strict';

        $(window).resize(function(){
                var footerHeight = $('.footer').outerHeight();
                var stickFooterPush = $('.push').height(footerHeight);
        
                $('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
            });
        
            $(window).resize();
        });







/* ==============================================
    Newsletter Subscription Form
=============================================== */
jQuery(document).ready(function(){

'use strict';

    $('#subscribe').submit(function(){

        var action = $(this).attr('action');

        $("#message-subscribe").slideUp(300,function() {
        $('#message-subscribe').hide();

        $('#ssubmit')
            .after('<img src="img/ajax-loader.gif" class="subscribe-loader" />')
            .attr('disabled','disabled');

        $.post(action, {
            email: $('#semail').val()
        },
            function(data){
                document.getElementById('message-subscribe').innerHTML = data;
                $('#message-subscribe').css('display', 'block');
                $('#message-subscribe').slideDown(300);
                $('#subscribe img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
                $('#ssubmit').removeAttr('disabled');
                if(data.match('success') != null) $('#subscribe').slideUp('slow');

            }
        );

        });

        return false;

    });

});








/* ==============================================
    Contact Form
=============================================== */
$('#contactform').submit(function(){

    'use strict';

        var action = $(this).attr('action');

        $("#message").slideUp(300,function() {
        $('#message').hide();

        $('#submit')
            .after('<img src="img/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(300);
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );

        });

        return false;

    });








/* ==============================================
  Google Map
=============================================== */ 
function initialize() {
var myLatLng = new google.maps.LatLng(43.7726657,11.2043491);
var roadAtlasStyles = [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}];

var mapOptions = {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
   
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/pin.png',
    title: '',
  });
  
  var contentString = '<div style="max-width: 300px" id="content">'+
        '<div id="bodyContent">'+
          '<h4 style="color:#000;text-align:center;">Exit</h4>' +
          '<p style="font-size: 12px;color:#000;">18, Short Street, 8th floor, LA, California. Lorem ipsum dolor sit amet incididunt ut labore et dolore psum dolor magna aliqua.</p>'+
        '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('roadatlas', usRoadMapType);
  map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, "load", initialize);


