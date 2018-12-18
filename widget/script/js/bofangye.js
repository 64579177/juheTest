mui.init({swipeBack: false
,gestureConfig: {tap: true,doubletap: true,longtap: true}});
var dataurl2 = '';
var jx_url1 = localStorage.getItem('jx_url1');
var jx_url2 = localStorage.getItem('jx_url2');
var 标题栏1 = new 标题栏("标题栏1",null,null,标题栏1_左侧图标被单击);
var 面板1 = new 面板("面板1");
var 面板2 = new 面板("面板2");
var 列表框2 = new 列表框("列表框2",false,null,null);
var 面板3 = new 面板("面板3");
var 面板4 = new 面板("面板4");
var 网络操作_综则 = new 网络操作("网络操作_综则",null);
var 网络操作_正则 = new 网络操作("网络操作_正则",null);
var 网络操作_电影 = new 网络操作("网络操作_电影",网络操作_电影_发送完毕);
var 网络操作_电视 = new 网络操作("网络操作_电视",网络操作_电视_发送完毕);
var 网络操作_动漫 = new 网络操作("网络操作_动漫",网络操作_动漫_发送完毕);
var 网络操作_综艺 = new 网络操作("网络操作_综艺",网络操作_综艺_发送完毕);
var 图片框_图片 = new 图片框("图片框_图片",null);
var 标签1 = new 标签("标签1",null);
var 面板6 = new 面板("面板6");
var 面板7 = new 面板("面板7");
var 面板9 = new 面板("面板9");
var 面板10 = new 面板("面板10");
var 面板11 = new 面板("面板11");
var CYS悬浮文字导航_集数 = new CYS悬浮文字导航("CYS悬浮文字导航_集数",null,null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 对话框1 = new 对话框("对话框1",null,null,null);
var 正则_电影 = new 正则("正则_电影");
var 正则_电视 = new 正则("正则_电视");
var 正则_综艺 = new 正则("正则_综艺");
var 正则_动漫 = new 正则("正则_动漫");
var 正则_集数 = new 正则("正则_集数");
var 标签5 = new 标签("标签5",null);
var 标签7 = new 标签("标签7",null);
var 加密操作1 = new 加密操作("加密操作1");
var 列表框1 = new 列表框("列表框1",true,null,null);
var 网络操作_剧集 = new 网络操作("网络操作_剧集",网络操作_剧集_发送完毕);
var 正则1 = new 正则("正则1");
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 网络操作_正则文本 = new 网络操作("网络操作_正则文本",网络操作_正则文本_发送完毕);
var 编辑框3 = new 编辑框("编辑框3",null,null,null,null,null);
var 列表框3 = new 列表框("列表框3",false,列表框3_表项被单击,null);
var 列表框4 = new 列表框("列表框4",false,列表框4_表项被单击,null);
var 弹出面板1 = new 弹出面板("弹出面板1",null,null);

if(mui.os.plus){
    mui.plusReady(function() {
        加载播放页_创建完毕();

    });
}else{
    window.onload=function(){
        加载播放页_创建完毕();

    }
}
window.addEventListener("customEvent",function(event){加载播放页_切换完毕(event.detail.param);});

function 加载播放页_创建完毕(){
		图片框_图片.置图片("../image/fenlei/v.png");
		窗口操作.置组件圆角("图片框_图片","10px");
		窗口操作.置组件圆角("列表框2","10px");
		窗口操作.置组件圆角("列表框3","20px");
		列表框4.清空项目();

			标签1.置标题(读写设置.读取设置("播放标题") + "<br><br>简介：<br><br>");
			面板1.添加组件("图片框_图片","35%");
			面板1.添加组件("标签1","60%");
			面板1.置外边距("0px","0px","0px","0px");
			面板1.置内边距("0px","0px","0px","10px");
			面板1.置高度("230px");
			窗口操作.置组件外边距("图片框_图片","60px","0px","0px","15px");
			窗口操作.置组件外边距("标签1","50px","15px","0px","15px");

			列表框2.置背景颜色(0,0,0,0.05);
			列表框3.置背景颜色(0,0,0,0.05);
			列表框2.置标题颜色("#1e9d90"); /*播放来源文字颜色*/
			列表框3.置标题颜色("#1e9d90");/*播放来源文字颜色*/
			面板2.添加组件("列表框2","100%");
			面板2.置外边距("10px","18px","10px","18px");
			列表框2.添加项目("<img src=../image/fenlei/play.png style='width: 25px;vertical-align: bottom;margin-right: 15px;' />请选择播放来源");
			面板3.添加组件("列表框3","100%");
			面板3.置外边距("0px","18px","1px","18px");

			面板6.置可视(false);
			面板7.置可视(false);

			标签5.置背景颜色("#6ec39d");/*当前来源背景颜色*/
			面板9.添加组件("标签5","100%");

			面板10.添加组件("列表框4","100%");

			弹出面板1.初始化("25px","150px",""+(窗口操作.取窗口宽度()-50)+"px","350px");/*点击播放来源弹出的窗口位置以及大小*/
			弹出面板1.添加组件("面板9");
			弹出面板1.添加组件("面板10");
			弹出面板1.隐藏();
			网络操作_正则文本.发送网络请求("../css/css/zz.txt","get","txt","",8000);

			switch(读写设置.读取设置("播放分类")){
				case "电影" :
					网络操作_电影.发送网络请求(读写设置.读取设置("播放地址"),"get","html","",8000);
				break;
				case "电视" :
					网络操作_电视.发送网络请求(读写设置.读取设置("播放地址"),"get","html","",8000);
				break;
				case "动漫" :
					网络操作_动漫.发送网络请求(读写设置.读取设置("播放地址"),"get","html","",8000);
				break;
				case "综艺" :
					网络操作_综艺.发送网络请求(读写设置.读取设置("播放地址"),"get","html","",8000);
				break;
			}

}

function 网络操作_电影_发送完毕(发送结果,返回信息){
	列表框3.清空项目();
		var 图片;
		var 标题;
		var 类型;
		var 介绍;
		var 地址;
		var 评分;
		var 源码;
		var 名称;
		var 影片类型;
		var 影片主演;
		var 影片评分;
		var 猜你喜欢;
		var 十九电影= 1;
		if(发送结果 == true ){
				列表框4.清空项目();
				编辑框1.置内容(文本操作.删全部空(返回信息));
				影片评分 = "暂无";
				影片类型 = 读写设置.读取设置("播放分类");
				影片主演 = 读写设置.读取设置("播放介绍");
				正则_电影.创建正则(返回信息,"<a data-daochu=\"to=(.*?)\"(\[\\s\\S\]*?)href=\"(.*?)\">(.*?)</a>");

			while(十九电影 != 正则_电影.取匹配数量()){
				类型 = 正则_电影.取子匹配文本(十九电影,1);
				地址 = 正则_电影.取子匹配文本(十九电影,3);
				名称 = 正则_电影.取子匹配文本(十九电影,4);
				标签1.置标题("片名：" + 读写设置.读取设置("播放标题") + "<br><br>" + 影片主演 + "<br><br>影片类型：" + 影片类型 + "<br><br>影片评分：" + 影片评分 + "<br><br>");
				列表框3.添加项目(名称,地址,"","");
				图片框_图片.置图片(读写设置.读取设置("播放图片"));
				十九电影 = 十九电影 + 1;
			}

			}else{
			对话框1.弹出提示("加载失败,请稍后重试");
	}
}

function 网络操作_电视_发送完毕(发送结果,返回信息){
	列表框3.清空项目();
		var 图片;
		var 标题;
		var 类型;
		var 集数;
		var 介绍;
		var 地址;
		var 评分;
		var 源码;
		var 名称;
		var 影片类型;
		var 影片主演;
		var 影片评分;
		var 猜你喜欢;
		var 十九电视= 0;
		if(发送结果 == true ){
				列表框4.清空项目();
				编辑框1.置内容(文本操作.删全部空(返回信息));
				影片评分 = "暂无";
				影片类型 = 读写设置.读取设置("播放分类");
				影片主演 = 读写设置.读取设置("播放介绍");
				正则_电视.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"\,\"cnsite\"\:\"(.*?)\"\,\"vip");

				while(十九电视 != 正则_电视.取匹配数量()){
					名称 = 正则_电视.取子匹配文本(十九电视,1);
					类型 = 正则_电视.取子匹配文本(十九电视,2);
					标签1.置标题("片名：" + 读写设置.读取设置("播放标题") + "<br><br>" + 影片主演 + "<br><br>影片类型：" + 影片类型 + "<br><br>影片评分：" + 影片评分 + "<br><br>");
					列表框3.添加项目(加密操作1.usc2转ansi(类型),名称,"","");
					图片框_图片.置图片(读写设置.读取设置("播放图片"));
					十九电视 = 十九电视 + 1;
				}
				}else{
				对话框1.弹出提示("加载失败,请稍后重试");
	}
}

function 网络操作_综艺_发送完毕(发送结果,返回信息){
	列表框3.清空项目();
		var 图片;
		var 标题;
		var 类型;
		var 集数;
		var 介绍;
		var 地址;
		var 评分;
		var 源码;
		var 名称;
		var 影片类型;
		var 影片主演;
		var 影片评分;
		var 猜你喜欢;
		var 十九综艺= 0;
		if(发送结果 == true ){
				列表框4.清空项目();
				编辑框1.置内容(文本操作.删全部空(返回信息));
				影片评分 = "暂无";
				影片类型 = 读写设置.读取设置("播放分类");
				影片主演 = 读写设置.读取设置("播放介绍");
				正则_综艺.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"\,\"cnsite\"\:\"(.*?)\"\,\"vip");

				while(十九综艺 != 正则_综艺.取匹配数量()){
					名称 = 正则_综艺.取子匹配文本(十九综艺,1);
					类型 = 正则_综艺.取子匹配文本(十九综艺,2);
					标签1.置标题("片名：" + 读写设置.读取设置("播放标题") + "<br><br>" + 影片主演 + "<br><br>影片类型：" + 影片类型 + "<br><br>影片评分：" + 影片评分 + "<br><br>");

					图片框_图片.置图片(读写设置.读取设置("播放图片"));
					十九综艺 = 十九综艺 + 1;
				}
				}else{
				对话框1.弹出提示("加载失败,请稍后重试");
	}
}

function 网络操作_动漫_发送完毕(发送结果,返回信息){
	列表框3.清空项目();
		var 图片;
		var 标题;
		var 类型;
		var 集数;
		var 介绍;
		var 地址;
		var 评分;
		var 源码;
		var 名称;
		var 影片类型;
		var 影片主演;
		var 影片评分;
		var 猜你喜欢;
		var 十九动漫= 0;
		if(发送结果 == true ){
				列表框4.清空项目();
				编辑框1.置内容(文本操作.删全部空(返回信息));
				影片评分 = "暂无";
				影片类型 = 读写设置.读取设置("播放分类");
				影片主演 = 读写设置.读取设置("播放介绍");
				正则_动漫.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"\,\"cnsite\"\:\"(.*?)\"\,\"vip");

				while(十九动漫 != 正则_动漫.取匹配数量()){
					名称 = 正则_动漫.取子匹配文本(十九动漫,1);
					类型 = 正则_动漫.取子匹配文本(十九动漫,2);
					标签1.置标题("片名：" + 读写设置.读取设置("播放标题") + "<br><br>" + 影片主演 + "<br><br>影片类型：" + 影片类型 + "<br><br>影片评分：" + 影片评分 + "<br><br>");
					列表框3.添加项目(加密操作1.usc2转ansi(类型),名称,"","");
					图片框_图片.置图片(读写设置.读取设置("播放图片"));
					十九动漫 = 十九动漫 + 1;
				}
				}else{
				对话框1.弹出提示("加载失败,请稍后重试");
	}
}

function 标题栏1_左侧图标被单击(){
	窗口操作.销毁窗口("bofangye.html");
}

function 网络操作_剧集_发送完毕(发送结果,返回信息){
	var 剧集计次= 0;
	var 集数;
	var 地址;
	var Test;
	var Test1;
	var TestS;
	var TestS1;
	var 地址;
	var Take_Out;

	if(文本操作.寻找文本(返回信息,"display:block",0) == -1 ){
		Take_Out = 返回信息;
		编辑框2.置内容(Take_Out );
	}else{
		Take_Out = 文本操作.取指定文本(返回信息,"display:block","succ");
		编辑框2.置内容(Take_Out );

	}

	正则1.创建正则(编辑框2.取内容(),编辑框3.取内容());

		while(剧集计次 != 正则1.取匹配数量()){
		Test = 正则1.取子匹配文本(剧集计次,1);
		TestS = 正则1.取子匹配文本(剧集计次,3);

		Test1 = 文本操作.子文本替换(Test ,"\\\"","");
		集数 = 文本操作.子文本替换(Test1 ,"\\\\","");

		TestS1 = 文本操作.子文本替换(TestS ,"\\\"","");
		地址 = 文本操作.子文本替换(TestS1 ,"\\\\","");

		列表框4.添加项目(读写设置.读取设置("播放标题") + "&nbsp;第" + 集数 + "集",地址,"","");

		剧集计次 = 剧集计次 + 1;
		}
}

function 网络操作_正则文本_发送完毕(发送结果,返回信息){
	编辑框3.置内容(返回信息);
}

function 加载播放页_切换完毕(附加参数){
	窗口操作.锁定屏幕方向(1);
}

function 列表框3_表项被单击(项目索引,项目标题,项目标记){
	var 地址;
		var 集数;
		var En_Site;
		var Cate;
		var Id;
		var 计次= 0;

	switch(读写设置.读取设置("播放分类")){

				case "电影" :
				读写设置.保存设置("横屏播放地址",列表框3.取项目标记(项目索引));
				    var time = localStorage.getItem('user_time');
    var user_id = localStorage.getItem('user_id');
    var username = localStorage.getItem('user_name');
    var timestamp = Date.parse(new Date())/1000;
    if(user_id==0){
      api.alert({
          title: '温馨提示',
          msg: '请先登陆后使用',
      });
      api.openWin({
          name: 'login',
          url: './login.html',
          delay: 300
      });
      return;

    }

    if (time>timestamp) {

      setTimeout("playRadio();",1000);
      var delay = 0;
      if(api.systemType != 'ios'){
          delay = 300;
      }
      api.openWin({
             name: 'fenlei_play',
              url: './fenlei_play.html',
              delay: 300,
              pageParam:{
              		url:jx_url2+读写设置.读取设置("横屏播放地址"),
              		fenleiUrl:读写设置.读取设置("横屏播放地址"),
              		title:(读写设置.读取设置("播放标题")),
              		needRecordHistory: true
              	},
              bgColor: '#000000'
      });

    }else if (time == -1) {

      setTimeout("playRadio();",2000);
      var delay = 0;
      if(api.systemType != 'ios'){
          delay = 300;
      }
      api.openWin({
             name: 'fenlei_play',
              url: './fenlei_play.html',
              delay: 300,
              pageParam:{
              		url:jx_url2+读写设置.读取设置("横屏播放地址"),
              		fenleiUrl:读写设置.读取设置("横屏播放地址"),
              		title:(读写设置.读取设置("播放标题")),
              		needRecordHistory: true
              	},
              bgColor: '#000000'
      });


    }else if (time<timestamp){
      var dialogBox = api.require('dialogBox');
      dialogBox.alert({
          texts: {
              content: '您的VIP会员已过期，或者未登录！',
              leftBtnTitle: '去登录',
              rightBtnTitle: '去续费'
          },
          styles: {
              bg: '#fff',
              w: 300,
              content: {
                  color: '#000',
                  size: 14
              },
              left: {
                  marginB: 7,
                  marginL: 20,
                  w: 130,
                  h: 35,
                  corner: 2,
                  bg: '#ff7600',
                  color: '#fff',
                  size: 14
              },
              right: {
                  marginB: 7,
                  marginL: 10,
                  w: 130,
                  h: 35,
                  corner: 2,
                  bg: '#ff7600',
                  color: '#fff',
                  size: 14
              }
          }
      }, function(ret) {
          if (ret.eventType == 'left') {
            api.openWin({
                name: 'login',
                url: './login.html',
                delay: 300
            });
              var dialogBox = api.require('dialogBox');
              dialogBox.close({
                  dialogName: 'alert'
              });
          }else if (ret.eventType == 'right') {
            api.openWin({
                name: 'open_vip_win',
                url: './open_vip_win.html',
                delay: 300
            });
            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'alert'
            });
          }
      });
    }

				break;
				case "电视" :
					标签5.置标题("当前选择来源&nbsp;:&nbsp;" + 列表框3.取项目标题(项目索引) + "&nbsp;&nbsp;&nbsp;");
					列表框4.清空项目();
					var 电视选集= 0;
					面板6.置可视(true);
					面板7.置可视(true);
					正则_集数.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"");
					while(电视选集 != 正则_集数.取匹配数量()){
						En_Site = 正则_集数.取子匹配文本(电视选集,1);
						列表框1.添加项目(En_Site);
						电视选集 = 电视选集 + 1;
					}
						Cate  = 文本操作.取指定文本(编辑框1.取内容(),"cat:\\'","\\',");
						Id  = 文本操作.取指定文本(编辑框1.取内容(),"id:\\'","\\',");
						网络操作_剧集.发送网络请求("http://www.360kan.com/cover/switchsite?site=" + 列表框1.取项目标题(项目索引) + "&id=" + Id + "&category=" + Cate,"get","html","",5000);
						弹出面板1.显示();
				break;
				case "动漫" :
					标签5.置标题("当前选择来源&nbsp;:&nbsp;" + 列表框3.取项目标题(项目索引) + "&nbsp;&nbsp;&nbsp;");
					列表框4.清空项目();
					var 动漫选集= 0;
					面板6.置可视(true);
					面板7.置可视(true);
					正则_集数.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"");
					while(动漫选集 != 正则_集数.取匹配数量()){
						En_Site = 正则_集数.取子匹配文本(动漫选集,1);
						列表框1.添加项目(En_Site);
						动漫选集 = 动漫选集 + 1;
					}
						Cate  = 文本操作.取指定文本(编辑框1.取内容(),"cat:\\'","\\',");
						Id  = 文本操作.取指定文本(编辑框1.取内容(),"id:\\'","\\',");
						网络操作_剧集.发送网络请求("http://www.360kan.com/cover/switchsite?site=" + 列表框1.取项目标题(项目索引) + "&id=" + Id + "&category=" + Cate,"get","html","",5000);
						弹出面板1.显示();
				break;
				case "综艺" :
					标签5.置标题("当前选择来源&nbsp;:&nbsp;" + 列表框3.取项目标题(项目索引) + "&nbsp;&nbsp;&nbsp;");
					列表框4.清空项目();
					var 综艺选集= 0;
					面板6.置可视(true);
					面板7.置可视(true);
					正则_集数.创建正则(编辑框1.取内容(),"{\"ensite\"\:\"(.*?)\"");
					while(综艺选集 != 正则_集数.取匹配数量()){
						En_Site = 正则_集数.取子匹配文本(综艺选集,1);
						列表框1.添加项目(En_Site);
						综艺选集 = 综艺选集 + 1;
					}
						Cate  = 文本操作.取指定文本(编辑框1.取内容(),"cat:\\'","\\',");
						Id  = 文本操作.取指定文本(编辑框1.取内容(),"id:\\'","\\',");
						网络操作_剧集.发送网络请求("http://www.360kan.com/cover/switchsite?site=" + 列表框1.取项目标题(项目索引) + "&id=" + Id + "&category=" + Cate,"get","html","",5000);
						弹出面板1.显示();
		break;
	}

}

    function 列表框4_表项被单击(项目索引,项目标题,项目标记){
	读写设置.保存设置("横屏播放集数",列表框4.取项目标题(项目索引));
	读写设置.保存设置("横屏播放地址",列表框4.取项目标记(项目索引));
    var time = localStorage.getItem('user_time');
    var user_id = localStorage.getItem('user_id');
    var username = localStorage.getItem('user_name');
    var timestamp = Date.parse(new Date())/1000;
    if(user_id==0){
      api.alert({
          title: '温馨提示',
          msg: '请先登陆后使用',
      });
      api.openWin({
          name: 'login',
          url: './login.html',
          delay: 300
      });
      return;

    }

    if (time>timestamp) {

      setTimeout("playRadio();",1000);
      var delay = 0;
      if(api.systemType != 'ios'){
          delay = 300;
      }
      api.openWin({
             name: 'fenlei_play',
              url: './fenlei_play.html',
              delay: 300,
              pageParam:{
              		url:jx_url2+读写设置.读取设置("横屏播放地址"),
              		fenleiUrl:读写设置.读取设置("横屏播放地址"),
              		title:(读写设置.读取设置("横屏播放集数")),
              		needRecordHistory: true
              	},
              bgColor: '#000000'
      });

    }else if (time == -1) {

      setTimeout("playRadio();",2000);
      var delay = 0;
      if(api.systemType != 'ios'){
          delay = 300;
      }
      api.openWin({
             name: 'fenlei_play',
              url: './fenlei_play.html',
              delay: 300,
              pageParam:{
              		url:jx_url2+读写设置.读取设置("横屏播放地址"),
              		fenleiUrl:读写设置.读取设置("横屏播放地址"),
              		title:(读写设置.读取设置("横屏播放集数")),
              		needRecordHistory: true
              	},
              bgColor: '#000000'
      });


    }else if (time<timestamp){
      var dialogBox = api.require('dialogBox');
      dialogBox.alert({
          texts: {
              content: '您的VIP会员已过期，或者未登录！',
              leftBtnTitle: '去登录',
              rightBtnTitle: '去开通'
          },
          styles: {
              bg: '#fff',
              w: 300,
              content: {
                  color: '#000',
                  size: 14
              },
              left: {
                  marginB: 7,
                  marginL: 20,
                  w: 130,
                  h: 35,
                  corner: 2,
                  bg: '#ff7600',
                  color: '#fff',
                  size: 14
              },
              right: {
                  marginB: 7,
                  marginL: 10,
                  w: 130,
                  h: 35,
                  corner: 2,
                  bg: '#ff7600',
                  color: '#fff',
                  size: 14
              }
          }
      }, function(ret) {
          if (ret.eventType == 'left') {
            api.openWin({
                name: 'login',
                url: './login.html',
                delay: 300
            });
              var dialogBox = api.require('dialogBox');
              dialogBox.close({
                  dialogName: 'alert'
              });
          }else if (ret.eventType == 'right') {
            api.openWin({
                name: 'open_vip_win',
                url: './open_vip_win.html',
                delay: 300
            });
            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'alert'
            });
          }
      });
    }

  }
