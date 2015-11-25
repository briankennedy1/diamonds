var $ = require('jquery');


$(document).ready(function() {
  $('h1').css('color','red');
  $('button').on('click',function(){console.log('clicked');});
});
