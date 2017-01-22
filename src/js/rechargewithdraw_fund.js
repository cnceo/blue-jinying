$(function(){
	$(".main .model-nav .child").click(function(){
		if($(this).hasClass("on"))return;
		$(".main .model-nav .child").removeClass("on");
		$(this).addClass("on");
		var index=$(".main .model-nav .child").index($(this));
		$(".main .content").not($(".main .content:eq("+index+")")).stop(false,true).hide();
		$(".main .content:eq("+index+")").stop(false,true).show();
	});
});
function msg_hide(){
	$(".alert-msg2").stop(false,true).delay(200).fadeOut(500);
	$(".alert-msg-bg").stop(false,true).fadeOut(500);
}
function msg_show(){
	$(".alert-msg2").stop(false,true).delay(200).fadeIn(500);
	$(".alert-msg-bg").stop(false,true).fadeIn(500);
}