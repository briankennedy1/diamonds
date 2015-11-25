var $ = require('jquery');


$(document).ready(function() {
  $('h1').css('color','red');
  $('button').on('click',function(){
    if ($('h1').css('color') == 'rgb(0, 0, 255)') {
      $('h1').css('color','green');
    } else {
      $('h1').css('color','blue');
    }
  });
});
