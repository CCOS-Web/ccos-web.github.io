var head = "";
var tail =
	"</div> </div> <script src=\"dist/reveal.js\"></script> <script src=\"plugin/notes/notes.js\"></script> <script src=\"plugin/markdown/markdown.js\"></script> <script src=\"plugin/highlight/highlight.js\"></script> <script src=\"plugin/math/math.js\"></script> <script> Reveal.initialize({ hash: true, plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX ] }); </script> </body> </html>";
var body = "";
var li = [];

function init(title, theme) {
	if (theme == undefined) {
		theme = "black"
	}
	head =
		"<!doctype html> <html> <head> <meta charset=\"utf-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"> <title>" +
		title +
		"</title> <link rel=\"stylesheet\" href=\"dist/reset.css\"> <link rel=\"stylesheet\" href=\"dist/reveal.css\"> <link rel=\"stylesheet\" href=\"dist/theme/" +
		theme +
		".css\"> <!-- Theme used for syntax highlighted code --> <link rel=\"stylesheet\" href=\"plugin/highlight/monokai.css\"> </head> <body> <div class=\"reveal\"> <div class=\"slides\"> ";
}

function creat(detail, cls, id, d2, d3) {
	if (!cls) {
		if(d2=="bg-color"){return "<section id=\"" + String(id) + "\" data-background-color='"+d3+"'>" + detail + "</section>";}
		if(d2=="bg-img"){return "<section id=\"" + String(id) + "\" data-background-image='"+d3+"'>" + detail + "</section>";}
		if(d2=="bg-vid"){return "<section id=\"" + String(id) + "\" data-background-video='"+d3+"'>" + detail + "</section>";}
		if(d2=="more"){return "<section id=\"" + String(id) + "\" "+d3+">" + detail + "</section>";}
		
		return "<section id=\"" + String(id) + "\">" + detail + "</section>";
	} else if (cls == "md") {
		return "<section data-markdown><textarea data-template>" + detail + "</textarea></section>";
	} else if (cls=="link") {
		return "<a href=\"#/"+d2+"\">"+detail+"</a>";
	}
}

function addslide(detail, id) {
	li[id] = detail;
}

function final() {
	for (var i = 0; i < li.length; i++) {
		body += li[i];
	}
	return head + body + tail;
}

function test() {
	init("test", "black");
	addslide(
		creat(
			creat("# md, \n- by md. \n------", 'md')
		   +creat("# md, \n- by md. \n------"+creat("to:2","link",'','2'), 'md')
			,'',0)
		, 0);
	addslide(
		creat(
			creat("```js [1|2|3-4,6|1]\na\nb\nd\nf\n\g\nr\ne\nw\n```", 'md')
			,'',1,'bg-color','rgba(225,0,0,0.3)')
		, 1);
	addslide(
		creat(
			creat("# md, \n- by md. \n------", 'md')
			,'',2)
		, 2);
	save();
}

function fake_click(obj) {
	var ev = document.createEvent("MouseEvents");
	ev.initMouseEvent(
		"click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null
	);
	obj.dispatchEvent(ev);
}

function download(name, data) {
	var urlObject = window.URL || window.webkitURL || window;

	var downloadData = new Blob([data]);

	var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	save_link.href = urlObject.createObjectURL(downloadData);
	save_link.download = name;
	fake_click(save_link);
	alert("Download to: download\\" + name);
}

function save(title){
	if(title==undefined){title="new"}
	download(title+".html",final())
}
