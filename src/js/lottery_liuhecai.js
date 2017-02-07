
function select_type(e){
	var key = {};
	for(var i = 1;i < 50; i++) key[i] = false;
	$(e).toggleClass("on");
	var $btns = $(".select-lhc .select-btns .btn.on"),
			bool = true;

	$btns.each(function(i,n){
		var type = $(n).data("type");
		switch (type) {
			//大
			case "da":for (var i = 25; i < 50; i++) key[i]=bool;break;
			//小
			case "xiao":for (var i = 1; i < 25; i++) key[i]=bool; break;
			//单
			case "dan":for (var i = 1; i < 50; i++) if(i%2 == 1)key[i]=bool; break;
			//双
			case "shuang":for (var i = 1; i < 50; i++) if(i%2 == 0)key[i]=bool; break;
			//合单
			case "hedan":
				var k = [1,3,5,7,9,10,12,14,16,18,21,23,25,27,29,30,32,34,36,38,41,43,45,47,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//合双
			case "heshuang":
				var k = [2,4,6,8,11,13,15,17,19,20,22,24,26,28,31,33,35,37,39,40,42,44,46,48];
				for (var i in k) key[k[i]]=bool;
			break;
			//大单
			case "dadan":for (var i = 25; i < 50; i++) if(i%2 == 1)key[i]=bool; break;
			//小单
			case "xiaodan":for (var i = 1; i < 25; i++) if(i%2 == 1)key[i]=bool; break;
			//大双
			case "dashuang":for (var i = 25; i < 50; i++) if(i%2 == 0)key[i]=bool; break;
			//小双
			case "xiaoshuang":for (var i = 1; i < 25; i++) if(i%2 == 0)key[i]=bool; break;
			//尾大
			case "weida":for (var i = 1; i < 50; i++) if(i%10>=5)key[i]=bool; break;
			//尾小
			case "weixiao":for (var i = 1; i < 50; i++) if(i%10<5)key[i]=bool; break;
			//鼠
			case "shu":
				var k = [10,22,34,46];
				for (var i in k) key[k[i]]=bool;
			break;
			//牛
			case "niu":
				var k = [9,21,33,45];
				for (var i in k) key[k[i]]=bool;
			break;
			//虎
			case "hu":
				var k = [8,20,32,44];
				for (var i in k) key[k[i]]=bool;
			break;
			//兔
			case "tu":
				var k = [7,19,31,43];
				for (var i in k) key[k[i]]=bool;
			break;
			//龙
			case "long":
				var k = [6,18,30,42];
				for (var i in k) key[k[i]]=bool;
			break;
			//蛇
			case "she":
				var k = [5,17,29,41];
				for (var i in k) key[k[i]]=bool;
			break;
			//马
			case "ma":
				var k = [4,16,28,40];
				for (var i in k) key[k[i]]=bool;
			break;
			//羊
			case "yang":
				var k = [3,15,27,39];
				for (var i in k) key[k[i]]=bool;
			break;
			//猴
			case "hou":
				var k = [2,14,26,38];
				for (var i in k) key[k[i]]=bool;
			break;
			//鸡
			case "ji":
				var k = [1,13,25,37,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//狗
			case "gou":
				var k = [12,24,36,48];
				for (var i in k) key[k[i]]=bool;
			break;
			//猪
			case "zhu":
				var k = [11,23,35,47];
				for (var i in k) key[k[i]]=bool;
			break;
			//家禽
			case "jiaqin":
				var k = [1,3,4,9,11,12,13,15,16,21,23,24,25,27,28,33,35,36,37,39,40,45,47,48,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//野兽
			case "yeshou":
				var k = [2,5,6,7,8,10,14,17,18,19,20,22,26,29,30,31,32,34,38,41,42,43,44,46];
				for (var i in k) key[k[i]]=bool;
			break;
			//红大
			case "hongda":
				var k = [29,30,34,35,40,45,46];
				for (var i in k) key[k[i]]=bool;
			break;
			//红小
			case "hongxiao":
				var k = [1,2,7,8,12,13,18,19,23,24];
				for (var i in k) key[k[i]]=bool;
			break;
			//红单
			case "hongdan":
				var k = [1,7,13,19,23,29,35,45];
				for (var i in k) key[k[i]]=bool;
			break;
			//红双
			case "hongshuang":
				var k = [2,8,12,18,24,30,34,40,46];
				for (var i in k) key[k[i]]=bool;
			break;
			//蓝大
			case "landa":
				var k = [25,26,31,36,37,41,42,47,48];
				for (var i in k) key[k[i]]=bool;
			break;
			//蓝小
			case "lanxiao":
				var k = [3,4,9,10,14,15,20];
				for (var i in k) key[k[i]]=bool;
			break;
			//蓝单
			case "landan":
				var k = [3,9,15,25,31,37,41,47];
				for (var i in k) key[k[i]]=bool;
			break;
			//蓝双
			case "lanshuang":
				var k = [4,10,14,20,26,36,42,48];
				for (var i in k) key[k[i]]=bool;
			break;
			//绿大
			case "lvda":
				var k = [27,28,32,33,38,39,43,44,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//绿小
			case "lvxiao":
				var k = [5,6,11,16,17,21,22];
				for (var i in k) key[k[i]]=bool;
			break;
			//绿单
			case "lvdan":
				var k = [5,11,17,21,27,33,39,43,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//绿双
			case "lvshuang":
				var k = [6,16,22,28,32,38,44];
				for (var i in k) key[k[i]]=bool;
			break;
			//红波
			case "hong":
				var k = [1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46];
				for (var i in k) key[k[i]]=bool;
			break;
			//蓝波
			case "lan":
				var k = [3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48];
				for (var i in k) key[k[i]]=bool;
			break;
			//绿波
			case "lv":
				var k = [5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49];
				for (var i in k) key[k[i]]=bool;
			break;
			//全选
			case "all":for (var i = 1; i < 50; i++) key[i]=bool; break;
			default:

		}

	});

	for(var i in key){
		if(key[i]){ $(".cols-mun-"+i).addClass("on");}
		else{$(".cols-mun-"+i).removeClass("on");}
	}

}

function news_content(model,e){
	var main_lists_html="";
	$(".main .classify .classify-list .classify-list-li").not($(e)).removeClass("on");
	$(e).addClass("on");
	$(".main .classify li").removeClass("on");
	var parent=$(e).closest("li");
	parent.addClass("on");
	$(".main .main-content .demo-title2").hide();
	if(model=="tema-teA"){
		main_lists_html=`
		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-1">
				<div class="cols cols-33"><div class="btn btn-red">1</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-2">
				<div class="cols cols-33"><div class="btn btn-red">2</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-3">
				<div class="cols cols-33"><div class="btn btn-blue">3</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-4">
				<div class="cols cols-33"><div class="btn btn-blue">4</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-5">
				<div class="cols cols-33"><div class="btn btn-green">5</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-6">
				<div class="cols cols-33"><div class="btn btn-green">6</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-7">
				<div class="cols cols-33"><div class="btn btn-red">7</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-8">
				<div class="cols cols-33"><div class="btn btn-red">8</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-9">
				<div class="cols cols-33"><div class="btn btn-blue">9</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-10">
				<div class="cols cols-33"><div class="btn btn-blue">10</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>单</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>双</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>大单</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>小单</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
		</ul>


		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-11">
				<div class="cols cols-33"><div class="btn btn-green">11</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-12">
				<div class="cols cols-33"><div class="btn btn-red">12</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-13">
				<div class="cols cols-33"><div class="btn btn-red">13</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-14">
				<div class="cols cols-33"><div class="btn btn-blue">14</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-15">
				<div class="cols cols-33"><div class="btn btn-blue">15</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-16">
				<div class="cols cols-33"><div class="btn btn-green">16</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-17">
				<div class="cols cols-33"><div class="btn btn-green">17</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-18">
				<div class="cols cols-33"><div class="btn btn-red">18</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-19">
				<div class="cols cols-33"><div class="btn btn-red">19</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-20">
				<div class="cols cols-33"><div class="btn btn-blue">20</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>大</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>小</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>大双</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>小双</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-21">
				<div class="cols cols-33"><div class="btn btn-green">21</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-22">
				<div class="cols cols-33"><div class="btn btn-green">22</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-23">
				<div class="cols cols-33"><div class="btn btn-red">23</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-24">
				<div class="cols cols-33"><div class="btn btn-red">24</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-25">
				<div class="cols cols-33"><div class="btn btn-blue">25</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-26">
				<div class="cols cols-33"><div class="btn btn-blue">26</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-27">
				<div class="cols cols-33"><div class="btn btn-green">27</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-28">
				<div class="cols cols-33"><div class="btn btn-green">28</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-29">
				<div class="cols cols-33"><div class="btn btn-red">29</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-30">
				<div class="cols cols-33"><div class="btn btn-red">30</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>合单</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>合双</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>红波</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>蓝波</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-31">
				<div class="cols cols-33"><div class="btn btn-blue">31</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-32">
				<div class="cols cols-33"><div class="btn btn-green">32</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-33">
				<div class="cols cols-33"><div class="btn btn-green">33</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-34">
				<div class="cols cols-33"><div class="btn btn-red">34</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-35">
				<div class="cols cols-33"><div class="btn btn-red">35</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-36">
				<div class="cols cols-33"><div class="btn btn-blue">36</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-37">
				<div class="cols cols-33"><div class="btn btn-blue">37</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-38">
				<div class="cols cols-33"><div class="btn btn-green">38</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-39">
				<div class="cols cols-33"><div class="btn btn-green">39</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-40">
				<div class="cols cols-33"><div class="btn btn-red">40</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>尾大</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>尾小</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>绿波</span></div>
				<div class="cols cols-33"><span class="font-red">3.7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
		</ul>



		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-41">
				<div class="cols cols-33"><div class="btn btn-blue">41</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-42">
				<div class="cols cols-33"><div class="btn btn-blue">42</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-43">
				<div class="cols cols-33"><div class="btn btn-green">43</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-44">
				<div class="cols cols-33"><div class="btn btn-green">44</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-45">
				<div class="cols cols-33"><div class="btn btn-red">45</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-46">
				<div class="cols cols-33"><div class="btn btn-red">46</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-47">
				<div class="cols cols-33"><div class="btn btn-blue">47</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-48">
				<div class="cols cols-33"><div class="btn btn-blue">48</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-49">
				<div class="cols cols-33"><div class="btn btn-green">49</div></div>
				<div class="cols cols-33"><span class="font-red">43</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>家禽</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"><span>野兽</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
		</ul>
		`;
	}else if(model=="zhengmaA"){
		main_lists_html=`
		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-1">
				<div class="cols cols-33"><div class="btn btn-red">1</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-2">
				<div class="cols cols-33"><div class="btn btn-red">2</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-3">
				<div class="cols cols-33"><div class="btn btn-blue">3</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-4">
				<div class="cols cols-33"><div class="btn btn-blue">4</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-5">
				<div class="cols cols-33"><div class="btn btn-green">5</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-6">
				<div class="cols cols-33"><div class="btn btn-green">6</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-7">
				<div class="cols cols-33"><div class="btn btn-red">7</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-8">
				<div class="cols cols-33"><div class="btn btn-red">8</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-9">
				<div class="cols cols-33"><div class="btn btn-blue">9</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-10">
				<div class="cols cols-33"><div class="btn btn-blue">10</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>总大</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>


		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-11">
				<div class="cols cols-33"><div class="btn btn-green">11</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-12">
				<div class="cols cols-33"><div class="btn btn-red">12</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-13">
				<div class="cols cols-33"><div class="btn btn-red">13</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-14">
				<div class="cols cols-33"><div class="btn btn-blue">14</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-15">
				<div class="cols cols-33"><div class="btn btn-blue">15</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-16">
				<div class="cols cols-33"><div class="btn btn-green">16</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-17">
				<div class="cols cols-33"><div class="btn btn-green">17</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-18">
				<div class="cols cols-33"><div class="btn btn-red">18</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-19">
				<div class="cols cols-33"><div class="btn btn-red">19</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-20">
				<div class="cols cols-33"><div class="btn btn-blue">20</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>总小</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-21">
				<div class="cols cols-33"><div class="btn btn-green">21</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-22">
				<div class="cols cols-33"><div class="btn btn-green">22</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-23">
				<div class="cols cols-33"><div class="btn btn-red">23</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-24">
				<div class="cols cols-33"><div class="btn btn-red">24</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-25">
				<div class="cols cols-33"><div class="btn btn-blue">25</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-26">
				<div class="cols cols-33"><div class="btn btn-blue">26</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-27">
				<div class="cols cols-33"><div class="btn btn-green">27</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-28">
				<div class="cols cols-33"><div class="btn btn-green">28</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-29">
				<div class="cols cols-33"><div class="btn btn-red">29</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-30">
				<div class="cols cols-33"><div class="btn btn-red">30</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>总单</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-31">
				<div class="cols cols-33"><div class="btn btn-blue">31</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-32">
				<div class="cols cols-33"><div class="btn btn-green">32</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-33">
				<div class="cols cols-33"><div class="btn btn-green">33</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-34">
				<div class="cols cols-33"><div class="btn btn-red">34</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-35">
				<div class="cols cols-33"><div class="btn btn-red">35</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-36">
				<div class="cols cols-33"><div class="btn btn-blue">36</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-37">
				<div class="cols cols-33"><div class="btn btn-blue">37</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-38">
				<div class="cols cols-33"><div class="btn btn-green">38</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-39">
				<div class="cols cols-33"><div class="btn btn-green">39</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-40">
				<div class="cols cols-33"><div class="btn btn-red">40</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>总双</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>



		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-41">
				<div class="cols cols-33"><div class="btn btn-blue">41</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-42">
				<div class="cols cols-33"><div class="btn btn-blue">42</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-43">
				<div class="cols cols-33"><div class="btn btn-green">43</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-44">
				<div class="cols cols-33"><div class="btn btn-green">44</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-45">
				<div class="cols cols-33"><div class="btn btn-red">45</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-46">
				<div class="cols cols-33"><div class="btn btn-red">46</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-47">
				<div class="cols cols-33"><div class="btn btn-blue">47</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-48">
				<div class="cols cols-33"><div class="btn btn-blue">48</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-49">
				<div class="cols cols-33"><div class="btn btn-green">49</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>

		</ul>
		`;
	}else if(model=="zhengmate"){
		main_lists_html=`
		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-1">
				<div class="cols cols-33"><div class="btn btn-red">1</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-2">
				<div class="cols cols-33"><div class="btn btn-red">2</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-3">
				<div class="cols cols-33"><div class="btn btn-blue">3</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-4">
				<div class="cols cols-33"><div class="btn btn-blue">4</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-5">
				<div class="cols cols-33"><div class="btn btn-green">5</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-6">
				<div class="cols cols-33"><div class="btn btn-green">6</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-7">
				<div class="cols cols-33"><div class="btn btn-red">7</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-8">
				<div class="cols cols-33"><div class="btn btn-red">8</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-9">
				<div class="cols cols-33"><div class="btn btn-blue">9</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-10">
				<div class="cols cols-33"><div class="btn btn-blue">10</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>单</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>双</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>


		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-11">
				<div class="cols cols-33"><div class="btn btn-green">11</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-12">
				<div class="cols cols-33"><div class="btn btn-red">12</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-13">
				<div class="cols cols-33"><div class="btn btn-red">13</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-14">
				<div class="cols cols-33"><div class="btn btn-blue">14</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-15">
				<div class="cols cols-33"><div class="btn btn-blue">15</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-16">
				<div class="cols cols-33"><div class="btn btn-green">16</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-17">
				<div class="cols cols-33"><div class="btn btn-green">17</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-18">
				<div class="cols cols-33"><div class="btn btn-red">18</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-19">
				<div class="cols cols-33"><div class="btn btn-red">19</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-20">
				<div class="cols cols-33"><div class="btn btn-blue">20</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>大</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>小</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-21">
				<div class="cols cols-33"><div class="btn btn-green">21</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-22">
				<div class="cols cols-33"><div class="btn btn-green">22</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-23">
				<div class="cols cols-33"><div class="btn btn-red">23</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-24">
				<div class="cols cols-33"><div class="btn btn-red">24</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-25">
				<div class="cols cols-33"><div class="btn btn-blue">25</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-26">
				<div class="cols cols-33"><div class="btn btn-blue">26</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-27">
				<div class="cols cols-33"><div class="btn btn-green">27</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-28">
				<div class="cols cols-33"><div class="btn btn-green">28</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-29">
				<div class="cols cols-33"><div class="btn btn-red">29</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-30">
				<div class="cols cols-33"><div class="btn btn-red">30</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>合单</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>合双</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>




		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-31">
				<div class="cols cols-33"><div class="btn btn-blue">31</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-32">
				<div class="cols cols-33"><div class="btn btn-green">32</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-33">
				<div class="cols cols-33"><div class="btn btn-green">33</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-34">
				<div class="cols cols-33"><div class="btn btn-red">34</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-35">
				<div class="cols cols-33"><div class="btn btn-red">35</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-36">
				<div class="cols cols-33"><div class="btn btn-blue">36</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-37">
				<div class="cols cols-33"><div class="btn btn-blue">37</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-38">
				<div class="cols cols-33"><div class="btn btn-green">38</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-39">
				<div class="cols cols-33"><div class="btn btn-green">39</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-40">
				<div class="cols cols-33"><div class="btn btn-red">40</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>红波</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>绿波</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>

		</ul>



		<ul class="lists-liuhecai cols cols-20">
			<li class="cols-child cols-title odd">
				<div class="cols cols-33"><span>号码</span></div>
				<div class="cols cols-33"><span>赔率</span></div>
				<div class="cols cols-34"><span>金额</span></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-41">
				<div class="cols cols-33"><div class="btn btn-blue">41</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-42">
				<div class="cols cols-33"><div class="btn btn-blue">42</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-43">
				<div class="cols cols-33"><div class="btn btn-green">43</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-green cols-mun-44">
				<div class="cols cols-33"><div class="btn btn-green">44</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-red cols-mun-45">
				<div class="cols cols-33"><div class="btn btn-red">45</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-red cols-mun-46">
				<div class="cols cols-33"><div class="btn btn-red">46</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-blue cols-mun-47">
				<div class="cols cols-33"><div class="btn btn-blue">47</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd cols-child-blue cols-mun-48">
				<div class="cols cols-33"><div class="btn btn-blue">48</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child cols-child-green cols-mun-49">
				<div class="cols cols-33"><div class="btn btn-green">49</div></div>
				<div class="cols cols-33"><span class="font-red">7</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child odd">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"><span>蓝波</span></div>
				<div class="cols cols-33"><span class="font-red">1.96</span></div>
				<div class="cols cols-34"><input type="text" class="inputText" /></div>
			</li>
			<li class="cols-child">
				<div class="cols cols-33"></div>
				<div class="cols cols-33"></div>
				<div class="cols cols-34"></div>
			</li>

		</ul>
		`;

	}else if(model=="zhengma1-6"){
			main_lists_html=`
			<ul class="lists-liuhecai cols cols-10">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>...</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols"><span>类型</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>大</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>小</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>红波</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>蓝波</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>绿波</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>合大</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>合小</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>合单</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>合双</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>尾大</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>尾小</span></div>
				</li>

			</ul>


			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码一</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码二</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码三</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>


			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码四</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码五</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>


			<ul class="lists-liuhecai cols cols-15">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>正码六</span></div>
				</li>
				<li class="cols-child cols-title odd">
					<div class="cols cols-50"><span>赔率</span></div>
					<div class="cols cols-50"><span>金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-50"><span class="font-red">1.96</span></div>
					<div class="cols cols-50"><input type="text" class="inputText" /></div>
				</li>

			</ul>
			`
		}else if(model=="lianma"){
			main_lists_html=`
			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child cols-title odd">
					<div class="cols cols-33"><span>号码</span></div>
					<div class="cols cols-33"><span>赔率</span></div>
					<div class="cols cols-34"><span>金额</span></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-1">
					<div class="cols cols-33"><div class="btn btn-red">1</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-2">
					<div class="cols cols-33"><div class="btn btn-red">2</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-3">
					<div class="cols cols-33"><div class="btn btn-blue">3</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-4">
					<div class="cols cols-33"><div class="btn btn-blue">4</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-5">
					<div class="cols cols-33"><div class="btn btn-green">5</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-6">
					<div class="cols cols-33"><div class="btn btn-green">6</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-7">
					<div class="cols cols-33"><div class="btn btn-red">7</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-8">
					<div class="cols cols-33"><div class="btn btn-red">8</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-9">
					<div class="cols cols-33"><div class="btn btn-blue">9</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-10">
					<div class="cols cols-33"><div class="btn btn-blue">10</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>单</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>双</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>大单</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>小单</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
			</ul>


			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child cols-title odd">
					<div class="cols cols-33"><span>号码</span></div>
					<div class="cols cols-33"><span>赔率</span></div>
					<div class="cols cols-34"><span>金额</span></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-11">
					<div class="cols cols-33"><div class="btn btn-green">11</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-12">
					<div class="cols cols-33"><div class="btn btn-red">12</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-13">
					<div class="cols cols-33"><div class="btn btn-red">13</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-14">
					<div class="cols cols-33"><div class="btn btn-blue">14</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-15">
					<div class="cols cols-33"><div class="btn btn-blue">15</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-16">
					<div class="cols cols-33"><div class="btn btn-green">16</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-17">
					<div class="cols cols-33"><div class="btn btn-green">17</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-18">
					<div class="cols cols-33"><div class="btn btn-red">18</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-19">
					<div class="cols cols-33"><div class="btn btn-red">19</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-20">
					<div class="cols cols-33"><div class="btn btn-blue">20</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>大</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>小</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>大双</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>小双</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
			</ul>




			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child cols-title odd">
					<div class="cols cols-33"><span>号码</span></div>
					<div class="cols cols-33"><span>赔率</span></div>
					<div class="cols cols-34"><span>金额</span></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-21">
					<div class="cols cols-33"><div class="btn btn-green">21</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-22">
					<div class="cols cols-33"><div class="btn btn-green">22</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-23">
					<div class="cols cols-33"><div class="btn btn-red">23</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-24">
					<div class="cols cols-33"><div class="btn btn-red">24</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-25">
					<div class="cols cols-33"><div class="btn btn-blue">25</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-26">
					<div class="cols cols-33"><div class="btn btn-blue">26</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-27">
					<div class="cols cols-33"><div class="btn btn-green">27</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-28">
					<div class="cols cols-33"><div class="btn btn-green">28</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-29">
					<div class="cols cols-33"><div class="btn btn-red">29</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-30">
					<div class="cols cols-33"><div class="btn btn-red">30</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>合单</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>合双</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>红波</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>蓝波</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
			</ul>




			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child cols-title odd">
					<div class="cols cols-33"><span>号码</span></div>
					<div class="cols cols-33"><span>赔率</span></div>
					<div class="cols cols-34"><span>金额</span></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-31">
					<div class="cols cols-33"><div class="btn btn-blue">31</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-32">
					<div class="cols cols-33"><div class="btn btn-green">32</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-33">
					<div class="cols cols-33"><div class="btn btn-green">33</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-34">
					<div class="cols cols-33"><div class="btn btn-red">34</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-35">
					<div class="cols cols-33"><div class="btn btn-red">35</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-36">
					<div class="cols cols-33"><div class="btn btn-blue">36</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-37">
					<div class="cols cols-33"><div class="btn btn-blue">37</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-38">
					<div class="cols cols-33"><div class="btn btn-green">38</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-39">
					<div class="cols cols-33"><div class="btn btn-green">39</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-40">
					<div class="cols cols-33"><div class="btn btn-red">40</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>尾大</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>尾小</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>绿波</span></div>
					<div class="cols cols-33"><span class="font-red">3.7</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"></div>
					<div class="cols cols-33"></div>
					<div class="cols cols-34"></div>
				</li>
			</ul>



			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child cols-title odd">
					<div class="cols cols-33"><span>号码</span></div>
					<div class="cols cols-33"><span>赔率</span></div>
					<div class="cols cols-34"><span>金额</span></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-41">
					<div class="cols cols-33"><div class="btn btn-blue">41</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-42">
					<div class="cols cols-33"><div class="btn btn-blue">42</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-43">
					<div class="cols cols-33"><div class="btn btn-green">43</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-green cols-mun-44">
					<div class="cols cols-33"><div class="btn btn-green">44</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-red cols-mun-45">
					<div class="cols cols-33"><div class="btn btn-red">45</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-red cols-mun-46">
					<div class="cols cols-33"><div class="btn btn-red">46</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-blue cols-mun-47">
					<div class="cols cols-33"><div class="btn btn-blue">47</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd cols-child-blue cols-mun-48">
					<div class="cols cols-33"><div class="btn btn-blue">48</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child cols-child-green cols-mun-49">
					<div class="cols cols-33"><div class="btn btn-green">49</div></div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"></div>
					<div class="cols cols-33"></div>
					<div class="cols cols-34"></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"><span>家禽</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"><span>野兽</span></div>
					<div class="cols cols-33"><span class="font-red">1.96</span></div>
					<div class="cols cols-34"><input type="checkbox" class="inputCheckbox" /></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-33"></div>
					<div class="cols cols-33"></div>
					<div class="cols cols-34"></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33"></div>
					<div class="cols cols-33"></div>
					<div class="cols cols-34"></div>
				</li>
			</ul>`
		}else if(model=="banbo"){
			main_lists_html=`<ul class="lists-liuhecai cols cols-10">
				<li class="cols-child cols-title odd">
					<div class="cols"><span>号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>红单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>红双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>红大</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>红小</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>绿单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>绿双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>绿大</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>绿小</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>蓝单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>蓝双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>蓝大</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>蓝小</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>红合单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>红和双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>绿合单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>绿和双</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span>蓝合单</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span>蓝合双</span></div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-10">
				<li class="cols-child cols-title odd">
					<div class="cols"><span >赔率</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">4.5</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><span class="font-red">5.3</span></div>
				</li>

			</ul>


			<ul class="lists-liuhecai cols cols-10">
				<li class="cols-child cols-title odd">
					<div class="cols"><span >金额</span></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols"><input type="text" class="inputText" /></div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-70">
				<li class="cols-child cols-title odd">
					<div class="cols"><span >号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">7</div>
						<div class="btn btn-red">13</div>
						<div class="btn btn-red">19</div>
						<div class="btn btn-red">23</div>
						<div class="btn btn-red">29</div>
						<div class="btn btn-red">35</div>
						<div class="btn btn-red">45</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="btn btn-red">2</div>
						<div class="btn btn-red">8</div>
						<div class="btn btn-red">12</div>
						<div class="btn btn-red">18</div>
						<div class="btn btn-red">24</div>
						<div class="btn btn-red">30</div>
						<div class="btn btn-red">34</div>
						<div class="btn btn-red">40</div>
						<div class="btn btn-red">46</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="btn btn-red">29</div>
						<div class="btn btn-red">30</div>
						<div class="btn btn-red">34</div>
						<div class="btn btn-red">35</div>
						<div class="btn btn-red">40</div>
						<div class="btn btn-red">45</div>
						<div class="btn btn-red">46</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">2</div>
						<div class="btn btn-red">7</div>
						<div class="btn btn-red">8</div>
						<div class="btn btn-red">12</div>
						<div class="btn btn-red">13</div>
						<div class="btn btn-red">18</div>
						<div class="btn btn-red">19</div>
						<div class="btn btn-red">23</div>
						<div class="btn btn-red">24</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="btn btn-green">5</div>
						<div class="btn btn-green">11</div>
						<div class="btn btn-green">17</div>
						<div class="btn btn-green">21</div>
						<div class="btn btn-green">27</div>
						<div class="btn btn-green">33</div>
						<div class="btn btn-green">39</div>
						<div class="btn btn-green">43</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="btn btn-green">6</div>
						<div class="btn btn-green">16</div>
						<div class="btn btn-green">22</div>
						<div class="btn btn-green">28</div>
						<div class="btn btn-green">32</div>
						<div class="btn btn-green">38</div>
						<div class="btn btn-green">44</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="btn btn-green">27</div>
						<div class="btn btn-green">28</div>
						<div class="btn btn-green">32</div>
						<div class="btn btn-green">33</div>
						<div class="btn btn-green">38</div>
						<div class="btn btn-green">39</div>
						<div class="btn btn-green">43</div>
						<div class="btn btn-green">44</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="btn btn-green">5</div>
						<div class="btn btn-green">6</div>
						<div class="btn btn-green">11</div>
						<div class="btn btn-green">16</div>
						<div class="btn btn-green">17</div>
						<div class="btn btn-green">21</div>
						<div class="btn btn-green">22</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="btn btn-blue">3</div>
						<div class="btn btn-blue">9</div>
						<div class="btn btn-blue">15</div>
						<div class="btn btn-blue">25</div>
						<div class="btn btn-blue">31</div>
						<div class="btn btn-blue">37</div>
						<div class="btn btn-blue">41</div>
						<div class="btn btn-blue">47</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
						<div class="btn btn-blue">47</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols">
						<div class="cols">
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
							<div class="btn btn-blue">47</div>
						</div>
					</div>
				</li>

			</ul>`;
		}else if(model=="yixiao"){
			main_lists_html=`<ul class="lists-liuhecai cols cols-50">
				<li class="cols-child cols-title odd">
					<div class="cols cols-15"><span>号码</span></div>
					<div class="cols cols-15"><span>赔率</span></div>
					<div class="cols cols-15"><span>金额</span></div>
					<div class="cols cols-55"><span>号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-50">
				<li class="cols-child cols-title odd">
					<div class="cols cols-15"><span>号码</span></div>
					<div class="cols cols-15"><span>赔率</span></div>
					<div class="cols cols-15"><span>金额</span></div>
					<div class="cols cols-55"><span>号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>

			</ul>


			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
			</ul>
			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
			</ul>
			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
			</ul>
			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
			</ul>
			<ul class="lists-liuhecai cols cols-20">
				<li class="cols-child">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-33">0尾</div>
					<div class="cols cols-33"><span class="font-red">43</span></div>
					<div class="cols cols-34"><input type="text" class="inputText" /></div>
				</li>
			</ul>`;
		}else if(model=="shengxiao"){
			main_lists_html=`<ul class="lists-liuhecai cols cols-50">
				<li class="cols-child cols-title odd">
					<div class="cols cols-15"><span>号码</span></div>
					<div class="cols cols-15"><span>赔率</span></div>
					<div class="cols cols-15"><span>金额</span></div>
					<div class="cols cols-55"><span>号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>

			</ul>

			<ul class="lists-liuhecai cols cols-50">
				<li class="cols-child cols-title odd">
					<div class="cols cols-15"><span>号码</span></div>
					<div class="cols cols-15"><span>赔率</span></div>
					<div class="cols cols-15"><span>金额</span></div>
					<div class="cols cols-55"><span>号码</span></div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>
				<li class="cols-child odd">
					<div class="cols cols-15">鼠</div>
					<div class="cols cols-15"><span class="font-red">43</span></div>
					<div class="cols cols-15"><input type="text" class="inputText" /></div>
					<div class="cols cols-55">
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
						<div class="btn btn-red">1</div>
					</div>
				</li>

			</ul>`;
		}

	$(".main .lists").html(main_lists_html);
	$(".main .main-content .main-title .title").html($(e).html());

}