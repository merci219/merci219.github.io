// JavaScript Document
$(function(){
	$('.menu').mouseenter(function(){
		$('#sub_Bg').stop().slideDown(350);
		$('.sub').stop().slideDown(350);
	}).mouseleave(function(){
		$('#sub_Bg').stop().slideUp(350);
		$('.sub').stop().slideUp(350);
	})


 $('.wrap').on('click',function(){
		 $('.btn').prepend({top:'1000px;'},1000);
		   })
 
 $('.btn') .click(function(event){event.preventDefault();})
 })