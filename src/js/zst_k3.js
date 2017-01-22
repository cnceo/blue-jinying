
var lineArr={};
var drawBool=false;
function show_tendency(){
	drawBool=true;
	$.each(lineArr,function(i,n){
		$.each(n,function(ii,nn){
			var ele=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas");
			if(ele[0])drawline(ele,nn,n[parseInt(ii)+1],n["color"]);
		});
	});
}

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

$(function(){
	

	$(".line-canvas").each(function(i,n){
		$(n).find(".line-child-canvas").each(function(ii,nn){
			if(!lineArr[ii])lineArr[ii]={};
			if(!lineArr[ii]["color"])lineArr[ii]["color"]=$(nn).attr("data-line-color");
			lineArr[ii][i]=$(nn).find(".on").position().left;
		});
	});
	$.each(lineArr,function(i,n){
		$.each(n,function(ii,nn){
			var w=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas").closest('.muns').width();
			var ele=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas");
			ele.attr("width",w);
			ele.css("width",w+"px");
		});
	});

	$(".tendency").click(function(){
		if(!drawBool)show_tendency();
		if($(this).is(':checked'))$("canvas").show();
		else $("canvas").hide();
	});

	$(".omit").click(function(){
		
		if($(this).is(':checked')) $(".l-content").addClass("on");
		else $(".l-content").removeClass("on");
	});



});


function ajax_update(){
	$(".loading").show();
	$(".loading-bg").show();
	setTimeout(function(){
		var html='<ul class="line">'+
	        '<li class="line-child line-child1">'+
	            '<p class="title">20160404-014</p>'+
	        '</li>'+
	        '<li class="line-child line-child2">'+
	            '<p class="title">1,5,6</p>'+
	        '</li>'+
	        '<li class="line-child line-child3">'+
	            '<div class="muns">'+
	                '<span><i>22</i></span>'+
	                '<span><i>7</i></span>'+
	                '<span class="yellow"><i>4</i><div class="mun">1</div></span>'+
	                '<span><i>6</i></span>'+
	                '<span><i>4</i></span>'+
	                '<span><i>10</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child4">'+
	            '<div class="muns">'+
	                '<span><i>22</i></span>'+
	                '<span><i>7</i></span>'+
	                '<span class="yellow"><i>4</i></span>'+
	                '<span><i>6</i></span>'+
	                '<span><i>4</i></span>'+
	                '<span><i>10</i></span>'+
	                '<span><i>8</i></span>'+
	                '<span><i>1</i></span>'+
	                '<span><i>3</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child5">'+
	            '<div class="muns">'+
	                '<span><i>小奇</i></span>'+
	                '<span><i>小偶</i></span>'+
	                '<span class="blue"><i>大奇</i></span>'+
	                '<span><i>大偶</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child6">'+
	            '<div class="muns">'+
	                '<span class="red"><i>三同号</i></span>'+
	                '<span class="blue"><i>三不同号</i></span>'+
	                '<span class="green"><i>三连号</i></span>'+
	                '<span><i>二同号（复）</i></span>'+
	                '<span><i>二同号（单）</i></span>'+
	                '<span><i>二不同号</i></span>'+
	            '</div>'+
	        '</li>'+
	    '</ul>'+
	    '<ul class="line">'+
	        '<li class="line-child line-child1">'+
	            '<p class="title">20160404-014</p>'+
	        '</li>'+
	        '<li class="line-child line-child2">'+
	            '<p class="title">1,5,6</p>'+
	        '</li>'+
	        '<li class="line-child line-child3">'+
	            '<div class="muns">'+
	                '<span><i>2</i></span>'+
	                '<span><i>7</i></span>'+
	                '<span class="yellow"><i>4</i><div class="mun">1</div></span>'+
	                '<span><i>6</i></span>'+
	                '<span><i>4</i></span>'+
	                '<span><i>10</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child4">'+
	            '<div class="muns">'+
	                '<span><i>22</i></span>'+
	                '<span><i>7</i></span>'+
	                '<span><i>6</i></span>'+
	                '<span class="yellow"><i>4</i></span>'+
	                '<span><i>4</i></span>'+
	                '<span><i>10</i></span>'+
	                '<span><i>8</i></span>'+
	                '<span><i>1</i></span>'+
	                '<span><i>3</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	                '<span><i>9</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child5">'+
	            '<div class="muns">'+
	                '<span><i>小奇</i></span>'+
	                '<span><i>小偶</i></span>'+
	                '<span class="blue"><i>大奇</i></span>'+
	                '<span><i>大偶</i></span>'+
	            '</div>'+
	        '</li>'+
	        '<li class="line-child line-child6">'+
	            '<div class="muns">'+
	                '<span class="red"><i>三同号</i></span>'+
	                '<span class="blue"><i>三不同号</i></span>'+
	                '<span class="green"><i>三连号</i></span>'+
	                '<span><i>二同号（复）</i></span>'+
	                '<span><i>二同号（单）</i></span>'+
	                '<span><i>二不同号</i></span>'+
	            '</div>'+
	        '</li>'+
	    '</ul>'+
	   
	    '<ul class="line line-gray">'+
	    '	<li class="line-child line-child1">'+
	    '    	<p class="title">期号</p>'+
	    '    </li>'+
	    '    <li class="line-child line-child2">'+
	    '    	<p class="title">开奖号码</p>'+
	    '    </li>'+
	    '    <li class="line-child line-child3">'+
	    '    	<p class="title">号码分布</p>'+
	    '    </li>'+
	    '    <li class="line-child line-child4">'+
	    '        <p class="title">和值</p>'+
	    '    </li>'+
	    '    <li class="line-child line-child5">'+
	    '        <p class="title">和值组合状态</p>'+
	    '    </li>'+
	    '    <li class="line-child line-child6">'+
	    '        <p class="title">号码形态</p>'+
	    '    </li>'+
	    '</ul>'
		$(".l-content").html(html);
		$(".loading").fadeOut(500);
		$(".loading-bg").fadeOut(500);

		$(".line-canvas").each(function(i,n){
			$(n).find(".line-child-canvas").each(function(ii,nn){
				if(!lineArr[ii])lineArr[ii]={};
				if(!lineArr[ii]["color"])lineArr[ii]["color"]=$(nn).attr("data-line-color");
				lineArr[ii][i]=$(nn).find(".on").position().left;
			});
		});
		$.each(lineArr,function(i,n){
			$.each(n,function(ii,nn){
				var w=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas").closest('.muns').width();
				var ele=$(".line-canvas:eq("+ii+") .line-child-canvas:eq("+i+") canvas");
				ele.attr("width",w);
				ele.css("width",w+"px");
			});
		});

	},2000);

	

    
}


