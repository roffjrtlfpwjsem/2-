$(function(){
			$(".mb_subTitle").on("click",function(e){
			var myReply = $(this).next();
			if(myReply.is(":hidden")){
					$(".mb_subTitle.on").removeClass("on");
					$(this).addClass("on");
					$(".mb_subTitle").next("ul:visible").slideUp("fast");
					myReply.slideDown('fast');
			}else{
				$(".mb_subTitle").next("ul:visible").slideUp("fast");
				$(".mb_subTitle.on").removeClass("on");
			}
		});
			$(".menu_mb").on("click",function(){
				if($(".subMenu_wrap_mb").is(":visible")){
					$(".subMenu_wrap_mb").slideUp("fast");
				}else{
					$(".subMenu_wrap_mb").slideDown("fast");
				}
				
			})
})