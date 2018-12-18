
    function 标题栏(name,event1,event2,event3){  
        this.名称 = name;
        
        this.置标题 = function (newTitle){
            document.querySelector(".mui-title").innerHTML=newTitle;
        } 

        this.取标题 = function (){
           return document.querySelector(".mui-title").innerHTML;
        }  

        this.置左侧图标 = function (type,icon){
            if(event3!=null){
                document.querySelector(".mui-pull-left").className=type + " " + icon + " mui-pull-left";
            }else{
                document.querySelector(".mui-pull-left").className="mui-action-back " + type + " " + icon + " mui-pull-left";
            }
        } 

        this.置右侧图标 = function (type,icon){
            document.querySelector(".mui-pull-right").className=type + " " + icon + " mui-pull-right";
        } 

        if(event1!=null){
			document.querySelector("header").addEventListener("doubletap", function(e) {
				event1();//标题栏被双击事件
			});   	
        }
        
        if(event2!=null){
			document.querySelector(".mui-pull-right").addEventListener("tap", function(e) {
				event2();//右侧图标被单击事件
			});   	
        }
        
     
    }  


 