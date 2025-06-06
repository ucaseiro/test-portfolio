
$(document).ready(function () {
    const $cards = $('.card');
    let currentIndex = 0;
    function updateCarousel() {
      $cards.removeClass('left center right');
  
      const total = $cards.length;
      const leftIndex = (currentIndex - 1 + total) % total;
      const centerIndex = currentIndex % total;
      const rightIndex = (currentIndex + 1) % total;
  
      $cards.eq(leftIndex).addClass('left');
      $cards.eq(centerIndex).addClass('center');
      $cards.eq(rightIndex).addClass('right');
      if (currentIndex<9){
        $('.big-number').text('0'+(currentIndex+1));
      } 
      else{
        $('.big-number').text((currentIndex+1));
      } 
    }
  
    $('.arrow-right').click(function () {
      currentIndex = (currentIndex + 1) % $cards.length;
      updateCarousel();
    });
  
    $('.arrow-left').click(function () {
      currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
      updateCarousel();
    });
  
    updateCarousel(); // Initial call
    window.addEventListener('scroll', () => {
        if (window.scrollX !== 0) {
          window.scrollTo(0, window.scrollY);
        }
      });
  });
  