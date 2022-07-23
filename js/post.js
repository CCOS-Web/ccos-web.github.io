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
	client.get(`${localStorage.getItem("serverIp")}/main.php?o=c`, function(response) {
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
