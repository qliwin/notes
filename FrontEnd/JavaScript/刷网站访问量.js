// 将关闭网页方法写入localStorage
localStorage.setItem('close',"window.close()");

// 打开页面函数
function openPage(){
	var href = window.open(location.href);

	// 定时器 打开后固定回到家关闭
	setTimeout(function(){
		href.eval(localStorage.getItem('close'));
	},6000);
}

// 定时器 重复执行
window.setInterval(function(){
	openPage();
},6000);