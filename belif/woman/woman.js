$(function(){
	$('.menu').mouseenter(function(){
		$('#sub_Bg').stop().slideDown(350);
		$('.sub').stop().slideDown(350);
	}).mouseleave(function(){
		$('#sub_Bg').stop().slideUp(350);
		$('.sub').stop().slideUp(350);
	})
})

$(function(){
    $('.cl').click(function(event){event.preventDefault();
		 $('.box_1').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})   
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_1').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl1').click(function(event){event.preventDefault();
		 $('.box_2').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_2').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl2').click(function(event){event.preventDefault();
		 $('.box_3').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_3').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl3').click(function(event){event.preventDefault();
		 $('.box_4').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_4').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl4').click(function(event){event.preventDefault();
		 $('.box_5').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_5').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl5').click(function(event){event.preventDefault();
		 $('.box_6').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_6').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl6').click(function(event){event.preventDefault();
		 $('.box_7').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_7').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
		$('.cl7').click(function(event){event.preventDefault();
		 $('.box_8').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})  
	  $('#xbox a').click(function(event){event.preventDefault();
		 $('.box_8').addClass('hidden');
		 $('.bg').addClass('hidden')
		})  
	})
	
	$(function(){
	$('#belifstamp').mouseenter(function(){
		$('#belifstamp_bg').stop().show();
	}).mouseleave(function(){
		$('#belifstamp_bg').stop().hide();
	})
})