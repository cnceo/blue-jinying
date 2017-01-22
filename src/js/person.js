var mainScroll=new indexScroll();

var imgBool=[],
	imgBool1=[],
	timer;
$(".main .imgs").each(function(index, element) {
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
		if(base.InternetExplorer()){
			mainScroll.init({
				"element":".main-child",
				"btn":"<div class='child'></div>",
				"btn_function":"mainScroll"
			});
		}else{
			$(".main").addClass("ie");
			$(".nav-indexs").addClass("ie");
		}
		
		clearInterval(timer);
	}
}, 50);

