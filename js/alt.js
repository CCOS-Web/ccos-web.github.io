var altbox=document.createElement("div");
altbox.style.position="absolute";
altbox.style.borderRadius="2px";
altbox.style.width="240px";
// altbox.style.height="70px";
altbox.style.display="none";
altbox.style.bottom="0";
altbox.style.right="0";
altbox.style.padding="1ch";
altbox.style.animationDuration="3s";
document.getElementsByTagName("body")[0].appendChild(altbox);
function alt(c, m, s){
	altbox.style.display="block";
	altbox.style.backgroundColor=c;
	altbox.style.color="white";
	altbox.innerHTML=m;
	altbox.style.animationName="alertIn";
	altbox.onclick=function(){
		system(s);
		closealt();
	}
	setTimeout(function(){
		closealt();
	}, 10000);
	function closealt(){
		altbox.style.animationName="alertOut";
		setTimeout(function(){
			altbox.style.display="none";
			altbox.onclick=null;
		}, 3000);
	}
}