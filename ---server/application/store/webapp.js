var webapp=[
	["name", "url", "icon", "web url"],
	["Chat", "application/etc/code/chat.html", "../etc/icon/chat.png"],
	["CucumberCan", "application/etc/code/ccan.html", "", "https://cucumbercan.github.io/index.html"],
]

webapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
