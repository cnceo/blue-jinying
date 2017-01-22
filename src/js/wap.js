function wapIframeShow(){
	$("html,body").css("overflow","hidden")
	$(".wap-iframe").stop(false,true).show();
	$(".wap-iframe .wap-iframe-bg").stop(false,true).fadeIn(500);
	$(".wap-iframe iframe").stop(false,true).delay(200).fadeIn(500);

}
function wapIframeHide(){
	$("html,body").css("overflow","initial")
	$(".wap-iframe .wap-iframe-bg").stop(false,true).delay(200).fadeOut(500,function(){
		$(".wap-iframe").hide()
	});
	$(".wap-iframe iframe").stop(false,true).fadeOut(500);

}

var skew=new skewing();
skew.init({
	element:".main .images .phone",
	scale:0.05,
});
var skew1=new skewing();
skew1.init({
	element:".main .images .p1",
	scale:0.03,
	direc:-1,
});
var skew2=new skewing();
skew2.init({
	element:".main .images .p2",
	scale:0.08,
	direc:1,
});
var skew3=new skewing();
skew3.init({
	element:".main .images .p3",
	scale:0.12,
	direc:-1,
});
var skew4=new skewing();
skew4.init({
	element:".main .images .p4",
	scale:0.1,
	direc:1,
});
var skew5=new skewing();
skew5.init({
	element:".main .images .p5",
	scale:0.11,
	direc:1,
});