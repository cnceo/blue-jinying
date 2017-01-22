$(".alert-msg").each(function(i,n){
	var h=parseInt($(n).height())/2*-1;
	$(n).css("margin-top",h+"px");
});