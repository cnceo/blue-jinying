$(".all-btn").click(function(){
	$(".main .siftings .siftings-content .siftings-line .child .checkbox").not($(".main .siftings .siftings-content .siftings-line .child .checkbox:checked")).click();
});

$(".change-btn").click(function(){
	$(".main .siftings .siftings-content .siftings-line .child .checkbox:checked").each(function(index, element) {
        var parent=$(element).closest(".siftings-line");
		parent.removeClass("on");
		parent.find(".child5").html("已读");
    });
});

$(".delete-btn").click(function(){
	$(".main .siftings .siftings-content .siftings-line .child .checkbox:checked").each(function(index, element) {
        var parent=$(element).closest(".siftings-line");
		parent.remove();
    });
});