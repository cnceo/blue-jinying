$("#select-all").click(function(){
	$(".alert-msg .line .line-content.line-list input").prop("checked",function(){return true;});
});
$("#select-inverse").click(function(){
	$(".alert-msg .line .line-content.line-list input").each(function(i,n){
		$(n).prop("checked",function(){if($(this).is(":checked"))return false;else return true;});
	});
});
function save_user(){
	var users="";
	$(".alert-msg .line .line-content.line-list input").each(function(i,n){
		if($(n).is(":checked")){
			users+=$(n).next("span").html()+",";
		}
	});
	$(".main .siftings .siftings-titles .line1.line-user .line-title").next("span").html(users);
	$(".alert-msg").stop(false,true).delay(200).fadeOut(500);$(".alert-msg-bg").stop(false,true).fadeOut(500);
}