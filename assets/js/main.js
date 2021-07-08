$(document).ready(function () {
  $(".project-popup").magnificPopup({ 
      type: "image",
      gallery:{
    enabled:true
    
  }
    });

    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    $(document).ready(function(){
  $(".testimonial-content").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>',
  });
});
    
});
