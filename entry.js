var $ = require('jquery');
window.jQuery = $;
require("./semantic/dist/semantic.css");
require("./semantic/dist/semantic.js");

$(document).ready(function() {
  $('.button').popup();
  $('h1').css('color','red');
  $('button').on('click',function(){
    if ($('h1').css('color') == 'rgb(0, 0, 255)') {
      $('h1').css('color','green');
    } else {
      $('h1').css('color','blue');
    }
  });
});
