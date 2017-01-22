CanvasRenderingContext2D.prototype.sector = function(x, y, radius, sDeg, eDeg) {
	sDeg=sDeg-90;
	eDeg=eDeg-90;
	sDeg=Math.PI / 180 *sDeg;
	eDeg=Math.PI / 180 *eDeg;
	this.fillStyle="#ffb423";
	this.save();
	this.translate(x, y);
	this.beginPath();
	this.arc(0, 0, radius, sDeg, eDeg);
	this.save();
	this.rotate( eDeg);
	this.moveTo(radius, 0);
	this.lineTo(0, 0);
	this.restore();
	this.rotate( sDeg);
	this.lineTo(radius, 0);
	this.closePath();
	this.restore();
	return this;
}

var can = document.getElementById('fraction-canvas').getContext("2d");
function setQUAN(mun){
	var aa=mun*360;bb=0;
	var interval=setInterval(function(){
		if(bb>=aa){bb=aa;clearInterval(interval);}
		can.sector(90, 90, 90, 0, bb).fill();
		bb+=2;
	},20);
	
}

$(".money-toggle").click(function(){
	var val=$(".money-value").html();
	if(val=="****"){
		$(".money-value").html($(".money-value").attr('value'));
	}else{
		$(".money-value").html("****");
	}
});
$(".line-reflush").click(function(){
	$(".money-value").html("刷新中...");
	setTimeout(function(){
		$(".money-value").html($(".money-value").attr('value'));
	},2000);
});