function addEvent(obj,eventName,eventHanddler) {
  var arrEvntN = eventName.split(" ");
  for (var i = 0; i < arrEvntN.length; i++) {
    if (document.addEventListener) {
      obj.addEventListener(arrEvntN[i],eventHanddler);
    }else {
      obj.attachEvent("on"+arrEvntN[i],eventHanddler);
    }
  }
}
