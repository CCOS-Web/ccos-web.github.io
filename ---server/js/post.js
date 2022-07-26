var HttpClient = function() {
	this.get = function(aUrl, aCallback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function() {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
				aCallback(anHttpRequest.responseText);
		}

		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	}
}

function serverPost(url, func) {
	var client = new HttpClient();
	client.get(url, function(response) {
		// do something with response
		func(response);
	});
}

async function serverCheck() {
	var client = new HttpClient();
	var rt = null;
	client.get(`/main.php?o=c`, function(response) {
		rt = (response == "response:OK.");
	});
	function wait(){
		return new Promise(resolve => {
			setTimeout(() => {
			  resolve(rt);
			}, 1000);
		});
	}
	return await wait();
}

function jsonp(url, func){
	$(`<script src='${url}&re=${func}'>`).appendTo($("body"));
}

function serverWrite(name, msg, func){
	var client = new HttpClient();
	client.get(`/main.php?o=w&n=${encodeURI(name)}&m=${encodeURI(msg)}`, function(response) {
		console.log("Write successfully");
		if(func)
			func(response);
	});	
}

function serverRead(name, func){
	var client = new HttpClient();
	client.get(`/main.php?o=r&n=${encodeURI(name)}`, function(response) {
		func(decodeURI(response));
	});	
}

function serverClear(name, func){
	var client = new HttpClient();
	client.get(`/main.php?o=d&n=${encodeURI(name)}`, function(response) {
		if(func)
			func(true);
	});	
}

function getPHP(name, func){
	var client = new HttpClient();
	client.get(name, function(response) {
		func(response);
	});	
}

function serverDownload(url, name){
	serverPost(`/download.php?n=${name}&u=${url}`, function(){
		console.log(`Download ${name}, successfully.`);
	});
}
