

$(".process").each(function(i,n){
	var second=parseInt($(this).find(".process-second span").html()),
		proc=parseInt($(this).find(".process-ing").attr("data-process")),
		dirct=1,
		procing=0,
		seconding=0.00,
	interval=setInterval(function(e,second,proc){
		seconding=second*procing*0.01;
		seconding=seconding.toFixed(2);
		seconding=seconding.replace(".","'");
		e.find(".process-ing").css("width",procing+"%");
		e.find(".process-second span").html(seconding);
		if(procing>=100){
			dirct=-1;
		}
		procing+=dirct;
		if(procing<=proc&&dirct==-1)clearInterval(interval)
	},14,$(this),second,proc);
});


