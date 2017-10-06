
	
	var li_arry=[];

	function generate(dom)
		{
			
			

			dom.append("<li></li>");
			dom.append("<li></li>");
			dom.append("<li></li>");
			dom.append("<li></li>");
			dom.append("<li></li>");
			
			dom.children().css({
					float:"left",
					width: "27px",
					height: "27px",
					background: "url(img/star.gif)",
					backgroundSize:"27px 57px",
					backgroundPosition:" 0px 0px",
					listStyle: "none"

			});

			li_arry=dom.children();
		};

	function start(num_max)
		{
			for(let i=0;i<num_max;i++)
				{
					li_arry[i].style.backgroundPosition= "0px 27px";
				}
			for(let i=num_max;i<li_arry.length;i++)
				{
					li_arry[i].style.backgroundPosition= "0px 0px";
				}
						
			
		}

   
	
	
	function add_f(dom,span_dom)

		{
			generate(dom);
			var get_score=false;
			var score=0;
	   			dom.children().mouseover(function()
	   				{
	   					var num=dom.children().index(this);

	   					start(num+1);
	   				
	   				})
	   			dom.children().mouseout(function()
	   				{
	   					if(get_score==true)
		   					{
		   						start(score);
		   						
		   					}
	   					else
		   					{
		   						start(0);
		   					}
	   					
	   				})
	   			dom.children().click(function()
	   				{
	   					var num=dom.children().index(this);
	   					score=num+1;
	   					get_score=true;
	   					start(score);
	   					span_dom.html(num+1+"分");
	   				})
	   		}
	
		

