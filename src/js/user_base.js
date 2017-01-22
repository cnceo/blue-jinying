$(function(){
	$("body").click(function(){
		$(".select-content .select-list").hide();
	});
	/*select*/
	$(".select-content").click(function(){
		var element=$(".select-content").not($(this));
		element.find(".select-list").hide();
		//获取最长的长度
		var maxlen=0;
		$(this).find(".select-list p").each(function(i,n){
			var html=$(n).html();
			var valLen=0;
			for(var i in html){
				var charCode=html[i].charCodeAt();
				var bool=charCode>48&&charCode<57	//数字
					bool|=charCode>97&&charCode<122	//小写字母
					bool|=charCode>65&&charCode<90	//大写字母
				if(bool) valLen+=0.5;
				else ++valLen;
			}
			maxlen=valLen>maxlen?valLen:maxlen;
		})
		maxlen=maxlen*16+20;
		$(this).find(".select-list").css("width",maxlen+"px").toggle();
	});
	$(".select-list li").click(function(){
		var parent_select=$(this).closest(".select-list");
		parent_select.find("li").removeClass("on");
		$(this).addClass("on");
		var parent=$(this).closest(".select-content");
		var val=$(this).html();

		var html=$(val).html();
		var valLen=0;
		for(var i in html){
			var charCode=html[i].charCodeAt();
			var bool=charCode>48&&charCode<57	//数字
				bool|=charCode>97&&charCode<122	//小写字母
				bool|=charCode>65&&charCode<90	//大写字母
			if(bool) valLen+=0.5;
			else ++valLen;
		}
		valLen=valLen*16+32;
		parent.css("width",valLen+"px")

		parent.find(".select-save").val(val);
		parent.find(".select-title").html(val);
	});
	/*radio*/
	$(".radio").click(function(){
		var parent=$(this).closest(".radio-content");
		parent.find(".radio").removeClass("check");
		$(this).addClass("check");
		var val=$(this).html();
		parent.find(".radio-save").html(val);
	});
	/*excel*/
	$(".excel-btn-add").unbind("click").bind("click",function(){
		var parent=$(this).closest(".line");
		var val=parseInt(parent.find(".excel .inputText").val());
		val++;
		parent.find(".excel .inputText").val(val);
		if(typeof(excelBtnAdd)==="function")excelBtnAdd(val);
	});
	$(".excel-btn-sub").unbind("click").bind("click",function(){
		var parent=$(this).closest(".line");
		var val=parseInt(parent.find(".excel .inputText").val());
		val--;
		parent.find(".excel .inputText").val(val);
		if(typeof(excelBtnSub)==="function")excelBtnSub(val);
	});
	/*money*/
	$(".line-money .line-money-child .child").click(function(){
		var parent=$(this).closest(".line-money");
		var val=$(this).html();
		parent.find(".inputText").val(val);
	});
});