
var player;

	function 载入播放器(url,size){
		
		player = null;
		
		player = new Aliplayer({
		id: "播放器1",
			 autoplay: true,
			 isLive:false,
			 playsinline:true,
			 width:"100%",
			 height:size,
			 controlBarVisibility:"always",
			 useH5Prism:true,
			 preload:true,
			 useFlashPrism:false,
			 showBarTime:3000,
			 source:url,
			 cover:""
			 },function(player){
				console.log("播放器创建了。");
			  }
		);
		
		return player;
		
		
		
	}
	
	





