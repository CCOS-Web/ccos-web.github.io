var clientX = 0;
var clientY = 0;
var divx = 100;
var divy = 0;
var isdown = false;
var isfull = false;

var nowid = "";
var movingid=""

var activeapp = [];
var closeSet = new Set();

function test(s){
	obj=document.getElementById("title_https://jspaint.app_app");
	alert(obj.style.top);
}

function changesize(id, new_height, new_width){
		obj=document.getElementById("title_"+id+"_app");
		obj.style.height=new_height+"px";
		obj.style.width=new_width+"px";
		obj=document.getElementById("title_"+id);
		obj.style.width=new_width+"px";
		obj.dataset.lh=String(new_height)+"px";
		obj.dataset.lw=String(new_width)+"px";
		obj=document.getElementById("fram_"+id);
		obj.style.height=new_height-32+"px";
		obj.style.width=new_width+"px";
		obj=document.getElementById(id);
		obj.style.height=new_height-32+"px";
		obj.style.width=new_width+"px";
		obj.style.top="31.4px";
		obj.style.left="0px";
}

function addwindow(id) {
	undefined
	var winfram = document.getElementById(id+"_app");
	winfram.style.display = "block";
	nowid=id;
	activeapp.push(id);
};
function addwin(url, title){
	if(closeSet.delete("title_"+url)){
		addwindow("title_"+url);
		var win=document.getElementById("fram_"+url);
		win.src=win.src;
		return 0;
	}
	root=document.getElementById("root");
	var s="<div id=\"title_"+url+"_app\" style=\"position: absolute;width: 700px;display: none;height: 437px; a-index: auto;\">";
	s+="<div id=\"title_"+url+"\"";
	s+="style=\"width: 700px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: block; top: 0; left: 0;background-color: rgba(225,225,225,0.5);\"";
	s+="class=\"centre\" data-lh=\"437px\" data-lw=\"700px\">";
	s+="<font size=\"5\" class=\"secc\">"+title+"</font></div>";
	s+="<div id=\""+url+"\"";
	s+="style=\"top: 31.4px; height: 437px; width: 700px; position: float; border-radius: 0px; background-color: rgba(225, 225, 225, 0.8); display: block; left: 0px;\">";
	s+="<iframe id=\"fram_"+url+"\" style=\"border: 0;height: 437px;width: 700px;border-buttom-left-radius: 3px; border-buttom-right-radius: 3px; \" src=\""+url+"\"></iframe>"
	s+="</div>";
	root.innerHTML+=s;
	addwindow("title_"+url);
}

function closewin(id){
	if(!id){
		console.log("none")
		return 0;
	}
	var winfram = document.getElementById(id+"_app");
	winfram.style.display = "none";
	activeapp.splice(activeapp.indexOf(id), 1);
	closeSet.add(id);
	nowid=activeapp[activeapp.length-1];
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
	divx=x-div_x;

	var div_y = Number(obj.getBoundingClientRect().top) // obj相对屏幕的纵坐标
	divy=y-div_y;
}

function where(bl) {
	target_id=false;
	for(var i=0;i<activeapp.length;i++){
		var id_i=activeapp[i];
		obj=document.getElementById(id_i);
		if(checkIn(obj)){
			target_id=id_i;
		}
	}
	if(target_id && bl){
		nowid=target_id;
	}
	return target_id;
}

function mousedown(event) {
	if(movingid){
		if (isdown) {
			gotomouse(nowid);
		}
	}
	mousemove(event);
}

document.addEventListener("mousedown", function(event) {
	undefined
	isdown = true;
	document.getElementById(nowid+"_app").style.zIndex="auto";
	var whe = where(1);
	document.getElementById(nowid+"_app").style.zIndex=1000;
	if(document.getElementById(whe+"_app").style.top=="0px"){
		ufullscreen(whe);
	}
	movingid=whe;
	divxy(document.getElementById(movingid));
});
document.addEventListener("mouseup", function(event) {
	undefined
	if(isdown){
		obj=document.getElementById(movingid+"_app");
		if(Number(obj.style.top.slice(0,-2))>=window.innerHeight-20){
			closewin(movingid);
			obj.style.top="10px";
			obj.style.left="10px";
		}
		else if(Number(obj.style.top.slice(0,-2))<0){
			fullscreen(movingid);
			obj.style.top="10px";
			obj.style.left="10px";
		}
	}
	isdown = false;
	movingid="";
	divx = 0;
	divy = 0;
});

function gotomouse(id) {
	var winfram = document.getElementById(id+"_app");
	winfram.style.display = "block";
	//获取鼠标视口位置
	winfram.style.top = clientY - divy + "px";
	winfram.style.left = clientX - divx + "px";
}

function fullscreen(id){
	var lasterh=document.getElementById(id+"_app").style.height;
	var lasterw=document.getElementById(id+"_app").style.width;
	console.log(lasterh,lasterw);
	changesize(id.slice(6,id.length),window.innerHeight,window.innerWidth);
	var obj=document.getElementById(id+"_app");
	obj.style.top="0px";
	obj.style.left="0px";
	obj=document.getElementById(id);
	console.log(lasterh,lasterw);
	obj.dataset.lh=lasterh;
	obj.dataset.lw=lasterw;
	console.log(obj.dataset.lh,obj.dataset.lw);
}

function ufullscreen(id){
	var obj=document.getElementById(id);
	console.log(obj.dataset.lh.slice(0,-2))
	changesize(id.slice(6,id.length),obj.dataset.lh.slice(0,-2),obj.dataset.lw.slice(0,-2));
}

