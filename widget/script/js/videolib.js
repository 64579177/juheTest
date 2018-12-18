    function 影视列表框(name, event1) {
	//name表示组件在被创建时的名称，event表示组件拥有的事件
	//如果组件有多个事件，可以在后面继续填写这些事件名称
	//例如：function 影视列表框(name,event1,event2,event3){
	//组件内部属性，仅供组件内部使用：
	//感谢 小黑猪 提供的类库	
	//20180410加入评分
	
	this.名称 = name;

	//组件命令：	
	this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="block";	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位               
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

	//组件命令：
	this.添加项目 = function(图片, 标题, 更新, 介绍, 标记, 评分, 评分背景图, VIP背景图) {
	    var li = document.createElement("li");		
		var s = document.getElementById(this.名称).getElementsByTagName("li").length + 1;		
		console.log(s);
		console.log(isInteger(s / 3));
		if(isInteger(s / 3) == true) {		
			li.className = "mb m3";						
		} else {
			li.className = "mb";						
		}
		li.setAttribute("tag", 标记);
		li.setAttribute("index", s);
				
		var html = 
		        "<a class=\"li-hv\"  title=\""+标题+"\">"+
                "	    	    <div class='img'><img class='lazy' data-original='"+图片+"' src='"+图片+"' alt='"+标题+"' style='display: block;'>	    		    	<b class='bg1'></b>	    			    <b class='play-hv'></b>	    			    <b class='sjbg2 png'></b>"+
                "	    			    <p class='bz'>"+更新+"</p>"+
                "	    	    </div>"+
                "	    	    <div class='text'>"+
                "	    		    <p class='name ppx name ppx mui-ellipsis'>"+标题+"</p>"+
                "	    		    <p class='zy'>"+介绍+"</p>"+
                "	    	    </div>"+
                "	        </a>"
	    if(评分背景图 != null){
		   html = html +		
                "	        <div class='pinf' style='background-image: url("+评分背景图+");'>"+
                "	    	    <p>"+评分+"</p>"+
                "	        </div>" ; 
		}	
		
		if(VIP背景图 != null){
		   html = html +		
                "	        <div class='leixin'  style='background-image: url("+VIP背景图+");'>"+
                "	        </div>"	;
		}				
		li.innerHTML = html;
		var div = document.getElementById(this.名称).getElementsByClassName("ul_lists");
		div[0].appendChild(li)
	}
	
	//组件命令：    此函数提取与别的类库
	this.清空项目 = function (){
        var table = document.getElementById(this.名称);
        while(table.hasChildNodes()){
             table.removeChild(table.firstChild);
	         }
		var html =	 			 
			 "<div class='wrap'>"+
			"<div class='index-list clearfix'>"+
				"<div class='index-list-l'>"+					
                    "<ul class='ul_lists'>"+
                    "</ul>"+    
			        "</div>"+    
			"</div>"+    
     "</div>";
	 document.getElementById(this.名称).innerHTML=html;       
    }	
	
	//组件命令：	  此函数提取与别的类库
	this.取项目总数 = function() {
		return document.getElementById(this.名称).getElementsByTagName("li").length;
	}
	
	//组件命令：
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
	
	//组件命令：
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
	
	//组件命令：    此函数提取与别的类库
	this.取项目图片 = function(index){
		var item = document.getElementById(this.名称).getElementsByTagName("li");
		if(item == null) {
			return "0";
		}
		if(item.length <= index) {
			return "0";
		}
		var img = item[index].getElementsByTagName("img")[0];
		var image = img.getAttribute("src");
		if(image == null){
		   return "0"
		}
		   return image;
		//return li[index].getAttribute("tag");
		}
	
	//组件命令：	
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
	
	//组件命令：
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
	
	//组件命令：
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
	
	//子程序

	function isInteger(obj) {
		return Math.floor(obj) === obj
	}
	
	 //组件  项目被单击事件返回  ,时间返回里增加了项目图片image
	if(event1 != null) {
		mui('#' + this.名称).on('tap', 'li', function() {
			var index = this.getAttribute("index");
			var item = this.getElementsByClassName("name ppx")[0].innerText;
			var img = this.getElementsByTagName("img")[0];             
			var image = img.getAttribute("src");
			var bg = this.getAttribute("tag");
			event1(Number(index),item,image,bg);

		});
	}
}