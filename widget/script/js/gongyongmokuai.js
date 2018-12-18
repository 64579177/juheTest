(function (){ 
window["公用模块"] = {}
function 转换时间(time){
	if (转换操作.到数值(time + "000") <= 时间操作.取时间戳(时间操作.取当前日期时间())){
		return "已到期";
	}else {
		return 文本操作.子文本替换(时间操作.时间到文本(时间操作.时间戳到时间(转换操作.到数值(time + "000"))),"/","-");
	}
}
function load1(){
	return "<div class='loader loader--style2' title='1'><svg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'width='30px' height='30px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'><path fill='#000' d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeType='xml'attributeName='transform'type='rotate'from='0 25 25'to='360 25 25'dur='0.6s'repeatCount='indefinite'/></path></svg>"+
	"<a style='position: absolute;top: 3rem;font-size: 12px;left: 0;right: 0;color:#808080;bottom: 0;'>正在加载中,若3-10秒无法播放，请尝试返回重新进入</a></div>";

}
function 取中间文本(内容,左边,右边){
	var 左边1;
	var 右边1;

	左边1 = 文本操作.寻找文本(内容,左边,0);
	右边1 = 文本操作.寻找文本(内容,右边,左边1);

	左边1 = 左边1 + 文本操作.取文本长度(左边);
	return 文本操作.取文本中间(内容,左边1,右边1 - 左边1);
}
function time_To_hhmmss(seconds){
   var hh;
   var mm;
   var ss;

   if(seconds==null||seconds<0){
       return;
   }

   hh=seconds/3600|0;
   seconds=parseInt(seconds)-hh*3600;
   if(parseInt(hh)<10){
          hh="0"+hh;
   }

   mm=seconds/60|0;

   ss=parseInt(seconds)-mm*60;
   if(parseInt(mm)<10){
		   mm="0"+mm;
   }
   if(ss<10){
       ss="0"+ss;
   }
   return hh+":"+mm+":"+ss;

}
window["公用模块"]["转换时间"]=转换时间;
window["公用模块"]["load1"]=load1;
window["公用模块"]["取中间文本"]=取中间文本;
window["公用模块"]["time_To_hhmmss"]=time_To_hhmmss;
})();