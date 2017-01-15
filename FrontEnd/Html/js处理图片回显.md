```html
<!DOCTYPE html>
<html lang="en">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
		.test {
			width: 500px;
		}
	</style>
</head>

<body>
	<input type="file" name="inputfile" onchange="readFile(this.files[0])">
	<div id="preview"></div>
	<script type="text/javascript">
	/*
	 * js处理图片
	 */
		function readFile(f) {
			// 实例化回显的接口
			var reader = new FileReader();

			reader.readAsDataURL(f); //base64编码

			reader.onload = function () {
				var preview = document.querySelector('#preview'); // 获取显示区域
				var img = document.createElement("img"); // 创建标签
				img.src = reader.result; // 数组图片地址
				img.className = 'test'; // 用的是上面定义的样式
				preview.appendChild(img); // 追加一个image标签
			}
			reader.onerror = function (e) {
				console.log("Error" + e);
			}
		}
	</script>
</body>

</html>
```