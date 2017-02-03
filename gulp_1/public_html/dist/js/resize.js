(function(){	
	/*사이즈 감지*/
	$(window).on("resize",function(e){
		var w = $(window).width()+17;
		var b = $("body");
		if (w >= 1025){
			b.attr("class","");
			b.addClass("pc");
		}	else if (1025 > w && w >= 641){
			$(".detail_img_wrap, .detail_img div").attr("style","");
			b.attr("class","");
			b.addClass("tablet");
		}	else {
			b.attr("class","");
			b.addClass("mobile");
		}
	});
	
	$(function(){
		$(window).resize();
	});
}());
