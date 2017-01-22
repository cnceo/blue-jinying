


function changeLottery(index){
	var left=$(".main-banner .child:eq("+index+")")[0].offsetLeft;
	left+=31;
	$(".main-banner .pointer").css("left",left+"px")
	$(".main-content .content").hide();
	$(".main-content .content:eq("+index+")").show();
}
changeLottery(0);