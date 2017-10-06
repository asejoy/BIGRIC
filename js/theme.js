
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
	$(this).css({background:"#414950"});
})

$("#nav_left li").mouseleave(function(){
	$(this).css({background:"white"});
})


