function sgInit(){
		var header_wrap = document.querySelector("#wrap #header_wrap");
		var subMenu_wrap = document.querySelector("#wrap #header_wrap .subMenu_wrap");
		function displaySgnb(){
			subMenu_wrap.style.top = 100+"px";
		}
		function resetSgnb(){
			subMenu_wrap.style.top = -1000+"px";
		}
	 	addEvent(header_wrap,"mouseover focus",displaySgnb);
	 	addEvent(header_wrap,"mouseout blur",resetSgnb);
}
addEvent(window,"load",sgInit);