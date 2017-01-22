var base={
	/*urlhref*/
	urlhref:function(data){
		data.time=data.time||500;
		var top=parseInt($(data.element).offset().top);
		var headerTop=parseInt($(".header").css("height"));
		top=top-headerTop;
		$('html,body').animate({scrollTop:top},data.time);
	},
	/*animateClassAdd  */
	anClasAdd:function(e,keyframes,stime,dtime,an,status){
		//animation:mContentIn .8s  ease-in-out 0s  both;
		var status=status||"both",
			an=an||"ease-in-out";
		$(e).css({
			"animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-moz-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-webkit-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
			"-o-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status
		});
	},
	/*bool img status*/
	imgLoad:function(img, callback) {
		var timer = setInterval(function() {
			if (img.complete) {
				callback(img)
				clearInterval(timer)
			}
		}, 50)
	},
	/*auto height*/
	tableHeightBool:function(parent,child){
		$(parent).find(child).css("height","auto");
		$(parent).each(function(index, element) {
			var maxheight=$(parent+":eq("+index+")").find(child+":eq(0)").height();
			$(parent+":eq("+index+")").find(child).each(function(index1, element1) {
				if($(parent+":eq("+index+")").find(child+":eq("+index1+")").height()>maxheight)
					maxheight=$(parent+":eq("+index+")").find(child+":eq("+index1+")").height();
			});
			$(parent+":eq("+index+")").find(child).css("height",maxheight+"px");
		});
	},
	InternetExplorer:function() {
	    var browser = navigator.appName;
	    var b_version = navigator.appVersion;
	    var version = b_version.split(";");
		if (version.length > 1) {
	        var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
	        if (trim_Version < 10) {
	            return false;
	        }
	    }
	    return true;
	},
	charCode:function(string){
		var valLen=0;
		for(var i in string){
			var charCode=string[i].charCodeAt();
			var bool=charCode>48&&charCode<57	//数字
				bool|=charCode>97&&charCode<122	//小写字母
				bool|=charCode>65&&charCode<90	//大写字母
			if(bool) valLen+=0.5;
			else ++valLen;
		}
		return valLen;
	}

}

//$(".online .online-container .online-window").mCustomScrollbar();
$(function(){
	$(window).scroll(function(){
		var h=34-$(this).scrollTop();
		if(h<0)h=0;if(h==34)$(".header .head").css("overflow","inherit");else $(".header .head").css("overflow","hidden")
		$(".header .head").css({"height":h+"px"});
	});

	var navIndex=$(".header .foot .nav .nav-child").index($(".header .foot .nav .nav-child.on"));
	navTopAn(navIndex);
	$(".header .foot .nav li").mouseover(function(){
		var navIndex=$(".header .foot .nav .nav-child").index($(this));
		navTopAn(navIndex);
	}).mouseleave(function(){
		var navIndex=$(".header .foot .nav .nav-child").index($(".header .foot .nav .nav-child.on"));
		navTopAn(navIndex);

	});


	$(".alert-msg").each(function(i,n){
		var h=parseInt($(n).height())/2*-1;
		$(n).css("margin-top",h+"px");
	});

	$(".fixed .child-pointer").click(function(){
		$(".fixed").toggleClass('on');
	});

	//获取电话号码的长度
	var fixedmsg=$(".fixed .child .msg1 p").html();
	var fixedwidth=base.charCode(fixedmsg)*16;
	$(".fixed .child .msg1").css("width",fixedwidth+"px");

	//判读底部导航是否有空缺
	$(window).scroll(footerBool);
	$(window).resize(footerBool);
	//window.onresize = footerBool;
	footerBool();

});

//判读底部导航是否有空缺
function footerBool(){
	$(".footer").css({"position":"relative","left":"inherit","right":"inherit","bottom":"inherit"});
	var footerTop=$(".footer")[0].offsetTop,
		footerHeight=$(".footer").height(),
		documentHeight=document.documentElement.clientHeight;
	if(footerTop+footerHeight<documentHeight)$(".footer").css({"position":"absolute","left":"0px","right":"0px","bottom":"0px"});
}

function navTopAn(index){
	var navW=$(".header .foot .nav .nav-child.on").width();
	$(".header .foot .nav-bg").css({
		"width":navW,
		"display":"block",
		"left":navW*index
	});
}

function online_show(){
	$(".online-bg").fadeIn(500);
	$(".online").show();
}
function online_hide(){
	$(".online-bg").fadeOut(500);
	$(".online").hide();
}

/*时间*/
function get_time(){
	var nowtime=new Date(),
		year=nowtime.getFullYear(),
		month=nowtime.getMonth()+1,
		day=nowtime.getDate(),
		h=nowtime.getHours(),
		m=nowtime.getMinutes(),
		s=nowtime.getSeconds();
	return year+"-"+month+"-"+day+" "+h+":"+m+":"+s;
}
setInterval(function(){
	$(".header .head .gmt span").html(get_time());
},1000);

$(".head-refresh").click(function(){
	$(".head-value").html("刷新中...");
	setTimeout(function(){
		$(".head-value").html("200.00");
	},2000);
});

function indexLoginFocus(e){
	$(e).closest('.shortcut-text').removeClass('no')
}
function indexLoginBlur(e){
	$(e).closest('.shortcut-text').addClass('no')
}


/**
 * [showTip 弹窗]
 * @param  {[string]} title [标题]
 * @param  {[string]} str   [内容]
 * @param  {[number|boolean]} delay [number为延时时间,boolean为是否开启延时关闭]
 * @param  {[boolean]} close [是否显示关闭按钮]
 * @return {[void]}       [description]
 */
function showTip(title,str,close,delay){
	var tipclass="tip"+new Date().getMilliseconds();
	var _delay=delay||3000;
	var _close=typeof(close)=="boolean"?close:true;
	var html='<div class="tip '+tipclass+'"><div class="tip-logo"><img src="images/logo_loading.png" alt=""></div><div class="tip-content"><h2 class="title">'+title+'</h2><p>'+str+'</p></div></div>';
	$("body").append(html);
	if(_close)
		$(".tip."+tipclass).append('<img class="tip-close" onclick="hideTip(\''+tipclass+'\')" src="images/icon-close.png" alt="">')
	if(delay==false) return;
	setTimeout(function(tipclass){
		hideTip(tipclass)
	},_delay,tipclass);

}
function hideTip(tipclass){
	$(".tip."+tipclass).addClass('out');
	setTimeout(function(tipclass){
		$(".tip."+tipclass).remove();
	},1000,tipclass);
}
