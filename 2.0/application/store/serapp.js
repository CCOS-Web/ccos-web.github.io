var serapp=[
	["name", "url.php", "icon"],
	["Hello", "url", "icon"],
	["aaaa", "url", "icon"],
	["bbbb", "url", "icon"],
]

serapp.sort(function(l1,l2){
	return l1[0]<l2[0]?-1:1;
});
