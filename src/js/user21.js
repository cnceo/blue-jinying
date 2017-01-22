$(function(){
	var lineArr={};
	$(".line-canvas").each(function(i,n){
		$(n).find(".line-child-canvas").each(function(ii,nn){
			if(!lineArr[ii])lineArr[ii]={};
			if(!lineArr[ii]["color"])lineArr[ii]["color"]=$(nn).attr("data-line-color");
			lineArr[ii][i]=$(nn).find(".on").position().left;
		});
	});
	$.each(lineArr,function(i,n){
		$.each(n,function(ii,nn){

			var ele=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas");
			if(ele[0])drawline(ele,nn,n[parseInt(ii)+1],n["color"]);
			
		});
	});
	

	
});

function drawline(ele,top_point,bottom_point,color){
	/*var ele=document.getElementsByTagName("canvas");*/

	var context=ele[0].getContext("2d");
	context.strokeStyle=color;
	context.lineWidth="2";
	context.lineCap="round"; 
	
	context.moveTo(top_point+10,0);
	context.lineTo(bottom_point+10,44);

	context.stroke();

}