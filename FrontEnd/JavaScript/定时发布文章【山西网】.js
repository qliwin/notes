
localStorage.getArticles = "(function($){  	function publish(r) { 		if(!r){ 			window.close(); return false; 		} 		$('#page_title').val(r.title); 		$('#title_0').val(r.title); 		$('select[name=source]').val(86325); 		$('#truekey').val(r.label); 		$('[name=key]').val(r.label); 		editor.setContent(r.content); 		writesubmit(1); 		$('.zhijiefabu')[0].click(); }  	$.getJSON('http://www.xuanhuijinrong.com/chinashanxi/deal.php',function(data){ 		publish(data); 	});  })(jQuery);"

function process(){
	var win = window.open(location.href); 
	setTimeout(function(){
		win.eval(localStorage.getArticles);
	}, 5000);
}

process();
window.setInterval(function(){
	process();
}, 10*60*1000);






localStorage.setItem('close',"window.close()");

function openBaidu(){
	var href = window.open(location.href);

	setTimeout(function(){
		href.eval(localStorage.getItem('close'));
	},6000);
}

window.setInterval(function(){
	openBaidu();
},6000);