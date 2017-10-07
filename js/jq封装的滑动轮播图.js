
jQuery.fn.extend({



	Slider:function(obj)
	{
		// obj.dom=this;


		function Slider(obj)
 	{
 		this.dom=obj.dom;
 		this.createdom();
 		this.moveLeft();
 		this.moveRight();

 	}

 Slider.prototype.createdom=function()
 	{
 		
 		this.dom.append('<div id="box_left"></div>');
 		
 		$("#box_left").append('<img src="img/index_ziyedeziye/slider_left_jiantou.jpg" alt=""/>');
 		$("#box_left").css({
 					position: "absolute",
					left: "0px",
					top:"0",
					width: "50px",
					height: "450px",
					background: "#d8d8d8",
					/*opacity: 0.3,*/
					zIndex: "5"
 		})
 		$("#box_left img").css({
 					position: "absolute",
					left:"15px",
					top:"195px",
					width: "17px",
					height: "18px"

 		})

 		this.dom.append('<div id="box_center"></div>');
 		$("#box_center").css({
 				position: "absolute",
				left:"50px",
				top:"0",
				width: "650px",
				height: "450px",
				background: "#d8d8d8"

 		})

 		

 		$("#box_center").append('<img src="img/index_ziyedeziye/index_ziyedeziye_1.jpg" alt=""/>');
 		$("#box_center").append('<img src="img/index_ziyedeziye/index_ziyedeziye_2.jpg" alt=""/>');
 		$("#box_center").append('<img src="img/index_ziyedeziye/index_ziyedeziye_3.jpg" alt=""/>');


 		$("#box_center img").css({
 				position: "absolute",
				top:"0px",
				
				width: "300px",
				height: "450px",
				display: "block",
//				marginRight:"30px"

 		})


 		$("#box_center img:nth-child(1)").css({
 				left: "0px"

 		})
 		$("#box_center img:nth-child(2)").css({
 				left: "310px"

 		})
 		$("#box_center img:nth-child(3)").css({
 				left: "620px"

 		})


 		this.dom.append('<div id="box_right"></div>');

 		$("#box_right").css({
 				position: "absolute",
				left: "700px",
				top:0,
				width: "50px",
				height: "450px",
				background: "#d8d8d8",
				zIndex: "5"


 		})

 		$("#box_right").append('<img src="img/index_ziyedeziye/slider_right_jiantou.jpg" alt=""/>');

 		$("#box_right img").css({
 				position: "absolute",
				left:"15px",
				top:"195px",
				width: "17px",
				height: "18px"


 		})

 	}


 Slider.prototype.moveLeft=function()
 	{
	 	$("#box_left").click(
	 		function()
	 		{

		 		if($("#box_center").position().left<=-550)
				{
					$("#box_center").position().left=-500;
					
				}
				else
				{

					$("#box_center").animate(
						{

							left:$("#box_center").position().left-300+"px"
							
						},2000,function()

						{
							$("#box_center").stop(true,true);
							

						});

				}

		

		});
 	}
 	Slider.prototype.moveRight=function()
 		{
 			$("#box_right").click(function(){

 				if($("#box_center").position().left>=50)
					{
						$("#box_center").position().left=50;
						
					}
				
				else
				{
					$("#box_center").animate({
					
					
						left:$("#box_center").position().left+300+"px"
					
							
					},2000,function()
					{
						$("#box_center").stop(true,true);
						
					});


				}
	
			});
 		}

 		new Slider(obj);
		

	}


})










