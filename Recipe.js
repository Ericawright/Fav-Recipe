$(document).ready(function(){
  $('#photos').click(function(){
     	$('img').toggle('slow');
  		if ($.trim($(this).text()) === 'Hide Photos') {
    		$(this).text('Show Photos');
			} else {
    		$(this).text('Hide Photos');        
			}
  });
  $('.done').click(function(){
     $(this).parent().toggleClass('stroked');
  });
  
});
