
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      
    }
    // var slideIndex1 = 0;
    //   showSlides1();
    
    // function showSlides1() {
    //   var i;
    //   var slides1 = document.getElementsByClassName("mySlides");
    //   for (i = 0; i < slides1.length; i++) {
    //     slides1[i].style.display = "none";
    //   }
    //   slideIndex1++;
    //   if (slideIndex1 > slides1.length) {slideIndex1 = 1}
    //   slides1[slideIndex1-1].style.display = "block";
    //   setTimeout(showSlides1, 2000); // Change image every 2 seconds
    // }