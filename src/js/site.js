

var imgBool=[],
	imgBool1=[],
	timer;
$(".main .logo").each(function(index, element) {
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
		$(".main").addClass("on");
		clearInterval(timer);
	}
}, 50);


$(function(){
	$(".main .main-container .left .c-btn").click(function(){
		$(".main .main-container .left .li-child .c1 p").hide();
		$(".main .main-container .left .li-child .c2 p").hide();

		setTimeout(function(){
			$(".main .main-container .left .li-child .c1 p").show();
			$(".main .main-container .left .li-child .c2 p").show();
		},1000);
	});
	$(".popup .close").click(function(){
		$(".popup").fadeOut(500);
	});
});