
$(function(){

    $('.sliderA_main').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay:true,
        speed:1000,
        arrows:true,
        prevArrow:".prev2",
        nextArrow:".next2",
        responsive: [
            {
              breakpoint: 575.99,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev2",
                nextArrow:".next2"
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev2",
                nextArrow:".next2"
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev2",
                nextArrow:".next2"
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev2",
                nextArrow:".next2"
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev2",
                nextArrow:".next2",
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.allCate_main1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        speed:1000,
        arrows:true,
        prevArrow:".prev3",
        nextArrow:".next3",
        centerMode:true,
        centerPadding:"0px",
        asNavFor: '.allCate_main2',
        responsive: [
            {
              breakpoint: 575.99,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev3",
                nextArrow:".next3",
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main2'
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev3",
                nextArrow:".next3",
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main2'
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:true,
                prevArrow:".prev3",
                nextArrow:".next3",
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main2'
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.allCate_main2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        speed:1000,
        arrows:false,
        centerMode:true,
        centerPadding:"0px",
        asNavFor: '.allCate_main1',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:false,
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main1',
                focusOnSelect: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:false,
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main1',
                focusOnSelect: true
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                speed:1000,
                arrows:false,
                centerMode:true,
                centerPadding:"0px",
                asNavFor: '.allCate_main1',
                focusOnSelect: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2026 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    [...document.getElementsByClassName("demo3")].forEach(e => e.innerHTML = days + "<span class='fd9'>d</span>"
    + hours + "<span class='fd10'>h</span>" + minutes + "<span class='fd11'>m</span>" + seconds 
    + "<span class='fd12'>s</span>");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        [...document.getElementsByClassName("demo")].forEach(e=>e.innerHTML = "EXPIRED");
    }
    }, 1000);
})
