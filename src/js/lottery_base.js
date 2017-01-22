$(".m-banner .b-child1 .btn").click(function(){
	$(".b-child-list").stop(false,true).slideToggle(500);
});
$(".main .main-content .main-title .right span").click(function(){
	$(".main .main-content .main-title .right span").removeClass("on");
	$(this).addClass("on");
});
$(".m-banner .b-child4 .more1").click(function(){
	var html='<ul class="c-list">'+
                	'<li class="child child1">20150815-049</li>'+
                    '<li class="child child2">6,5,4,9,2</li>'+
                    '<li class="child child3">组六</li>'+
                '</ul>';
	$(".m-banner .b-child4 .c-content .c-list:eq(0)").slideUp(500,function(){$(this).remove();$(".m-banner .b-child4 .c-content").append(html);});
});
$(".m-banner .b-child4 .more2").click(function(){
	var html='<ul class="c-list" style="display:none;">'+
                	'<li class="child child1">20150815-049</li>'+
                    '<li class="child child2">6,5,4,9,2</li>'+
                    '<li class="child child3">组六</li>'+
                '</ul>';
    $(".m-banner .b-child4 .c-content .c-title").after(html);
    $(".m-banner .b-child4 .c-content .c-list:eq(0)").slideDown(500);
	$(".m-banner .b-child4 .c-content .c-list:last").remove();;
});
function change_bg(url){
	$("body").css({"background-image":"url("+url+")"});
}
/*select*/
$(".choose  .choose-foot .select").click(function(){
	var element=$(".select").not($(this));
	element.find(".select-list").hide();
	$(this).find(".select-list").toggle();
});
$(".choose  .choose-foot .select .select-list li").click(function(){
	var parent_select=$(this).closest(".select-list");
	parent_select.find("li").removeClass("on");
	$(this).addClass("on");
	var parent=$(this).closest(".select");
	var val=$(this).html();
	parent.find(".select-title").val(val);
	parent.find(".select-title").html(val);
});
//增减倍数
$(".choose .choose-title .multiple-select .multiple-btn.sub").click(function(){
	var val=parseInt($(".choose .choose-title .multiple-select .inputText").val());
	var pic=parseInt($(".choose .choose-title .multiple-select .inputText").attr("data-price"));
	if(val==0){return;}else{val--;}pic=pic*val;
	$(".choose .choose-title .multiple-select .inputText").val(val);
	$(".choose .choose-title .all-multiple").html(pic.toFixed(2));
});
$(".choose .choose-title .multiple-select .multiple-btn.add").click(function(){
	var val=parseInt($(".choose .choose-title .multiple-select .inputText").val());
	var pic=parseInt($(".choose .choose-title .multiple-select .inputText").attr("data-price"));
	val++;pic=pic*val;
	$(".choose .choose-title .multiple-select .inputText").val(val);
	$(".choose .choose-title .all-multiple").html(pic.toFixed(2));
});
//删除注
function remove_li(e){
	$(e).closest("li").remove();
}
//清空
function clear_li(){
$(".choose .choose-content1 .clists").html("");
}
//注数增加
function add_li(m1,m2,multiple1,multiple2,loop){
	var html="";
	for(var i=0;i<loop;i++){
		html+='<li>'+
				'<div class="li-child li-title">[五星_复式]<span>8,6,8,6,6</span></div>'+
				'<div class="li-child li-money">¥'+parseInt(m2).toFixed(2)+'元</div>'+
				'<div class="li-child li-strip">'+multiple1+'注</div>'+
				'<div class="li-child li-multiple">'+multiple2+'倍</div>'+
				'<div class="li-child li-addmoney">¥'+parseInt(m2).toFixed(2)+'元</div>'+
				'<div class="li-child li-close" onclick="remove_li(this)"><img src="images/lottery/close.png"></div>'+
			'</li>';
	}
	$(".choose .choose-content1 .clists").append(html);
}
function add_more(index){
	$(".choose-content2 .titles .child").not($(".choose-content2 .titles .child:eq("+index+")")).removeClass("on");
	$(".choose-content2 .titles .child:eq("+index+")").addClass("on");
	$(".choose-content2 .li-contents").not($(".choose-content2 .li-contents:eq("+index+")")).hide();
	$(".choose-content2 .li-contents:eq("+index+")").show();
}
function msg_more(index){
	$(".main .main-msg .titles .child").not($(".main .main-msg .titles .child:eq("+index+")")).removeClass("on");
	$(".main .main-msg .titles .child:eq("+index+")").addClass("on");
	$(".main .main-msg .contents").not($(".main .main-msg .contents:eq("+index+")")).hide();
	$(".main .main-msg .contents:eq("+index+")").show();
}
//选择功能
function select_all(e){
	var parent=select_clear(e);
	parent.find(".l-mun .mun").addClass("on");
}
function select_big(e){
	var parent=select_clear(e);
	var len=parseInt(parent.find(".l-mun .mun").length/2)-1;
	parent.find(".l-mun .mun").each(function(index, element) {
        if(index>len){$(element).addClass("on");}
    });
}
function select_small(e){
	var parent=select_clear(e);
	var len=parseInt(parent.find(".l-mun .mun").length/2)-1;
	parent.find(".l-mun .mun").each(function(index, element) {
        if(index<=len){$(element).addClass("on");}
    });
}
function select_odd(e){
	var parent=select_clear(e);
	parent.find(".l-mun .mun").each(function(index, element) {
        if(index%2==1){$(element).addClass("on");}
    });
}
function select_even(e){
	var parent=select_clear(e);
	parent.find(".l-mun .mun").each(function(index, element) {
        if(index%2==0){$(element).addClass("on");}
    });
}
function select_clear(e){
	var parent=$(e).closest(".main .lists li");
	parent.find(".l-mun2 .mun").removeClass("on");
	parent.find(".l-mun .mun").removeClass("on");
	$(e).addClass("on");
	return parent;
}

var danshi="";
	danshi+="说明：\r\n"
		+"1、请参考标准格式样本格式录入或上传方案。\r\n"
		+"2、每一注号码之间的间隔符支持 回车 空格[ ] 逗号[,] 分号[;] 冒号[:] 竖线[|]。\r\n"
		+"3、文件格式必须是.txt格式。\r\n"
		+"4、文件较大时会导致上传时间较长，请耐心等待!\r\n"
		+"5、将文件拖入文本框 即可快速实现文件上传功能。\r\n"
		+"6、导入文本内容将覆盖文本框中现有的内容。\r\n";
function add_danshi(){
	$(".main .lists .l-textarea .textArea").val(danshi);
}
function remove_danshi(){
	$(".main .lists .l-textarea .textArea").val("");
}

//开奖效果
setInterval(lottory_open,10000);
function lottory_open(){
	var dtime;
	$(".m-banner .b-child2 .btns .btn").each(function(i,n){
		dtime=0.2*i;
		base.anClasAdd(".m-banner .b-child2 .btns .btn:eq("+i+")","scale","1s",dtime+"s");
	});
	var dtime1=(dtime+1)*1000;
	setTimeout(function(){
		$(".m-banner .b-child2 .btns .btn").attr("style","");
	},dtime1);
}


$(".main .classify li").mouseover(function(){
	var w=0;
	$(this).find(".classify-list .classify-list-li p").each(function(ii,nn){
		var _w=$(nn).width();
		w=_w>w?_w:w;
	});
	var ww=w+24;
	$(this).find(".classify-list").css({
		"width":ww+"px",
		"margin-left":-ww/2+"px"
	})
});