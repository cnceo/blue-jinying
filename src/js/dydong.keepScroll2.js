/*
*	by dong
*	http://www.dydong.com 
*/
function keepScroll(){
	var o={};
	return o={
		data:{
			"direc":"down",	//滚动的方向 
			"status":0,	//执行状态  0执行一次 1无限次执行

			"element":[],	//需要执行效果的对象数组
			"element_name":null,	//需要执行效果的数组
			"element_top_height":[],	//对象的高度数组
			"element_top_down":[],	//向下滚动时的坐标数组
			"element_top_up":[],	//向上滚动时的坐标数组
			"element_bool":[],	//是否已经加载过效果
			
			"offse_up":[],	//位置向上偏移
			"offse_down":[],	//位置向下偏移
			"in_func":[],	//显示时执行的方法或者样式
			"out_func":[],	//隐藏时执行的方法或者样式
			"position":0,//若有特殊处理，进行判断
			"mun":null,	//个数
			"inherit":[],//继承其他滚动的对象
		},
		init:function(data){
			$.extend(this.data,data);
			//定位
			this.position();
			//绑定滚动
			if(document.addEventListener){document.addEventListener('DOMMouseScroll',function(e){o.toscroll(e,o);},false);}//W3C
			window.onmousewheel=document.onmousewheel=function(e){o.toscroll(e,o);};//IE/Opera/Chrome/Safari
		},
		position:function(){
			//获取所有对象的top
			this.data["window_height"]=documentH=$(window).height();
			var ii=0;
			$.each(this.data["element_name"],function(i,n){
				
				if($(n).length==1){point_position({"index":ii,"element":n});++ii;}
				else if($(n).length>1){
					$.each($(n),function(i1,n2){
						point_position({"index":ii,"element":n2});
						++ii;
					});
				}
				//设置总数量
				o.data["mun"]=ii-1;
			});
			
			function point_position(data){
				var h=parseInt($(data.element).height()),
					top=parseInt($(data.element).offset().top);
				
				o.data["element"][data.index]=$(data.element);
				o.data["element_bool"][data.index]=true;
				o.data["element_top_height"][data.index]=h;
				o.data["element_top_up"][data.index]=top;
				o.data["element_top_down"][data.index]=top-o.data["window_height"];
			}

			//console.log(oo);
			//$.extend(this.data,o.data);
		},
		toscroll:function(e,o){
			//console.log(e);
			e=e || window.event;
			
			if(!o.data["position"]){
				var data={};
				data["element_top"]=[];
				var scrollTop=$(document).scrollTop();
				//判断是否有其他滚动
				$.each(o.data["inherit"],function(i,n){
					if(n)n.toscroll(e);
				});

				//判断方向，决定位置数组
				if(e.wheelDelta>0)//向上
					o.data["direc"]="up";
				else if(e.wheelDelta<0)//下
					o.data["direc"]="down";
				if(e.detail<0)//向上
					o.data["direc"]="up";
				else if(e.detail>0)//下
					o.data["direc"]="down";
				data["element_top"]=o.data["direc"]=="up"?o.data["element_top_up"]:o.data["element_top_down"];
				//判断位置
				$.each(data["element_top"],function(key,value){

					//判断滚动位置
					var	bool=scrollTop>=data["element_top"][key];
						if(key<o.data["mun"])bool&=scrollTop<data["element_top"][key+1];
					//通过判断则添加效果
					if(bool){
						
						var downi=key,upi=key;
						if(o.data["direc"]=="down"){
							while(upi>=0){
								o.func({"data":o.data,"i":upi,"type":"in"});
								--upi;
							}
							if(o.data["status"]==1)while(downi<o.data["mun"]){
								++downi;
								o.func({"data":o.data,"i":downi,"type":"out"});
							}
						}else if(o.data["direc"]=="up"){
							if(o.data["status"]==1)while(upi>0){
								--upi;
								o.func({"data":o.data,"i":upi,"type":"out"});
							}
							while(downi<=o.data["mun"]){
								o.func({"data":o.data,"i":downi,"type":"in"});
								++downi;
							}
						}
						/*if(o.data["direc"]=="down")while(upi>=0){
							o.func({"data":o.data,"i":upi,"type":o.data['out_func'][upi]});
							--upi;
						}
						if(o.data["direc"]=="up")while(downi<=o.data["mun"]){
							o.func({"data":o.data,"i":downi,"func":o.data['in_func'][downi]});
							++downi;
						}*/
						return false;
					}
				});
				
			}
				
		},
		func:function(data){
			
			var in_class=typeof data.data["in_func"][data['i']]=="string"?data.data["in_func"][data['i']]:"in",
				out_class=typeof data.data["out_func"][data['i']]=="string"?data.data["out_func"][data['i']]:"out",
				_func=typeof data.data[data["type"]+"_func"][data['i']]=="function"?data.data[data["type"]+"_func"][data['i']]:0;
			if(data["type"]=="in")$(data.data["element"][data['i']]).addClass(in_class).removeClass(out_class);
			else $(data.data["element"][data['i']]).removeClass(in_class).addClass(out_class);
			if(_func)_func();
		}
		/*func_up:function(data){
			var in_class=typeof data.data["in_func"][data['i']]=="string"?data.data["in_func"][data['i']]:"in",
				out_class=typeof data.data["out_func"][data['i']]=="string"?data.data["out_func"][data['i']]:"out",
				in_func=typeof data.data["in_func"][data['i']]=="function"?data.data["in_func"][data['i']]:null;
			$(data.data["element"][data['i']]).addClass(in_class).removeClass(out_class);
			if(in_func)in_func();
		},
		func_down:function(data){
			var in_class=typeof data.data["in_func"][data['i']]=="string"?data.data["in_func"][data['i']]:"in",
				out_class=typeof data.data["out_func"][data['i']]=="string"?data.data["out_func"][data['i']]:"out",
				out_func=typeof data.data["out_func"][data['i']]=="function"?data.data["out_func"][data['i']]:null;
			$(data.data["element"][data['i']]).addClass(out_class).removeClass(in_class);
			if(out_func)out_func();
		}*/
	};
	
};
