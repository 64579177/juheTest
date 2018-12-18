    function CYSbiaoqianshurukuang(name,event,event2,event3){   
       /*zuozhe：CYS。  QQ：649812788
		  youBUGqingfankui,xiexie！
		*/
        this.mingchen = name;
        
		//quchubianjikuangbiankuang
		document.getElementById(name).getElementsByTagName("input")[0].style.border = "none";
		
		this.zhibiaotiduiqi = function(type){
			//0：zuoduiqi   1：jizhong  2：youduiqi
			var olabel = document.getElementById(this.mingchen).getElementsByTagName('label')[0];
			switch(type){
				case 0:
					olabel.style.textAlign = "left";
					break;
				case 1:
					olabel.style.textAlign = "center";
					break;
				case 2:
					olabel.style.textAlign = "right";
					break;
			}
		};
		
		this.shanchufengexian = function(){
			var head = document.getElementsByTagName("head")[0];
			var style = head.getElementsByTagName("style");
			if(style.length!=0){
				var oldstyle = style[0].innerHTML;
				var tmp = "#"+name+":after{";
				var i = oldstyle.indexOf(tmp);
				if(i!=-1){
					//shanchuyuanlaideyangshi
					oldstyle = ziwenbentihuan(oldstyle,"\n","");
					var content = quzhidingwenben(oldstyle,tmp,"\\}");
					style[0].innerHTML = ziwenbentihuan(oldstyle,tmp + content + "}","");
				}
			}
		};
		
		this.zhifengexianyangshi = function(lineColor,lineWidth){
			var head = document.getElementsByTagName("head")[0];
			var style = head.getElementsByTagName("style");
			
			if(style.length==0){
				var ostyle = document.createElement("style");
				ostyle.type = "text/css";
				ostyle.innerHTML = "\n#"+name+":after{\ncontent:'';\ndisplay:block;\nwidth:"+lineWidth+";\nborder-bottom:1px solid "+lineColor+";\ntop:39px;\nposition:absolute;\nright:0;\n}\n";
				head.appendChild(ostyle);
			}else{
				var oldstyle = style[0].innerHTML;
				var tmp = "#"+name+":after{";
				var i = oldstyle.indexOf(tmp);
				if(i!=-1){
					//shanchuyuanlaideyangshi
					oldstyle = ziwenbentihuan(oldstyle,"\n","");
					var content = quzhidingwenben(oldstyle,tmp,"\\}");
					style[0].innerHTML = ziwenbentihuan(oldstyle,tmp + content + "}","");
				}
				style[0].innerHTML += "\n#"+name+":after{\ncontent:'';\ndisplay:block;\nwidth:"+lineWidth+";\nborder-bottom:1px solid "+lineColor+";\ntop:39px;\nposition:absolute;\nright:0;\n}\n";
			}
		};
		
        //zujianmingling：
        this.zhibiaoti = function (newTitle){
            //document.getElementById(this.mingchen).innerHTML=newTitle;
			var olabel = document.getElementById(this.mingchen).getElementsByTagName('label')[0];
			olabel.innerHTML = newTitle;
        } 
        
        //zujianmingling：
        this.qubiaoti = function (){
           return document.getElementById(this.mingchen).getElementsByTagName('label')[0].innerHTML;
        }  
        
        //zujianmingling：
        this.zhikeshi = function (value){
            if(value==true){
                var div = document.getElementById(this.mingchen).parentNode;
                div.style.display="block";//xianshi	                
            }else{
                var div = document.getElementById(this.mingchen).parentNode;
                div.style.display="none"; //buzhanweiyincang               
            }
        } 
        
        //zujianmingling：
        this.zhikeshi2 = function (value){
            if(value==true){
                var div = document.getElementById(this.mingchen).parentNode;
                div.style.visibility="visible";//xianshi	                
            }else{
                var div = document.getElementById(this.mingchen).parentNode;
                div.style.visibility="hidden"; //zhanweiyincang               
            }
        } 
        
		/*-【mingling】-*/
		this.zhitishinarong = function(newTips){
			var oinput = document.getElementById(this.mingchen).getElementsByTagName('input')[0];
			oinput.setAttribute('placeholder',newTips);
		}
		
		this.qutishinarong = function(){
			var oinput = document.getElementById(this.mingchen).getElementsByTagName('input')[0];
			return oinput.getAttribute('placeholder');
		}
		
		this.zhinarong = function(content){
			var oinput = document.getElementById(this.mingchen).getElementsByTagName('input')[0];
			oinput.value = content;
		}
		
		this.qunarong = function(){
			var oinput = document.getElementById(this.mingchen).getElementsByTagName('input')[0];
			return oinput.value;
		}
		
		this.zhiyangshi = function(type){//0：putong 1：mima
			var odiv = document.getElementById(this.mingchen);
			var txt = odiv.getElementsByTagName('label')[0].innerHTML;
			var oinput = odiv.getElementsByTagName('input')[0];
			var tips = oinput.getAttribute('placeholder');
			var content = oinput.value;
			var newClassName,newType;
			if(type==0){
				newType = "text";
				newClassName = "mui-input-clear";
			}else{
				newType = "password";
				newClassName = "mui-input-password";
			}
			if(tips==null){tips=""}
			odiv.innerHTML = "<label>" + txt + "</label>"
							+ "<input type='"+newType+"' class='"+newClassName+"' placeholder='"+tips+"' value='"+content+"'>";
			mui('.mui-input-row input').input();
			odiv.getElementsByTagName("input")[0].style.border = "none";	
		}
		
		
        //zujianshijian
        if(event!=null){
 		document.getElementById(this.mingchen).addEventListener("tap", function () {
                event();//chufazujiandexiangguanshijian，zheliyanshideshibeidanjishijian
            });       	
        }
		
		if(event2!=null){
			document.getElementById(this.mingchen).addEventListener("keydown", function (e) {
				var keynum = window.event ? e.keyCode : e.which;
				event2(keynum);//anxiamoujianshijian
			});
		}
		
		if(event3!=null){
			//narongbeigaibian
			document.getElementById(name).getElementsByTagName("input")[0].oninput = function(){
				event3(this.value);
			}
		}
		
		/*-*/
		function quzhidingwenben(daiquwenben,zuobianwenben,youbianwenben){
			var pattern = new RegExp(zuobianwenben + "(.*?)" + youbianwenben,"g");
			var result = new Array(0);
			while (pattern.exec(daiquwenben) != null){
				result.push(RegExp.$1);
			}
			return result;
		}
		
		function ziwenbentihuan(str, a, b) {
            if(str==null || a==null || b==null){
                return "";
            }         
            var regExp = new RegExp(a, "g");
            return str.replace(regExp, b);
		}
    }