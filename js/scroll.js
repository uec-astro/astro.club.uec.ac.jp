window.addEventListener('DOMContentLoaded', function(){
  /** jQueryの処理 */
$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );  
});
