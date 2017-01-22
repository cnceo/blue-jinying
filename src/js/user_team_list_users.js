var dividendAddIndex=1;
function dividendToggle(type){
	if(type=="+"){
		dividendAddIndex++;
		var html=
				'<div class="set-dividend-line set-dividend-line-add">'+
	            '    <div class="child-title">方案'+dividendAddIndex+':周期累计投注额</div>'+
	            '    <div class="child-content"><input type="text" class="inputText" ></div>'+
	            '    <div class="child-title">万元,可获得</div>'+
	            '    <div class="child-content"><input type="text" class="inputText" ></div>'+
	            '    <div class="child-title">%</div>'+
	            '</div>'
		$(".alert-set-dividend .set-dividend-content .content").append(html)
	}else if(type=="-"&&dividendAddIndex>1){
		dividendAddIndex--;
		$(".alert-set-dividend .set-dividend-content .content .set-dividend-line-add:last").remove();
	}
	
}

$(".alert-set-dividend .button-editr").click(function(){
	$(".alert-set-dividend .set-dividend-content .content .set-dividend-line-see").hide();
	$(".alert-set-dividend .set-dividend-content .content .set-dividend-line-editor").show();
	$(".alert-set-dividend .set-dividend-content .content .set-dividend-line-add").show();
	$(".alert-set-dividend .set-dividend-content .buttons").show();
})


$(".alert-set-salary .set-dividend-tabs .tab").click(function(){
	var parent=$(this).closest('.set-dividend-tabs');
	var index=parent.find(".tab").index(this);
	parent.find(".tab").removeClass("on");
	$(this).addClass("on");
	$(".alert-set-salary .set-dividend-content .content").removeClass("on");
	$(".alert-set-salary .set-dividend-content .content:eq("+index+")").addClass("on");
});