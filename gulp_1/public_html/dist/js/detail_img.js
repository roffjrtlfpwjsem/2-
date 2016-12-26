function init(){
	var arrImg = document.querySelectorAll(".img_wrap li a");
	var detailBg = document.querySelector(".detail_img_wrap .detail_img_bg");
	var detailWrap = document.querySelector(".detail_img_wrap");
	var arrDetail = document.querySelectorAll(".detail_img_wrap .detail_img div");
	for (var i = 0; i < arrImg.length; i++){
		(function (){
			var k = i;
			addEvent(arrImg[i],"click",function(){
				var menuNum = k;
				//console.log(menuNum);
				for (var i = 0; i < arrDetail.length; i++){
					if (i == menuNum){
						detailWrap.style.display = "block";
						arrDetail[i].style.display = "block";
					}
				}
			});
		}());
	}
	addEvent(detailBg,"click",function(){
		if (detailWrap.style.display == "block"){
			detailWrap.style.display = "none";
			for (var i = 0; i < arrDetail.length; i++){
				arrDetail[i].style.display = "none";
			}
		}
	});
}

addEvent(window,"load",init);
