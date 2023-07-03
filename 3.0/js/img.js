/**
 * @param {int} md input type:  0.file or 1.base64
 * @param {String} data input dom ID/base64
 * @param {int} height height after convert
 * @param {int} width width after convert
 * @param {function} func a function to be called
 * @return {String} base64
 */
function imgChangesize(md, data, height, width, func) {
	if(md==0){
		doInput(data);
		function doInput(id) {
			var inputObj = document.createElement('input');
			inputObj.addEventListener('change', readFile, false);
			inputObj.type = 'file';
			inputObj.accept = 'image/*';
			inputObj.id = id;
			inputObj.click();
		}

		function readFile() {
			var file = this.files[0];
			if (!/image\/\w+/.test(file.type)) {
				alert("请确保文件为图像类型!");
				return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e) {
				drawToCanvas(this.result);
			}
		}
	}else
		drawToCanvas(data);

	function drawToCanvas(imgData) {
		var cvs = document.createElement('canvas');
		cvs.width = width;
		cvs.height = height;
		var ctx = cvs.getContext('2d');
		var img = new Image;
		img.src = imgData;
		img.onload = function() {
			ctx.drawImage(img, 0, 0, width, height);
			strDataURI = cvs.toDataURL();
			func(strDataURI);
		}
	}
}
