var clientX = 0;
var clientY = 0;
var divx = 100;
var divy = 0;
var isdown = false;
var isfull = false;

var nowid = "";
var movingid = ""

var activeapp = [];
var activeBorder = undefined;
var closeSet = new Set();

function test(s) {
	obj = document.getElementById("title_https://jspaint.app_app");
	alert(obj.style.top);
}

function changesize(id, new_height, new_width) {
	obj = document.getElementById("title_" + id + "_app");
	obj.style.height = new_height + "px";
	obj.style.width = new_width + "px";
	obj = document.getElementById("title_" + id);
	obj.style.width = new_width + "px";
	obj.dataset.lh = String(new_height) + "px";
	obj.dataset.lw = String(new_width) + "px";
	obj = document.getElementById("fram_" + id);
	obj.style.height = new_height - 32 + "px";
	obj.style.width = new_width + "px";
	obj = document.getElementById(id);
	obj.style.height = new_height - 32 + "px";
	obj.style.width = new_width + "px";
	obj.style.top = "31.4px";
	obj.style.left = "0px";
}

function addwindow(id) {
	var winfram = document.getElementById(id + "_app");
	winfram.style.display = "block";
	nowid = id;
	activeapp.push(id);
};

function addwin(url, title) {
	if (closeSet.delete("title_" + url)) {
		addwindow("title_" + url);
		var win = document.getElementById("fram_" + url);
		win.src = win.src;
		return 0;
	}
	root = document.getElementById("root");
	let item = document.createElement("div");
	item.id = "title_" + url + "_app";
	item.style.position = "absolute";
	item.style.width = "700px";
	item.style.height = "469px";
	item.style.display = "none";
	item.style.zIndex = "auto";


	let i2 = document.createElement("div");
	i2.id = "title_" + url;
	i2.style.width = "700px";
	i2.style.borderTopLeftRadius = "5px";
	i2.style.borderTopRightRadius = "5px";
	i2.style.display = "block";
	i2.style.top = "0px";
	i2.style.left = "0px";
	i2.style.backgroundColor = "rgba(225,225,225,0.5)"
	i2.classList = "centre";
	i2.dataset.lh = "437px";
	i2.dataset.lw = "700px";

	let i22 = document.createElement("font");
	i22.size = "5";
	i22.classList = "secc";
	i22.innerHTML = title;

	i2.appendChild(i22);


	let i3 = document.createElement("div");
	i3.id = url;
	i3.style.top = "31.4px";
	i3.style.left = "0px";
	i3.style.height = "437px";
	i3.style.width = "700px";
	i3.style.position = "float";
	i3.style.borderRadius = "0px";
	i3.style.backgroundColor = "rgba(225, 225, 225, 0.8)";
	i3.style.display = "block";

	let ifr = document.createElement("iframe");
	ifr.id = "fram_" + url;
	ifr.style.border = "0";
	ifr.style.height = "437px";
	ifr.style.width = "700px";
	ifr.style.borderBottomLeftRadius = "3px";
	ifr.style.borderBottomRightRadius = "3px";
	ifr.src = url;

	i3.appendChild(ifr);


	let bd1 = document.createElement("div");
	bd1.style.minHeight = bd1.style.maxHeight = "7px";
	bd1.style.minWidth = bd1.style.maxWidth = "100%";
	bd1.style.backgroundColor = "rgba(0,0,0,0)";
	bd1.style.bottom = "-7px";
	bd1.style.cursor = "s-resize";
	document.addEventListener("mousedown", function(event) {
		activeBorder = 1;
		activeBorder_divx = event.clientX;
		activeBorder_divy = event.clientY;
		activeBorderEvent = event;
	})
	document.addEventListener("mouseup", function() {
		activeBorder = 0;
	})
	document.addEventListener("mousemove", function(event) {
		if (activeBorder) {
			var id = activeBorderEvent.path[0].id.substring(4, activeBorderEvent.path[0].id.length)
			var idt = Number(activeBorderEvent.path[0].id.substring(2, 3));
			// console.log(idt)
			nowh = document.getElementById("title_" + id + "_app").style.height.trim();
			nowh = Number(nowh.substring(0, nowh.length - 2));
			noww = document.getElementById("title_" + id + "_app").style.width.trim();
			noww = Number(noww.substring(0, noww.length - 2));
			switch (idt) {
				case 1:
					changesize(id, nowh + event.clientY - activeBorder_divy, noww)
					activeBorder_divy = event.clientY;
					break;
				case 2:
					changesize(id, nowh, noww + event.clientX - activeBorder_divx)
					activeBorder_divx = event.clientX;
					break;
				case 3:
					changesize(id, nowh + event.clientY - activeBorder_divy, noww + event.clientX -
						activeBorder_divx)
					activeBorder_divx = event.clientX;
					activeBorder_divy = event.clientY;
					break;
			}
		}
	})
	let bd2 = document.createElement("div");
	bd2.style.minHeight = bd2.style.maxHeight = "100%";
	bd2.style.minWidth = bd2.style.maxWidth = "7px";
	bd2.style.backgroundColor = "rgba(0,0,0,0)";
	bd2.style.right = "-7px";
	bd2.style.top = "0px";
	bd2.style.position = "absolute";
	bd2.style.cursor = "w-resize";
	let bd3 = document.createElement("div");
	bd3.style.minHeight = bd3.style.maxHeight = "7px";
	bd3.style.minWidth = bd3.style.maxWidth = "7px";
	bd3.style.backgroundColor = "rgba(0,0,0,0)";
	bd3.style.right = "-7px";
	bd3.style.bottom = "-7px";
	bd3.style.position = "absolute";
	bd3.style.cursor = "nw-resize";

	bd1.id = "bd1_" + url;
	bd2.id = "bd2_" + url;
	bd3.id = "bd3_" + url;


	item.appendChild(i2);
	item.appendChild(i3);
	item.appendChild(bd1);
	item.appendChild(bd2);
	item.appendChild(bd3);
	root.appendChild(item);
	addwindow("title_" + url);
}

function closewin(id) {
	if (!id) {
		// console.log("none")
		return 0;
	}
	$(document.getElementById(id + "_app")).remove();
	activeapp.splice(activeapp.indexOf(id), 1);
	nowid = activeapp[activeapp.length - 1];
}

function mousemove(event) {
	event.preventDefault();
	clientX = event.clientX;
	clientY = event.clientY;
}

function checkIn(obj) {
	var x = Number(window.event.clientX) // 鼠标相对屏幕横坐标
	var y = Number(window.event.clientY) // 鼠标相对屏幕纵坐标

	var div_x = Number(obj.getBoundingClientRect().left) // obj相对屏幕的横坐标
	var div_x_width = Number(obj.getBoundingClientRect().left + obj.clientWidth) // obj相对屏幕的横坐标+width

	var div_y = Number(obj.getBoundingClientRect().top) // obj相对屏幕的纵坐标
	var div_y_height = Number(obj.getBoundingClientRect().top + obj.clientHeight) // obj相对屏幕的纵坐标+height
	if (x > div_x && x < div_x_width && y > div_y && y < div_y_height) {
		return true
	} else {
		return false
	}
}

function divxy(obj) {
	var x = Number(window.event.clientX) // 鼠标相对屏幕横坐标
	var y = Number(window.event.clientY) // 鼠标相对屏幕纵坐标

	var div_x = Number(obj.getBoundingClientRect().left) // obj相对屏幕的横坐标
	divx = x - div_x;

	var div_y = Number(obj.getBoundingClientRect().top) // obj相对屏幕的纵坐标
	divy = y - div_y;
}

function where(bl) {
	target_id = false;
	for (var i = 0; i < activeapp.length; i++) {
		var id_i = activeapp[i];
		obj = document.getElementById(id_i);
		if (checkIn(obj)) {
			target_id = id_i;
		}
	}
	if (target_id && bl) {
		nowid = target_id;
	}
	return target_id;
}

function mousedown(event) {
	// console.log(1)
	if (movingid) {
		if (isdown) {
			gotomouse(nowid);
		}
	}
	mousemove(event);
}

document.addEventListener("mousedown", function(event) {
	isdown = true;
	document.getElementById(nowid + "_app").style.zIndex = "auto";
	var whe = where(1);
	document.getElementById(nowid + "_app").style.zIndex = 1000;
	if (document.getElementById(whe + "_app").style.top == "0px") {
		ufullscreen(whe);
	}
	movingid = whe;
	divxy(document.getElementById(movingid));
});
document.addEventListener("mouseup", function(event) {
	if (isdown) {
		obj = document.getElementById(movingid + "_app");
		if (Number(obj.style.top.slice(0, -2)) >= window.innerHeight - 20) {
			closewin(movingid);
			obj.style.top = "10px";
			obj.style.left = "10px";
		} else if (Number(obj.style.top.slice(0, -2)) < 0) {
			fullscreen(movingid);
			obj.style.top = "10px";
			obj.style.left = "10px";
		}
	}
	isdown = false;
	movingid = "";
	divx = 0;
	divy = 0;
});
document.addEventListener("mousemove", function(event) {
	mousedown(event);
})

function gotomouse(id) {
	var winfram = document.getElementById(id + "_app");
	winfram.style.display = "block";
	//获取鼠标视口位置
	winfram.style.top = clientY - divy + "px";
	winfram.style.left = clientX - divx + "px";
}

function fullscreen(id) {
	var lasterh = document.getElementById(id + "_app").style.height;
	var lasterw = document.getElementById(id + "_app").style.width;
	// console.log(lasterh, lasterw);
	changesize(id.slice(6, id.length), window.innerHeight, window.innerWidth);
	var obj = document.getElementById(id + "_app");
	obj.style.top = "0px";
	obj.style.left = "0px";
	obj = document.getElementById(id);
	// console.log(lasterh, lasterw);
	obj.dataset.lh = lasterh;
	obj.dataset.lw = lasterw;
	// console.log(obj.dataset.lh, obj.dataset.lw);
}

function ufullscreen(id) {
	var obj = document.getElementById(id);
	// console.log(obj.dataset.lh.slice(0, -2))
	changesize(id.slice(6, id.length), obj.dataset.lh.slice(0, -2), obj.dataset.lw.slice(0, -2));
}
