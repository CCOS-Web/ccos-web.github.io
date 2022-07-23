var webapp=[
	["name", "url", "icon"],
	["Chat", "url", "../etc/icon/chat.png"],
	["bbbb", "url", "icon"],
	["aaaa", "url", "icon"],
]

webapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
