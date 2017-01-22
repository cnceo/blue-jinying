function main_child_click(e){
	var val=$(e).html();
	var parent=$(e).closest(".main-child");
	if(val=="查看"){
		$(e).html("收起");
		parent.find(".child-content").stop(false,true).slideDown(500);
	}else{
		$(e).html("查看");
		parent.find(".child-content").stop(false,true).slideUp(500);
	}
}
function main_child_hide(e){
	var val=$(e).html();
	var parent=$(e).closest(".main-child");
	$(e).html("查看");
	parent.find(".child-content").stop(false,true).slideUp(500);
}