// Mobile-Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// events slider-------------

$('.events_slider').slick({
  dots: false,
  arrows: true,
  speed: 600,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});


// customer slider-------------

$('.customer-slider').slick({
  infinite: true,
  dots: false,
  arrows: true,
  speed: 900,
  centerMode: true,
  centerPadding: '0px',
  cssEase: 'linear',
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  // autoplay:true,
  responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
});



// footer mobile links



$(document).ready(function(){
  $(".links-header-1").click(function(){
    $(".links-header-1").toggleClass("activate");
  });
});

$(document).ready(function(){
  $(".links-header-2").click(function(){
    $(".links-header-2").toggleClass("activate-2");
  });
});


$(document).ready(function(){
  $(".links-header-1").click(function(){
    $(".footer-links-1").toggleClass("footer-links-1-1");
  });
});

$(document).ready(function(){
  $(".links-header-2").click(function(){
    $(".footer-links-2").toggleClass("footer-links-2-1");
  });
});
