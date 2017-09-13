$(function(){
	$('.menu').mouseenter(function(){
		$('#sub_Bg').stop().slideDown(350);
		$('.sub').stop().slideDown(350);
	}).mouseleave(function(){
		$('#sub_Bg').stop().slideUp(350);
		$('.sub').stop().slideUp(350);
	})

	$('.cl').click(function(event){event.preventDefault();
		 $('.box').removeClass('hidden');
		 $('.bg').removeClass('hidden')
		})   
	  $('#xbox').click(function(event){event.preventDefault();
		 $('.box').addClass('hidden');
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