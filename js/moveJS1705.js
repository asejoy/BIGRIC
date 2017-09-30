
//匀速运动封装

//水平运动
//domObj:需要移动的DOM元素
//startValue, 起始位置
//endValue,结束位置
//inc,增量
//timeOut：总时长

function MoverH(domObj,startValue,endValue,inc,timeOut){
	var direction=-1
	if(endValue>startValue){
		direction=1;
	}
	moveObj(domObj,"left",startValue,endValue,inc,direction,timeOut);	
}

//垂直运动



//dom对象
//1、DOM元素的属性
//2、初始值
//3、增量
//4、方向
//5、结束值
//6、时间间隔

function moveObj(domObj,attr,startValue,endValue,inc,direction,timeOut){
	//1、初始化数据
	let timeSpace = timeOut/(Math.abs(startValue-endValue)/inc);
	let myTimer=null;
	let currValue = startValue;
	//2、初始化外观；
	domObj.style[attr] = startValue+"px";	
	
	(function(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			currValue=currValue+direction*inc;
			//边界处理
			let isOut = startValue>endValue?currValue<endValue:currValue>endValue;
			if(isOut){
				window.clearInterval(myTimer);
				myTimer = null;
				return;
			}
			domObj.style[attr]= currValue+"px";			
			
		},timeSpace);
	})();
}

//

//缓冲运动
//参数：
//dom对象
//起始位置
//终点位置
//固定值
//时间间隔
//方向（上下左右）
//样式属性（left，top，width，height）
function moveBufferObj(domObj,startValue,endValue,fixedNum,timeSpace,attr){
	//1、初始化数据
	let myTimer=null;
	let currValue = startValue;
	//2、初始化外观；
	domObj.style[attr] = startValue+"px";	
	
	(function(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			//缓冲运动的增量是变化的
			let inc = (endValue-currValue)/fixedNum;
			
			currValue=currValue+inc;
			//边界处理
			let isOut = startValue>endValue?currValue<endValue:currValue>endValue;
			if(isOut){
				window.clearInterval(myTimer);
				myTimer = null;
				return;
			}
			domObj.style[attr]= currValue+"px";
		},timeSpace);
	})();
}


//把指定的图片淡入
function fadeIn(domObj,inc,timeOut){
	fadeInOut(domObj,0,1,inc,1,timeOut);	
}

//把指定的图片淡出
function fadeOut(domObj,inc,timeOut){
	fadeInOut(domObj,1,0,inc,-1,timeOut);
}

//淡入和淡出
function fadeInOut(domObj,startOpacity,endOpacity,inc,direction,timeOut){
	//当前的透明度
	let currOpacity=startOpacity;
	//时间间隔= 总时间/次数；
	let timeSpace=timeOut/(Math.abs(startOpacity-endOpacity)/inc);
	//dom对象的初始透明度
	domObj.style.opacity = startOpacity;
	
	let myTimer=null;
	//启动定时器
	(function moveObj(){
		myTimer = setInterval(function(){
					//1、改变当前透明度
					currOpacity = currOpacity+direction*inc;
					//2、边界处理
					//判断是否越界
					let isOut = startOpacity<endOpacity?currOpacity>endOpacity:currOpacity<endOpacity;
					if(isOut){
						currOpacity=endOpacity;
						window.clearInterval(myTimer);
						return;
					}		
					//3、改变外观	
					domObj.style.opacity = currOpacity;	
			
		},timeSpace);
	})();
}


/*
function fadeInOut(domObj,startOpacity,endOpacity,inc,direction,timeOut){
	//当前的透明度
	let currOpacity=startOpacity;
	//时间间隔= 总时间/次数；
	let timeSpace=timeOut/(Math.abs(startOpacity-endOpacity)/inc);
	//dom对象的初始透明度
	domObj.style.opacity = startOpacity;
	
	let myTimer=null;
	//启动定时
	function moveObj(){
		myTimer = setInterval(goStep,timeSpace);
	}
	//单步处理
	function goStep(){
		//1、改变当前透明度
		currOpacity = currOpacity+direction*inc;
		//2、边界处理
		if(currOpacity>endOpacity){
			currOpacity=endOpacity;
			window.clearInterval(myTimer);
			return;
		}		
		//3、改变外观	
		domObj.style.opacity = currOpacity;		
	}
	moveObj();
}
*/


//多属性运动
//参数：
//dom对象
//每个样式属性的初始值
//每个样式属性的结束值
//每个样式属性的固定值
//时间间隔

function moveAll(domObj,startObj,endObj,fixedNumObj,timeSpace){
	//1、初始化数据
	let myTimer=null;
	
	//当前值有若干个
	let currValueObj = {};
	for(let key in startObj){
		currValueObj[key] = startObj[key];	
	}
	
	//2、初始化外观；
	for(let key in startObj){
		domObj.style[key] = startObj[key]+"px";	
	}
	
	(function(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			//缓冲运动的增量是变化的
			for(let key in startObj){//key=width
				//domObj.style[key] = startObj[key]+"px";	
				let inc = (endObj[key]-startObj[key])/fixedNumObj[key];
				currValueObj[key]=currValueObj[key]+inc;
			}
			
			//边界处理
			let isAllOut = true;//假定所有都越界
			for(let key in startObj){//key=width
				let startValue = startObj[key];
				let endValue = endObj[key];
				let currValue = currValueObj[key];
				let isOut = startValue>endValue?currValue<endValue:currValue>endValue;
				if(isOut){
					currValueObj[key]=endObj[key];
				}else{
					isAllOut = false;
				}
			}
			//停止定时器；
			if(isAllOut){
				window.clearInterval(myTimer);
				myTimer = null;
				return;
			}
			
			//改变外观
			for(let key in startObj){//key=width
				domObj.style[key]= currValueObj[key]+"px";
			}

		},timeSpace);
	})();
	
}

