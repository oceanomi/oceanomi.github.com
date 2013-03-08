$(document).ready(function(){ 

  $('img.tags').hover(
    function() {
      $(this).hide().attr({
        src: 'images/cp-tag.png',
        width: '80%',
        height: '80%'
      }).css({
        top: '5%',
        left: '5%',
      }).fadeIn(800);
    },
    function() {
      $(this).hide().attr({
        src: 'images/cp-tag-small.png',
        width: '10%',
        height: '8%'
      }).css({
        top: '35%',
        left: '45%',
    }).fadeIn(800);
  });
  //$("#test").hover(
  //  function () {
  //  $(this).append($("<span> ***</span>"));
  //  },
  //  function () {
  //  $(this).find("span:last").remove();
  //});
});
