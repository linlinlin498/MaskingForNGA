function _init() {
	var keys = localStorage.getItem("_key");
	var span1 = document.getElementById('sub_forums_c');
	var span2 = document.createElement('span');
	span2.style.cssText = "text-align:left;";
	span2.innerHTML = "<label>屏蔽关键字:</label><input id='_key' type='text' style='width:300px;' value='" + keys + "' /><button id='_save' onclick='onKeySaved();'>保存</button><label id='_mask' style='margin-left:20px;'><label>";
	span1.parentNode.insertBefore(span2, span1.nextSibling);
	hide(keys);
}
_init();

function onKeySaved(e) {
	var keys = document.getElementById("_key").value;
	localStorage.setItem("_key", keys);
	alert("已保存");
	hide(keys);
}

function hide(keys) {
	var keyArray = keys.split('|');
	var trs = document.getElementsByClassName('topicrow');
	var sum = 0;
	for (var i = trs.length - 1; i >= 0; i--) {
		var title1 = trs[i].innerText;
		var title2 = title1.substring(0, title1.indexOf('•')).replace(' ', '');
		for (var p = 0; p < keyArray.length; p++) {
			if (keyArray[p] != '' && title2.indexOf(keyArray[p]) >= 0) {
				trs[i].style.cssText = "display:none";
				sum ++;
			}
			else {
				trs[i].style.cssText = "";
			}
		}
	}
	document.getElementById('_mask').innerHTML="屏蔽贴数："+sum;
}
