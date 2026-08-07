var nowShowing = "div1";

function switchTo(target) {
	var outDiv = document.getElementById(nowShowing)
	outDiv.classList.remove("in");
	outDiv.classList.add("out");
	var inDiv = document.getElementById(target);
	inDiv.classList.remove("out");
	inDiv.classList.add("in");
	nowShowing = target;
}


function closePopup() {
	document.getElementById('popupv').style.display = 'none';
	var video = document.getElementById("pv_main");
	video.pause();
	video.currentTime = 0;
}

function Popup() {
	document.getElementById('popupv').style.display = 'flex';
	var video = document.getElementById("pv_main");
	video.play();
}

// 返回顶部
document.addEventListener("DOMContentLoaded", function() { //网页被加载时运行此函数
	var backToTopBtn = document.getElementById("totop"); //把网页中id为totop的元素转换为变量

	window.addEventListener("scroll", function() { //监听页面滚动
		if (window.scrollY > 200) { //向下滚动超过200时
			backToTopBtn.classList.remove("out1"); //通过移出类列表和加入类列表实现淡入和淡出
			backToTopBtn.classList.add("in1");
		} else {
			backToTopBtn.classList.remove("in1");
			backToTopBtn.classList.add("out1");
		}
	});

	backToTopBtn.addEventListener("click", function() { //监听backToTopBtn被点击
		window.scrollTo({ //滚动
			top: 0, //到顶端
			behavior: "smooth"
		});
	});
});