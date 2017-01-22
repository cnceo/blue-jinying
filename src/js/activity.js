$(function(){
	$(".main .main-child .child-title .btn").click(function(){
		$(this).toggleClass("on");
		var parent=$(this).closest(".main-child");
		parent.find(".child-content").stop(false,true).slideToggle(500);
	});		
	
	$(".main-child").each(function(i,n){
		var time=i*0.2;
		base.anClasAdd(".main-child:eq("+i+")","main-child",".6s",time+"s","ease-in-out","both");	
	});
});