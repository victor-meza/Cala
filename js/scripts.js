/**
 * ----------------------------------------------------------------------------------------
 * Main JS functionality.
 * ----------------------------------------------------------------------------------------
 */

$(document).ready(function() {
    
 
    
    
    
 	/***************** Nav Transformicon ******************/



	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});



	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});   
    
    
    
    
    /***************** Header BG Scroll ******************/

	
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 30) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .navicon').css({
					"top": "40px",
				});
                
                
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .navicon').css({
					"top": "58px",
				});
			}
		});

    

    
    


  
    
    
    
        $('.work').waypoint(function() {
        $('.work').addClass('animated fadeIn');
},  {
    offset: '40%'
    
});
    
  
    
   

    /* ---------------------------------------------
     Lightboxes
     --------------------------------------------- */
    
   
    
        // Works Item Lightbox				
        $(".work-box").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
           
        });
        
        
 
    
    
    
    
    
    
    
    
/***************** scroll ******************/
    
 $('ul.primary-nav a').smoothScroll(200);
    S
    
    

    
    
        

    
    
    

});








