
jQuery.fn.extend({

	Slider: function(obj)
		{
			obj.$box=this;

			let mytimer=null;
			let num;
			let i=0;
			function Slider(obj)
				{
					this.$box=obj.$box;
					this.width=obj.width;
					this.createDom();
					this.createButton();
					this.auto_change();
					
					this.createEvent();
				}

			
			Slider.prototype=
				{
					auto_change:function()
						{   
							let that=this;
							let length_index=$(that.$box.selector+" img[class='box_img']").length
							
							mytimer=setInterval(function(){

							$("img").eq(i).fadeIn(800);
							$("img").eq(i).siblings("img").fadeOut(800);
							i++;
							if(i>length_index)
							{
								i=0;
								
							}

							},1700);
						},
					stop_change:function(num)
						{
							clearInterval(mytimer);
							$("img").eq(num).fadeIn(1000);
							$("img").eq(num).siblings("img").fadeOut(1000);
						}

				}

			Slider.prototype.createDom=function()
				{
					this.$box.append('<img src="img/1.png" class="box_img" alt="">');
					this.$box.append('<img src="img/2.png" class="box_img" alt="">');
					this.$box.append('<img src="img/3.png" class="box_img" alt="">');
					this.$box.append('<img src="img/4.png" class="box_img" alt="">');
				                                      

					$(this.$box.selector+" img").css({
							position: "absolute",
							left:0,
							top:0,
							display: "block",
							width: "100%",
							height: "100%"
					})
					
					$(this.$box.selector+" img").eq(0).css({
							zIndex:6
					})

				}	


			Slider.prototype.createButton=function()
				{
					this.$box.append('<div class="box2"></div>');

					$(".box2").append('<a href="#" class="a_img" id="btn01"> </a>');	
					$(".box2").append('<a href="#" class="a_img" id="btn02"> </a>');	
					$(".box2").append('<a href="#" class="a_img" id="btn03"> </a>');	
					$(".box2").append('<a href="#" class="a_img" id="btn04"> </a>');
					                            
					
					$("#btn01").append('<img src="img/1-1.png" alt="">');	
					$("#btn02").append('<img src="img/2-2.png" alt="">');	
					$("#btn03").append('<img src="img/3-3.png" alt="">');	
					$("#btn04").append('<img src="img/4-4.png" alt="">');
					

					$(".box2").css({
						position: "absolute",
						bottom: "-70px",
						left:"0px",
						display: "flex",
						justifyContent: "space-between",
						width: "200px",
						zIndex:6,
						
					})
					$(".box2 a").css({
						display: "block",
						width: "187.5px",
						height:"75px",
						position: "absolute",
						bottom:0
						
						
					})
					$(".box2 a").eq(0).css({
						left:"0px"
						
						
					})
						$(".box2 a").eq(1).css({
						left:"187.5px"
						
						
					})
						$(".box2 a").eq(2).css({
						left:"375px"
						
						
					})
					$(".box2 a").eq(3).css({
						left:"562.5px"
						
						
					})
					
					
					
					$(".box2 img").css({
						display: "block",
						width: "187.5px",
						height:"75px",
						
						
					})
//					
				}	



			Slider.prototype.createEvent=function()
				{
					let that=this;

					$(".box2").on("mouseenter","a",function(){
						
						num=$("a[class='a_img']").index(this)+1;
						$("a[class='a_img']").eq(num-1).css({
							bottom:"20px"
							
						});
						that.stop_change(num);
						
					});
						$(".box2").on("mouseleave","a",function(){
						i=$("a[class='a_img']").index(this)+1;
						$("a[class='a_img']").eq(num-1).css({
							bottom:"0px"
							
						});
				 		that.auto_change();
					})
				}	

			new Slider(obj);

		}

	



});





