
function getStyle(dom,attr){
	//获取指定节点的指定属性
	if(dom.currentStyle){
		return dom.currentStyle[attr]
	}else{
		return getComputedStyle(dom,false)[attr]
	}
}

	//封装一个多属性缓动函数
	function animate(obj,json,fn){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var flag = true;
			for(var attr in json){
				//原来的位置
				if(attr=="opacity"){
					//如果遍历到的属性是opacity要乘以100
					var current = parseInt(getStyle(obj,attr)*100);	
				}else{
					var current = parseInt(getStyle(obj,attr));	
				}
	
				//速度					
				var speed =-10 ;
				speed = speed>0?Math.ceil(speed):Math.floor(speed)
	
	
				//停止条件
				if(current==json[attr]){
					//如果遍历到的属性是opacity,赋值的时候要除以100
					if(attr=="opacity"){
						obj.style[attr] = json[attr]/100;
					}else if(attr == "zIndex"){
						obj.style[attr] = json[attr];
					}				
					else{
						obj.style[attr] = json[attr]+"px";
					}
						
				}else{
					current = current + speed;
					//如果遍历到的属性是opacity,赋值的时候要除以100
					if(attr=="opacity"){
						obj.style[attr] = current/100;
					}else if(attr=="zIndex"){
						obj.style[attr] = json[attr];
					}				
					else{
						obj.style[attr] = current+"px";
					}
					
					flag = false;
				}
			}
			if(flag){
				
				clearInterval(obj.timer);
				if(fn){
					fn;
				}
			}
	
		},80)
	}
	
	
	
