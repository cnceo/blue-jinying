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
	var main_lists_html="";var classify_childs_html="";
	$(".main .classify .classify-list .classify-list-li").not($(e)).removeClass("on");
	$(e).addClass("on");
	$(".main .classify li").removeClass("on");
	var parent=$(e).closest("li");
	parent.addClass("on");
	if(model=="1-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title" ><p>选号区</p><p class="l-msg"></p></div>'
                +'<div class="l-mun" style="width:420px">'
                	+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg">赔率: 180</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg">赔率: 60</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg">赔率: 32.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg">赔率: 20.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7<p class="l-msg">赔率: 12.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8<p class="l-msg">赔率: 9.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9<p class="l-msg">赔率: 8.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">10<p class="l-msg">赔率: 7.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">11<p class="l-msg">赔率: 7.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">12<p class="l-msg">赔率: 8.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">13<p class="l-msg">赔率: 9.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">14<p class="l-msg">赔率: 12.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">15<p class="l-msg">赔率: 20.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">16<p class="l-msg">赔率: 32.5</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">17<p class="l-msg">赔率: 60</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">18<p class="l-msg">赔率: 180</p></div>'
                +'</div>'
            +'</li>'
            +'<li class="even">'
            	+'<div class="l-title"><p>选号区</p><p class="l-msg"></p></div>'
                +'<div class="l-mun">'
                	+'<div class="mun" onclick="$(this).toggleClass(\'on\')">单<p class="l-msg">赔率：1.9</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">双<p class="l-msg">赔率：1.9</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">小<p class="l-msg">赔率：1.9</p></div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">大<p class="l-msg">赔率：1.9</p></div>'
                +'</div>'
            +'</li>';
       
	}else if(model=="1-2"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>选号区</p><p class="l-msg"></p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">豹子<p class="l-msg">赔率：36.5</p></div>'
					 +'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">顺子<p class="l-msg">赔率：8.5</p></div>'
					  +'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">对子<p class="l-msg">赔率：1.70</p></div>'
					   +'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">三不同<p class="l-msg">赔率：1.70</p></div>'
                +'</div>'
            +'</li>';
       
	}else if(model=="1-3"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>选号区</p><p class="l-msg"></p></div>'
                +'<div class="l-mun" style="width:800px">'
                    +'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">111<p class="l-msg"></p></div>'
					+'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">222<p class="l-msg"></p></div>'
					+'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">333<p class="l-msg"></p></div>'
					+'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">444<p class="l-msg"></p></div>'
					+'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">555<p class="l-msg"></p></div>'
					+'<div class="mun long-mun" style="width:120px;background-size:100% 43px;" onclick="$(this).toggleClass(\'on\')">666<p class="l-msg"></p></div>'
                +'</div>'
            +'</li>';
       
	}else if(model=="4-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>选号区</p><p class="l-msg"></p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1<p class="l-msg"></p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2<p class="l-msg"></p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg"></p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg"></p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg"></p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg"></p></div>'
                +'</div>'
            +'</li>';
        
	}else if(model=="4-2"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>胆码</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>拖码</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>';
        classify_childs_html='<div class="classify-child classify-child1 yellow">当前遗漏</div><div class="classify-child classify-child2 blue">冷热</div>';
	}else if(model=="1-6"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>选号区</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">11<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">22<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">33<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">44<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">55<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">66<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>';
        classify_childs_html='<div class="classify-child classify-child1 yellow">当前遗漏</div><div class="classify-child classify-child2 blue">冷热</div>';
	}else if(model=="1-7"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>同号</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">11<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">22<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">33<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">44<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">55<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">66<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>不同号</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>';
        classify_childs_html='<div class="classify-child classify-child1 yellow">当前遗漏</div><div class="classify-child classify-child2 blue">冷热</div>';
	}else if(model=="1-8"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>不同号</p><p class="l-msg">当前遗漏</p></div>'
                +'<div class="l-mun">'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">2<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">3<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">4<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">5<p class="l-msg">24</p></div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">6<p class="l-msg">24</p></div>'
                +'</div>'
            +'</li>';
        classify_childs_html='<div class="classify-child classify-child1 yellow">当前遗漏</div><div class="classify-child classify-child2 blue">冷热</div>';
	}
	
	$(".main .classify .classify-childs").html(classify_childs_html);
	$(".main .lists").html(main_lists_html);
	$(".main .main-content .main-title .title").html($(e).html());
	
}