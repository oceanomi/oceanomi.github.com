$(document).ready(function(){ 

  $('img.tags').hover(
    function() {
      $(this).attr({
        src: 'images/cp-tag.png',
        width: '100%',
        height: '80%'
      }).css({
        top: '5%',
        left: '5%',
      });
    },
    function() {
      $(this).attr({
        src: 'images/cp-tag-small.png',
        width: '10%',
        height: '20%'
      }).css({
        top: '35%',
        left: '45%',
    });
  });
  //$("#test").hover(
  //  function () {
  //  $(this).append($("<span> ***</span>"));
  //  },
  //  function () {
  //  $(this).find("span:last").remove();
  //});
});
