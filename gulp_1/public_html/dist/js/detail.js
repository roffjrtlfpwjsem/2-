function init(){
	var arrPrd = document.querySelectorAll(".coffee_wrap li a");
	var detailBg = document.querySelector(".detail_menu_wrap .detail_menu_bg");
	var detailWrap = document.querySelector(".detail_menu_wrap");
	var arrDetail = document.querySelectorAll(".detail_menu_wrap .detail_menu div");
	for (var i = 0; i < arrPrd.length; i++){
		(function (){
			var k = i;
			addEvent(arrPrd[i],"click",function(){
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
