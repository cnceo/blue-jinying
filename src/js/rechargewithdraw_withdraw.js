$(function(){
	$(".radio").unbind("click").click(function(){
		var parent=$(this).closest(".radio-content");
		parent.find(".radio").not($(this)).removeClass("check");
		$(this).toggleClass("check");
		var val=$(this).html();
		parent.find(".radio-save").html(val);
	});
});