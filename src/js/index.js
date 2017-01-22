/*banner*/
var banner=new change();
	banner.position=function(){
		change().position.call(this);
		
		if(this.data["position_style"]=="banner"){
			$(this.data["element"]).css({"left":-this.data["position_width"]+"px"});
			$(this.data["element"]+":eq("+this.data["index"]+")").css({"left":"0px"});
		}
	}
	banner.todo=function(data){
		
		var bool=change().todo.call(this,data);
		if(!bool)return false;
		
		if(this.data["position_style"]=="banner"){
			var direc=-1;
			if(data["direc"]=="-")direc=1;
			$(this.data["element"]+":eq("+this.data["lastindex"]+")").stop(false,true).animate({"left":direc*this.data["position_width"]+"px"},{easing:'jswing',duration:1000}).removeClass("on");
			$(this.data["element"]+":eq("+this.data["index"]+")").stop(false,true).css({"left":-direc*this.data["position_width"]+"px"}).animate({"left":"0px"},{easing:'jswing',duration:1000,complete:function(){banner.data["todo_bool"]=false;}}).addClass("on");
		}
	}
	banner.init({
		"element_move":".banner",
		"element":".banner .content",
		"position_style":"banner",
		"btn_parent":".banner .nav",
		"btn_function":"banner",
		"autoplay_time":8000,
		"autoplay":true
	});

//时时乐
//update_muns({"m":02,"s":30},[0,1,2,3,4,5],"20160214-056");
function update_muns(time,mun_arr,stage){
	/* time(倒数时间 {"m":02,"s":30}) 上一期开奖号码数组（[0,1,2,3,4,5]） stage(上一次期数 20160214-056) */
	$(".main .lottery .timely .muns").addClass("on");
	setTimeout(function(){$(".main .lottery .timely .muns").removeClass("on");},2000);
	$(".main .lottery .timely .time1 span").html(stage);
	$.each(mun_arr,function(i,n){
		$(".main .lottery .timely .muns .child"+i+" .child-title").html(n);
	});
	$(".main .lottery .timely .time .m").html(time["m"]);
	$(".main .lottery .timely .time .s").html(time["s"]);
	update_interval();
}
function update_interval(){
	var interval=setInterval(function(){
		var m=parseInt($(".main .lottery .timely .time .m").html()),
			s=parseInt($(".main .lottery .timely .time .s").html());
		if(s==0&&m!=0){s=59;m--;}
		else if((s!=0&&m!=0)||(m==0&&s!=0)){s--;}
		else{	//倒计时结束
			clearInterval(interval);
			return 0;
		}
		m=m<10?"0"+m:m;s=s<10?"0"+s:s;
		$(".main .lottery .timely .time .m").html(m);
		$(".main .lottery .timely .time .s").html(s);
	},1000);
}





/*设置常用彩票*/
$(".main .lottery .classify .classify-alert-container .checkbox").click(function(){
	var parent=$(this).closest('li');
	var bool=parent.hasClass("on");
	if(bool){
		parent.removeClass("on");
	}else{
		var len=$(".main .lottery .classify .classify-alert-container li.on").length;
		if(len>=7){alert("您选择的个数已经超过7个");}
		else
			parent.addClass("on");
	}
});
function set_click(){
	$(".classify-alert").stop(false,true).fadeToggle(500);
}
function set_submit(){
	$(".main .lottery .classify .classify-alert-container li.on").each(function(index, element) {
		var src=$(element).attr("data-image"),
			html=$(element).attr("data-name");
        $(".main .lottery .classify .child:eq("+index+")").find(".child-img img").attr("src",src);
		$(".main .lottery .classify .child:eq("+index+")").find(".child-title").html(html);
    });
	set_click();
}
/*通告*/
$(".main .lottery .classify .child").mouseleave(function(){
	var imageSrc=$(this).find(".child-img").find("img").attr("src");
	if(imageSrc.indexOf("_on.png")>0){}else{
		imageSrc=imageSrc.replace(".png","_on.png");
	}
	$(this).find(".child-img").find("img").attr("src",imageSrc);
}).mouseover(function(){
	var imageSrc=$(this).find(".child-img").find("img").attr("src");
	if(imageSrc.indexOf("_on.png")>0){
		imageSrc=imageSrc.replace("_on.png",".png");
	}else{}
	$(this).find(".child-img").find("img").attr("src",imageSrc);
});
var notice=setInterval(function(){
			$(".main .lottery .notice .notice-container li:last").hide();
	var html=$(".main .lottery .notice .notice-container li:last");
			$(".main .lottery .notice .notice-container ul").prepend(html);
			$(".main .lottery .notice .notice-container li:first").slideDown(500);
			
},2000);

/*scroll*/
var imgBool=[],
	imgBool1=[],
	main_scroll=new keepScroll(),
	timer;
$(".banner .content img").each(function(index, element) {
    var img=new Image();
	img.src=$(element).attr("src");
	imgBool[index]=false;
	imgBool1[index]=true;
	base.imgLoad(img, function() {
		imgBool[index]=true;
	});
});

timer = setInterval(function() {
	if (imgBool1.toString()==imgBool.toString()) {
		$(".loading").hide();
		$(".header").addClass("loading-in");
		$(".banner").addClass("loading-in");
		$(".lottery").addClass("loading-in");
		
		setTimeout(function(){
			
			$(".header").removeClass("loading-in");
			$(".banner").removeClass("loading-in");
			$(".lottery").removeClass("loading-in");
			
			//update_muns({"m":01,"s":30},[0,1,2,3,4,5],"20160214-056");
			//setInterval(function(){update_muns({"m":01,"s":30},[0,1,2,3,4,5],"20160214-056");},90000);	
			$(".process").each(function(i,n){
				var second=parseInt($(this).find(".process-second span").html()),
					proc=parseInt($(this).find(".process-ing").attr("data-process")),
					dirct=1,
					procing=0,
					seconding=0.00,
				interval=setInterval(function(e,second,proc){
					seconding=second*procing*0.01;
					seconding=seconding.toFixed(2);
					seconding=seconding.replace(".","'");
					e.find(".process-ing").css("width",procing+"%");
					e.find(".process-second span").html(seconding);
					if(procing>=100){
						dirct=-1;
					}
					procing+=dirct;
					if(procing<=proc&&dirct==-1)clearInterval(interval)
				},14,$(this),second,proc);
			});

			
			main_scroll.init({
				element_name:['.footer .head','.footer .foot']
			});	
		},2000);
		clearInterval(timer);
	}
}, 50);

$(".popup .close").click(function(){
	$(".popup").fadeOut(500);
});




showTip("下午好,感谢您的到来~","Good afternoon and welcome");		//开启关闭按钮
//showTip("下午好,感谢您的到来~","Good afternoon and welcome",true);		//开启关闭按钮
//showTip("下午好,感谢您的到来~","Good afternoon and welcome",false);	//关闭关闭按钮
//showTip("下午好,感谢您的到来~","Good afternoon and welcome",false,5000);	//延时5秒自动关闭
//showTip("下午好,感谢您的到来~","Good afternoon and welcome",true,false);	//不关闭

