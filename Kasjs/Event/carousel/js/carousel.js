$(document).ready(function(){
    // Run carousel
    $("#testCarousel").carousel();

    // Enable indicators
    $(".item1").click(function(){$("#testCarousel").carousel(0);});
    $(".item2").click(function(){$("#testCarousel").carousel(1);});
    $(".item3").click(function(){$("#testCarousel").carousel(2);});
    $(".item4").click(function(){$("#testCarousel").carousel(3);});
    $(".item5").click(function(){$("#testCarousel").carousel(4);});

    // Enable controls
    $(".left").click(function() {$("#testCarousel").carousel("prev");});
    $(".right").click(function(){$("#testCarousel").carousel("next");});
});