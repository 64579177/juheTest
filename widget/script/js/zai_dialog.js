    function 仔仔弹出对话框(name,event){   
        this.名称 = name;
        
        this.成功 = function (newTitle){
			new TipBox({type:'success',str:newTitle,hasBtn:true});
        }
		
		this.错误 = function (newTitle){
			new TipBox({type:'error',str:newTitle,hasBtn:true});
        }
		
		this.加载 = function (newTitle,time,xinx){
			new TipBox({type:'load',str:newTitle,setTime:time,callBack:function()
				{
					new TipBox({type:'success',str:xinx,hasBtn:true});
				}
			});
        }
		
		this.提示 = function (newTitle,time){
			new TipBox({type:'tip',str:newTitle,clickDomCancel:true,setTime:time,hasBtn:true});
        }
  
    }