// JavaScript Document

$(function(){
	$('.menu').mouseenter(function(){
		$('#sub_Bg').stop().slideDown(350);
		$('.sub').stop().slideDown(350);
	}).mouseleave(function(){
		$('#sub_Bg').stop().slideUp(350);
		$('.sub').stop().slideUp(350);
	})




	$('.listbox a').click(function(event){
			event.preventDefault();
			var num=$(this).parent().attr('class').substr(3)
			$('.box').removeClass('hidden')
			$('.box>img').attr('src','images/img'+num+'.jpg')
			$('.bg').removeClass('hidden')
	})
	 $('#xbox').click(function(event){
		 $('.box').addClass('hidden');
		 $('.bg').addClass('hidden')
	}) 


	$('#belifstamp').mouseenter(function(){
		$('#belifstamp_bg').stop().show();
	}).mouseleave(function(){
		$('#belifstamp_bg').stop().hide();
	})


})
