var webapp=[
 // ["name", "url", "icon", "web url"],
	["Chat", "application/etc/code/chat.html", "../etc/icon/chat.png", "https://static-7f9768c6-c545-4f94-bd4a-cd62cb0086e3.bspapp.com/application/etc/code/chat.html"],
	["Paint", "https://jspaint.app", "https://jspaint.app/favicon.ico"],
	["WereWolf Kill", "application/etc/code/wwk.html", "../../img/wwk.png"]
]

webapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
