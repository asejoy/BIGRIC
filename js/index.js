
$("#arrange_img li").mouseenter(function()
	{
		$(this).children(".arrange_img_div_2").css({
			display:"block"
		});
	})
$("#arrange_img li").mouseleave(function()
	{
		$(this).children(".arrange_img_div_2").css({
			display:"none"
		});
	})

$("#nav_left li").mouseenter(function(){
	$(this).css({background:"#414950",
					
	});
	$(this).children().eq(0).css({
		color:"white"
	});
	
	
})

$("#nav_left li").mouseleave(function(){
	$(this).css({background:"white"});
	$(this).children().eq(0).css({
		color:"#666666"
	});
})





$(function(){ 	
	
   	$("#slideshow_box1").Slider({

   			"width":200
   	});


 
	

})