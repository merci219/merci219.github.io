$(function(){
	$('.menu').mouseenter(function(){
		$('#sub_Bg').stop().slideDown(350);
		$('.sub').stop().slideDown(350);
	}).mouseleave(function(){
		$('#sub_Bg').stop().slideUp(350);
		$('.sub').stop().slideUp(350);
	})




var indexNum=0;
	var a=$('.visual_container>div');
	var first=a.eq(0);
	a.hide();
	first.show();
	function fadeslide(){
	indexNum++;
	indexNum=indexNum%3;
	a.stop().fadeOut();
	a.eq(indexNum).stop().fadeIn(500);
	}
	var timer=setInterval(fadeslide,2000);
	var btn=$('.visual_container>.btn a');
	btn.click(function(event){
		event.preventDefault();
	var num=Number($(this).text().substr(3,1));
	clearInterval(timer)
	indexNum=(num-1);
	a.stop().fadeOut(500);
	a.eq(indexNum).stop().fadeIn(500);
	timer=setInterval(fadeslide,2000);
	})
	
})
	
$(function(){
	$('#belifstamp').mouseenter(function(){
		$('#belifstamp_bg').stop().show();
	}).mouseleave(function(){
		$('#belifstamp_bg').stop().hide();
	})
})