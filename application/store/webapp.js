var webapp=[
	["name", "url", "icon", "web url"],
	["Chat", "application/etc/code/chat.html", "../etc/icon/chat.png"],
]

webapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
