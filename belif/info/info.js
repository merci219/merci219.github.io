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
	$('#belifstamp').mouseenter(function(){
		$('#belifstamp_bg').stop().show();
	}).mouseleave(function(){
		$('#belifstamp_bg').stop().hide();
	})
})