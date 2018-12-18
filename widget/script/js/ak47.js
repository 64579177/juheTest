function 影视列表框(name, event1, event2, event3, event4) {
	//name表示组件在被创建时的名称，event表示组件拥有的事件
	//如果组件有多个事件，可以在后面继续填写这些事件名称
	//例如：function 影视列表框(name,event1,event2,event3){

	//组件内部属性，仅供组件内部使用：
	this.名称 = name;

	//组件命令：
	this.置标题 = function(newTitle) {
		document.getElementById(this.名称).innerHTML = newTitle;
	}

	//组件命令：
	this.取标题 = function() {
		return document.getElementById(this.名称).innerHTML;
	}

	//组件命令：
	this.置可视 = function(value) {
		if(value == true) {
			var div = document.getElementById(this.名称).parentNode;
			div.style.display = "block"; //显示.......
		} else {
			var div = document.getElementById(this.名称).parentNode;
			div.style.display = "none"; //不占位隐藏
		}
	}

	//组件命令：
	this.置可视2 = function(value) {
		if(value == true) {
			var div = document.getElementById(this.名称).parentNode;
			div.style.visibility = "visible"; //显示
		} else {
			var div = document.getElementById(this.名称).parentNode;
			div.style.visibility = "hidden"; //占位隐藏
		}
	}

	this.初始化 = function(个数, 分页, 左导航, 右导航, 顶部) {
		var div = document.getElementById(name);
		var div1 = document.createElement("div");
		div1.className = ("wrap");
		var tu = "<ul>" + jj(个数) + "</ul>";
		var zydh = "<div class=\"index-list clearfix\">\n<div class=\"index-list-l\">\n<div class=\"hh1 clearfix\">\n<a tt=\"1\" class=\"more\" >" + 右导航 + "</a>\n<a tt=\"0\" ><span>" + 左导航 + "\n</span></a>\n</div>";

		if(分页 == true) {
			var fy = "<div class=\"page mb clearfix\">\n				<a>1..</a>\n				<a style=\"display: none;\">&lt;</a>\n				<a>4</a>\n				<a>5</a>\n				<a>6</a>\n				<a>7</a>\n				<em>8</em>\n				<a>9</a>\n				<a>10</a>\n				<a>11</a>\n				<a>&gt;</a>\n				<a>..452</a>\n			</div>";

			var nn = zydh + tu + fy + "</div>";
		} else {
			var nn = zydh + tu + "</div>";
		}
		div1.innerHTML = nn;

		if(顶部 == true) {
			var div2 = document.createElement("div");
			div2.className = ("gotop");
			div2.setAttribute("style", "display: block;");
			div2.innerHTML = "<a class=\"gotopbg\" href=\"javascript:;\" title=\"返回顶部\"></a>";
			div.appendChild(div1);
			div.appendChild(div2);
		} else {
			div.appendChild(div1);
		}
	}
	this.取图片总数 = function() {
		return document.getElementById(this.名称).getElementsByTagName("li").length;
	}
	this.取项目标题 = function(index) {
		var li = document.getElementById(this.名称).getElementsByTagName("li");
		if(li == null) {
			return "";
		}
		if(li.length <= index) {
			return "";
		}
		var item = li[index].getElementsByClassName("name ppx")[0];
		var title = item.innerText;
		title = title.replace(/(^\n*)|(\n*$)/g, ""); //去掉首尾的换行符
		return title;
	}
	this.置项目标题 = function(index, title) {
		var li = document.getElementById(this.名称).getElementsByTagName("li");
		if(li == null) {
			return;
		}
		if(li.length <= index) {
			return;
		}
		var item = li[index].getElementsByClassName("name ppx")[0];
		//item.innerHTML = '<div class="mui-media-body">' + title + '</div>';   
		item.innerText = title;
	}
	this.加载项目 = function(index, 图片, bd国语, 标题, 介绍, 标记) {
		var li = document.getElementById(this.名称).getElementsByTagName("li");
		if(li == null) {
			return;
		}
		if(li.length <= index) {
			return;
		}
		li[index].setAttribute("tag", 标记);
		var item = li[index].getElementsByClassName("li-hv")[0];
		item.setAttribute("title", 标题);
		var item = li[index].getElementsByClassName("lazy")[0];
		item.setAttribute("data-original", 图片);
		item.setAttribute("src", 图片);
		item.setAttribute("alt", 标题);
		var item = li[index].getElementsByClassName("bz")[0];
		item.innerText = bd国语;
		var item = li[index].getElementsByClassName("name ppx")[0];
		item.innerText = 标题;
		var item = li[index].getElementsByClassName("zy")[0];
		item.innerText = 介绍;

	}
	this.取项目标记 = function(index) {
		var li = document.getElementById(this.名称).getElementsByTagName("li");
		if(li == null) {
			return "";
		}
		if(li.length <= index) {
			return "";
		}
		return li[index].getAttribute("tag");
	}
	this.置项目标记 = function(index, tag) {
		var li = document.getElementById(this.名称).getElementsByTagName("li");
		if(li == null) {
			return;
		}
		if(li.length <= index) {
			return;
		}
		li[index].setAttribute("tag", tag);
	}

	this.置右导航 = function(title) {
		var li = document.getElementById(this.名称).getElementsByClassName("more")[0];

		li.innerText = title;
	}
	this.置左导航 = function(title) {
		var li = document.getElementById(this.名称).getElementsByTagName("span")[0];

		li.innerText = title;
	}
	this.置导航可视 = function(value) {
		if(value == true) {
			var div = document.getElementById(this.名称).getElementsByClassName("hh1 clearfix")[0];
			div.style.display = "block"; //显示
		} else {
			var div = document.getElementById(this.名称).getElementsByClassName("hh1 clearfix")[0];
			div.style.display = "none"; //不占位隐藏
		}
	}
	this.置返回顶部可视 = function(value) {
		if(value == true) {
			var div = document.getElementById(this.名称).getElementsByClassName("gotop")[0];
			div.style.display = "block"; //显示
		} else {
			var div = document.getElementById(this.名称).getElementsByClassName("gotop")[0];
			div.style.display = "none"; //不占位隐藏
		}
	}
	this.置分页可视 = function(value) {
		if(value == true) {
			var div = document.getElementById(this.名称).getElementsByClassName("page mb clearfix")[0];
			div.style.display = "block"; //显示
		} else {
			var div = document.getElementById(this.名称).getElementsByClassName("page mb clearfix")[0];
			div.style.display = "none"; //不占位隐藏
		}
	}
	this.到顶部 = function(速度) {

		timer = requestAnimationFrame(function fn() {
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(oTop > 0) {
				scrollTo(0, oTop - 速度);
				timer = requestAnimationFrame(fn);
			} else {
				cancelAnimationFrame(timer);
			}
		});
	}
	this.插入项目 = function(图片, 标题, bd, 介绍, 标记) {
		var s = document.getElementById(this.名称).getElementsByTagName("li").length + 1;
		var li = document.createElement("li");
		console.log(s)
		console.log(isInteger(s / 3))
		if(isInteger(s / 3) == true) {
		
			li.className = "mb m3"
			li.setAttribute("index", s);
			li.setAttribute("tag", 标记);
			ty = "<a class=\"li-hv\"  title=\"" + 标题 + "\">\n<div class=\"img\"> <img class=\"lazy\" data-original=\"" + 图片 + "\" src=\"" + 图片 + "\" alt=\"" + 标题 + "\" style=\"display: block;\"> <b class=\"bg1\"></b> <b class=\"play-hv\"></b> <b class=\"sjbg2 png\"></b>\n<p class=\"bz\">" + bd + "</p>\n	</div>\n								<div class=\"text\">\n									<p class=\"name ppx name ppx mui-ellipsis\">" + 标题 + "</p>\n									<p class=\"zy\">" + 介绍 + "</p>\n</div>\n</a>";
			li.innerHTML = ty;
		} else {
			li.className = "mb"
			li.setAttribute("index", s);
			li.setAttribute("tag", 标记);
			ty = "<a class=\"li-hv\"  title=\"" + 标题 + "\">\n<div class=\"img\"> <img class=\"lazy\" data-original=\"" + 图片 + "\" src=\"" + 图片 + "\" alt=\"" + 标题 + "\" style=\"display: block;\"> <b class=\"bg1\"></b> <b class=\"play-hv\"></b> <b class=\"sjbg2 png\"></b>\n<p class=\"bz\">" + bd + "</p>\n	</div>\n								<div class=\"text\">\n									<p class=\"name ppx name ppx mui-ellipsis\">" + 标题 + "</p>\n									<p class=\"zy\">" + 介绍 + "</p>\n</div>\n</a>";
			li.innerHTML = ty;

		}
		var div = document.getElementById(this.名称).getElementsByTagName("ul");

		div[0].appendChild(li)

	}
	//子程序

	function isInteger(obj) {
		return Math.floor(obj) === obj
	}

	function jj(ii) {
		var io = 0;
		var ty = "";
		var ty1 = "";
		var ty2 = "";
		var tyok = "";
		var ioo = 0;

		while(io < ii) {
			io = io + 1;
			ioo = ioo + 1;
			if(ioo == 3) {
				ty = "<li class=\"mb m3\" index=\"" + io + "\" tag=\"" + io + "\">\n<a class=\"li-hv\"  title=\"羞羞的铁拳\">\n<div class=\"img\"> <img class=\"lazy\" data-original=\"http://www.piaohuatv.co/pic/load.gif\" src=\"http://www.piaohuatv.co/pic/load.gif\" alt=\"羞羞的铁拳\" style=\"display: block;\"> <b class=\"bg1\"></b> <b class=\"play-hv\"></b> <b class=\"sjbg2 png\"></b>\n<p class=\"bz\">BD国语</p>\n	</div>\n								<div class=\"text\">\n									<p class=\"name ppx name ppx mui-ellipsis\">羞羞的铁拳</p>\n									<p class=\"zy\">艾伦,马丽,沈腾,田雨,宋阳,薛皓文,常远,黄才伦,王智</p>\n</div>\n</a>\n</li>";
				ioo = 0;

			} else {
				ty = "<li class=\"mb\" index=\"" + io + "\" tag=\"" + io + "\">\n							<a class=\"li-hv\" title=\"羞羞的铁拳\">\n								<div class=\"img\"> <img class=\"lazy\" data-original=\"http://www.piaohuatv.co/pic/load.gif\" src=\"http://www.piaohuatv.co/pic/load.gif\" alt=\"羞羞的铁拳\" style=\"display: block;\"> <b class=\"bg1\"></b> <b class=\"play-hv\"></b> <b class=\"sjbg2 png\"></b>\n									<p class=\"bz\">BD国语</p>\n								</div>\n								<div class=\"text\">\n									<p class=\"name ppx name ppx mui-ellipsis\">羞羞的铁拳</p>\n									<p class=\"zy\">艾伦,马丽,沈腾,田雨,宋阳,薛皓文,常远,黄才伦,王智</p>\n								</div>\n							</a>\n				        </li>";

			}

			tyok = tyok + ty + "\n";
		}
		return tyok;

	}

	//组件事件
	if(event1 != null) {
		mui('#' + this.名称).on('tap', '.hh1 a', function() {
			var index = this.getAttribute("tt");
			event1(Number(index));
		});
	}

	if(event2 != null) {
		mui('#' + this.名称).on('tap', 'li', function() {
			var index = this.getAttribute("index");
			var item = this.getElementsByClassName("name ppx")[0].innerText;
			var bg = this.getAttribute("tag");
			event2(Number(index), item, bg);

		});
	}

	if(event3 != null) {
		mui('#' + this.名称).on('tap', '.page', function() {
			var 选中页 = this.getElementsByTagName("em")[0].innerText;
			var a = this.getElementsByTagName("a")
			var 总页 = Number(a[a.length - 1].innerText.replace(/[^0-9]/ig, ""))
			event3(Number(选中页), Number(总页));

		});
	}
	if(event4 != null) {
		mui('#' + this.名称).on('tap', '.gotop', function() {
			event4();
		});
	}
}