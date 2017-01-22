$(function(){
	$(".main-child").each(function(i,n){
		var time=i*0.2;
		base.anClasAdd(".main-child:eq("+i+")","main-child",".6s",time+"s","ease-in-out","both");	
	});
});