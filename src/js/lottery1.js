$( "#slider" ).slider({
	range: "min",
	min: 0,
    max: 10000,
	slide: function (event, ui) {
        //$("#amount").val(ui.value);
		var val=ui.value,
			pct=ui.value/100,
			money=parseInt($(".choose .choose-foot .money").html());
			
			money=parseInt(money*pct/100);
		$(".choose .choose-foot .slider-pct").html(pct+"%");
		$(".choose .choose-foot .slider-mun").html(money);
    }
});

function news_content(model,e){
	var main_lists_html="";
	$(".main .classify .classify-list .classify-list-li").not($(e)).removeClass("on");
	$(e).addClass("on");
	$(".main .classify li").removeClass("on");
	var parent=$(e).closest("li");
	parent.addClass("on");
	$(".main .main-content .demo-title2").hide();
	if(model=="1-1"){
		main_lists_html='<li class="odd">'
							+'<div class="l-title"><p></p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>';
	}else if(model=="1-3"){
		$(".main .classify-childs").hide();
		$(".main .main-content .demo-title2").show();
		main_lists_html='<div class="l-textarea"><textarea class="textArea" onblur="add_danshi()" onfocus="remove_danshi()">'+danshi+'</textarea></div>';
		main_lists_html+='<div class="l-btns"><div class="l-btn">删除重复项</div><div class="l-btn" onclick="remove_danshi()">清空文本框</div></div>';
	}else if(model=="2-1"){
		main_lists_html='<li class="odd">'
							+'<div class="l-title"><p>第一位</p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>'
						+'<li class="even">'
							+'<div class="l-title"><p>第二位</p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>';
	}
	else if(model=="3-1"){
		main_lists_html='<li class="odd">'
							+'<div class="l-title"><p>第一位</p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>'
						+'<li class="even">'
							+'<div class="l-title"><p>第二位</p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>'
						+'<li class="even">'
							+'<div class="l-title"><p>第三位</p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">0</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">11</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>';
	}else if(model=="9-1"){
		main_lists_html='<li class="odd">'
							+'<div class="l-title"><p></p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">5单0双</div>'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">4单1双</div>'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">3单2双</div>'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">2单3双</div>'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">1单4双</div>'
								+'<div class="mun" style="width:100px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">0单5双</div>'
							+'</div>'
						+'</li>';
	}else if(model=="9-2"){
		main_lists_html='<li class="odd">'
							+'<div class="l-title"><p></p></div>'
							+'<div class="l-mun">'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">03</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">04</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">05</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">06</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">07</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">08</div>'
								+'<div class="mun" onclick="$(this).toggleClass(\'on\')">09</div>'
							+'</div>'
							+'<div class="l-mun2">'
								+'<div class="mun" onclick="select_all(this)">全</div>'
								+'<div class="mun" onclick="select_big(this)">大</div>'
								+'<div class="mun" onclick="select_small(this)">小</div>'
								+'<div class="mun" onclick="select_odd(this)">奇</div>'
								+'<div class="mun" onclick="select_even(this)">偶</div>'
								+'<div class="mun" onclick="select_clear(this)">清</div>'
							+'</div>'
						+'</li>';
	}
	$(".main .lists").html(main_lists_html);
	$(".main .main-content .main-title .title").html($(e).html());
	
}