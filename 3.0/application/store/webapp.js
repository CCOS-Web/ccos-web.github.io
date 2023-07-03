var webapp=[
 // ["name", "url", "icon", "web url"],
	["Chat", "application/etc/code/chat.html", "../etc/icon/chat.png"],
	["Paint", "https://jspaint.app", "https://jspaint.app/favicon.ico"],
	["WereWolf", "application/etc/code/wwk.html", "../../img/wwk.png"],
	["Power Sheet", "https://hgaka.github.io/sheet", "https://static-801c4008-56be-4eb8-8499-377f12d55817.bspapp.com/PowerSTD/PowerSheet/favicon.png"],
]

webapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
