$(function(){
			$(".mb_subTitle").on("click",function(e){
			var myReply = $(this).next();
			if(myReply.is(":hidden")){
					$(".mb_subTitle.on").removeClass("on");
					$(this).addClass("on");
					$(".mb_subTitle").next(":visible").slideUp("fast");
					myReply.slideDown('fast');
			}else{
				$(".mb_subTitle").next(":visible").slideUp("fast");
				$(".mb_subTitle.on").removeClass("on");
			}
		});
})