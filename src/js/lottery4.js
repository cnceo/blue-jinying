$(".s-child").click(function(){ $(this).toggleClass("on"); });
$(".main .main-order .order-content .child2 .more").click(function(){
	$(".main .main-order .order-content .child2 .all").toggle();
});
$(".main .main-order .order-history").click(function(){
	$(".main .main-msg").stop(false,true).slideToggle(500);
});
$(".main .main-msg .titles .close").click(function(){
	$(".main .main-msg").stop(false,true).slideUp(500);
});

$(".main .main-order .order-content .child2 .c").click(function(){
	var src=$(this).attr("src");
	c_add(src);
});
$(".main .main-order .order-content .child2 .all .all-imgs .cc").click(function(){
	var src=$(this).attr("src");
	c_add(src);
 });

//选中筹码
function c_add(src){
	$(".s-child.on").each(function(i,n){
		var htm='<img src="'+src+'" onclick="c_remove(this)" />';
		$(n).find(".s-childc").append(htm);
	});
}
//删除筹码
function c_remove(e){
	$(e).remove();
}

function b_sub(e){
	var parent=$(e).parent();
	var val=parseInt(parent.find(".inputText").val());
	if(val==0)return; else val--;
	parent.find(".inputText").val(val);
}
function b_add(e){
	var parent=$(e).parent();
	var val=parseInt(parent.find(".inputText").val());
	val++;
	parent.find(".inputText").val(val);
}