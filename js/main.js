function goToGrid(){
    $('body').animate({
        scrollTop: $(".grid").offset().top},
        1800, function() {	  	
    // Animation complete.
  	});
   
	// scroll(0, $(".grid").offset().top);
	// $("html, body").animate({scrollTop: $(".grid").offset().top + 'px'});
}


function dropGrid(){
	$('.grid>div>div>div').each(function(id){
	    $(this).css({
	      position: 'relative',
	      top: '-200px',
	      opacity: 0
	    });
	    var wait = Math.floor((Math.random()*2000)+1);
	    $(this).delay(wait).animate({
	      	top: '0px',
	      	opacity: 0.9
	    },1000);
  	});

  	$('.click2').animate({
  		opacity: 1
  	}, 5000);

  	$('.grid>div>div>div').on('mouseover', function(){
  		$(this).css({
	      opacity: 1
	    });
  	});
  	$('.grid>div>div>div').on('mouseleave', function(){
  		$(this).css({
	      opacity: 0.9
	    });
  	});

	$('.grid>div>div>div').on('mousedown', function(e){
		e.preventDefault(); 
		console.log('this id : '+ $('.cube').index($(this)));
		var picid = $('.cube').index($(this));
  		$(this).css({
	      width: '25px',
	      height: '25px'
	    });

  		if(picid > 25){
  			$('.gallery').css('margin-right', '30px');
  			$('.gallery').css('margin-left', 'auto');
  		}
  		else if(picid < 25) {
  			$('.gallery').css('margin-left', '30px');
  			$('.gallery').css('margin-right', 'auto');
  		}
  		// $('.pic:eq('+picid+')').css();
	    $('.pic:eq('+picid+')').slideDown(500, function(){
	    	$(this).children('img').animate({
	    		'padding-bottom': '+=10px'
	    	},250);
	    	$(this).children('img').animate({
	    		'padding-bottom': '-=10px'
	    	},450);
	    });
	    // return true;
  	}).bind('mouseup mouseleave', function() {
	    $('.grid>div>div>div').css({
	      width: '30px',
	      height: '30px',
	    });
  		$('.pic').slideUp();
	});
}



$(document).ready(function(){

	$('.click').animate({
  		opacity: 1
  	}, 10000);


  	$("#chest").on('click', function(e) { 
  		console.log('ee');
	      // Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	      // Call the scroll function
	    goToGrid();
	    dropGrid();   
	});

	$('.small-heart, .rody').on('click', function(){
		$('body').animate({
	        scrollTop: 0},
	        2000, function() {	  	
	    // Animation complete.
	  	});
	});
});