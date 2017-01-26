var init = function(){
	var pageBtn = document.querySelectorAll("#idx_section_1 .frame .sliderBannerPage button");
	var mallBtn = document.querySelectorAll(".mallBtn button");
	var activePaging = 0;
	var sUl = document.querySelector("#idx_section_1 .frame ul.visual_wrapPc");
	var mallUl = document.querySelector(".frame_mall .mall_wrap_in");
	//var storeFi = document.querySelecor(".open_store_imgWrap figure")
	var imgWidth = 1200;
	var showNum = 0;
	var visualBackground = document.querySelector("#idx_section_1");
	var maxNum = pageBtn.length-1;
	var autoSlide = null;
	var storeBtn = document.querySelectorAll(".storeBtn_idx button");
	var maxNumSt = storeBtn.length-1;
	var storeUl = document.querySelector(".open_store ul");
	var storeFrame = document.querySelector(".open_store .storeFrame");
	var storeWidth = 239;
	var activePagingStore = 0;
	var showNumSt = 0;
	var maxNumMa = mallBtn.length-1;
	var activePagingNm = 0;
	var activePagingMa = 0;
	// var nmenuUl = document.querySelector(".newMenu_wrap ul");
	var mallWidth = 552;
	var showNumMa = 0;

	/*이미지슬라이드 스크립트*/
	var playRolling = function(wrap,action_a,action_b,num){
		addEvent(wrap, "mouseenter",function(){ 
			clearInterval(action_a);
		})
		addEvent(wrap, "mouseleave",function(){
			action_a = setInterval(action_b,num)
		})
	}
	var autoClick = function(a){
		showNum++;
		if(showNum > maxNum){showNum = 0;}
		playSildeBanner(showNum);
		chPaging(showNum);
		chBackground(showNum);
	}
	var autoClickStore = function(){
		showNumSt++;
		if(showNumSt > maxNumSt){showNumSt = 0;}
		playSildeStore(showNumSt);
		chStore(showNumSt);
	}
	// var autoClickMall = function(){
	// 	showNumMa++;
	// 	if(showNumMa > maxNumMa){showNumMa = 0;}
	// 	playSildeMall(showNumMa);
	// 	chMall(showNumMa);
	// }
	autoSlide = setInterval(autoClick,3000);
	playRolling(visualBackground,autoSlide,autoClick,3000);
	autoSlidest = setInterval(autoClickStore,2000);
	playRolling(storeFrame,autoSlidest,autoClickStore,2000);
	// autoSlideMa = setInterval(autoClickMall,3000);
	// playRolling(mallUl,autoSlideMa,autoClickMall,3000);
	function chBackground(num){
		var a = num+1;
		visualBackground.style.backgroundImage = "url(images/main/bg_visual_"+a+".png)";
	}
	function playSildeBanner(num){
		    sUl.style.marginLeft = -num * imgWidth +"px";
		}
	function playSildeStore(num){
	    storeUl.style.marginLeft = -num * storeWidth +"px";
	}
	// function playSildeMall(num){
	//     mallUl.style.marginLeft = -num * mallWidth +"px";
	// }
	var chPaging = function(num){
			pageBtn[activePaging].setAttribute("class","");
			pageBtn[num].setAttribute("class","on");
			activePaging = num;
		}
	var chStore = function(num){
			storeBtn[activePagingStore].setAttribute("class","");
			storeBtn[num].setAttribute("class","on");
			activePagingStore = num;
		}
	// var chMall = function(num){
	// 		mallBtn[activePagingMa].setAttribute("class","");
	// 		mallBtn[num].setAttribute("class","on");
	// 		activePagingMa = num;
	// 	}	
	for(var i=0;i<pageBtn.length;i++){ //비쥬얼버튼
			(function(){
				var k = i;
				addEvent(pageBtn[i],"click",function(){
					chPaging(k);
					playSildeBanner(k);
					chBackground(k);
					showNum = k;
				});
			}());
		}
	for(var i=0;i<storeBtn.length;i++){
			(function(){
				var k = i;
				addEvent(storeBtn[i],"click",function(){
					chStore(k);
					playSildeStore(k);
					showNumSt = k;
				});
			}());
		}
	// for(var i=0;i<mallBtn.length;i++){
	// 	(function(){
	// 		var k = i;
	// 		addEvent(mallBtn[i],"click",function(){
	// 			chMall(k);
	// 			playSildeMall(k);
	// 			showNumMa = k;
	// 		});
	// 	}());
	// }
	/*//이미지슬라이드 스크립트*/
	}
	addEvent(window,"load",init)