mui.init({swipeBack: false
,gestureConfig: {tap: true,doubletap: true,longtap: true}});

var 标题栏1 = new 标题栏("标题栏1",null,null,标题栏1_左侧图标被单击);
var 标签1 = new 标签("标签1",null);
var 标签2 = new 标签("标签2",null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 标签3 = new 标签("标签3",null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
var 对话框1 = new 对话框("对话框1",null,null,null);
var 网络操作2 = new 网络操作("网络操作2",网络操作2_发送完毕);
var 仔仔1 = new 仔仔("仔仔1",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
var 标签4 = new 标签("标签4",null);
var 标签5 = new 标签("标签5",标签5_被单击);
var 网络操作3 = new 网络操作("网络操作3",网络操作3_发送完毕);
if(mui.os.plus){
    mui.plusReady(function() {
        登陆_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        登陆_创建完毕();
        
    }
}

function 登陆_创建完毕(){
	窗口操作.引入css文件("css/zava.css");


	document.querySelectorAll("#标题栏1 .mui-title")[0].style.fontFamily = "微软雅黑";
	标题栏1.置标题("账号登陆");


	document.getElementById("标签1").parentNode.style = "margin: 10px 10px 0 10px;display: block;padding: 0;";
	document.getElementById("标签1").style.cssText = "background-color:rgba(0,0,0,0.5)!important; filter:Alpha(opacity=30);height: 53px;width: 80%;padding: 1;margin-top: 150px;margin-left: 34px";/*用户名框透明度*/
	标签1.置标题("<input type='text' id=账号 style='width:100%;border-radius:0px;color:#fcff02;background:rgba(0,0,0,0);border:0px;margin: 0;' placeholder='请输入用户名'/>");

	document.getElementById("标签2").parentNode.style = "margin: 10px 10px 0 10px;display: block;padding: 0;";
	document.getElementById("标签2").style.cssText = "background-color:rgba(0,0,0,0.5)!important; filter:Alpha(opacity=30);height: 53px;width: 80%;padding: 1;margin-top: 3px;margin-left: 34px";/*密码框透明度*/
	标签2.置标题("<input type='password' id=密码 style='width:100%;border-radius:0px;color:#fcff02;background:rgba(0,0,0,0);border:0px;margin: 0;' placeholder='请输入密码'/>");




	document.getElementById("按钮1").style.cssText = "background: rgba(0,0,0,0.8);border-radius: 0;"/*按钮背景透明度，调0.2，border-radius: 0 这是调按钮圆角 0代表不圆角*/
	document.getElementById("按钮1").className = "dlbtn";
	按钮1.置可视(true);
	document.getElementById("按钮1").style.width = "78%";/*按钮宽度*/
	document.getElementById("按钮1").style.top = "-17px";/*按钮宽度*/
	document.getElementById("按钮1").style.height = "50px";/*按钮高度*/
	document.getElementById("按钮1").style.boxShadow = "rgb(225,225,225) 0px 0px 0px ";/*按钮阴影颜色*/



	document.getElementById("标签3").style.cssText = "text-align: -webkit-center;width: 100%;color: rgb(255,255,255);font-size: 18px;margin: 20px 0 0 0;padding: 0px;font-family: 黑体;";

	标签3.置标题("<span id=一键登陆 style='margin-right: 10px;border-right: 1px solid #FFF;padding-right: 10px;'>一键登录</span><span id=注册按钮 >注册账号</span>"); /*border-right: 0px 0px为竖线。设置1就显示了，*/

	document.getElementById("一键登陆").addEventListener("tap", function() { 一键登陆();}, false);

	document.getElementById("注册按钮").addEventListener("tap", function() { 窗口操作.切换窗口("zhuce.html");}, false);

	/*document.getElementById("标签4").style.cssText = "    width: 100%;color: #777;font-size: 14px;margin: 80px 0px 0px 0px;text-align: center;font-family: 黑体;";
	标签4.置标题("<div style='width:34%;float: left;'> <hr align='center' width='100%' color='#ddd' size='1'></div>第三方登录<div style='width:34%;    float: right;'><hr align='center' width='100%' color='#ddd' size='1'></div>");
	document.getElementById("标签5").style.cssText = "width: 100%;margin: 0px 0px 0px 0px;padding: 0px;text-align: -webkit-center;font-family: 黑体;";
	标签5.置标题("<img src=images/qq.jpg style='width:50px;' /><p style='margin-top: 10px;'>QQ登录</p>");
    微信登录1.获取登录服务列表();*/




}
function 一键登陆(){
	对话框1.显示等待框("");
	网络操作2.发送网络请求("http://ttys.cy500w.top/vip/api.php","get","json","lx=yjdl&uuid=" + 仔仔1.命令_获取UUID());

}
function 网络操作1_发送完毕(发送结果,返回信息){
	对话框1.关闭等待框();
	if (发送结果 == true ){
		if (返回信息.zt == "-1"){
			对话框1.信息框("","账号不存在");
		}else if (返回信息.zt == "0"){
			对话框1.信息框("","密码错误");
		}else {
			读写设置.保存设置("name",取内容("账号"));
			读写设置.保存设置("password",取内容("密码"));
			读写设置.保存设置("vip",返回信息.vip);
			窗口操作.执行代码("wode.html","刷新登陆()");
			窗口操作.销毁窗口("denglu.html");

		}
	}else {
		对话框1.弹出提示("网络错误");
	}
}
function 取内容(id){
	return document.getElementById(id).value;
}

 function 按钮1_被单击(){
	if (取内容("账号") == ""){
		对话框1.弹出提示("请输入账号");
	}else if (取内容("密码") == ""){
		对话框1.弹出提示("请输入密码");
	}else {
		对话框1.显示等待框("");
		网络操作1.发送网络请求("http://ttys.cy500w.top/vip/api.php","get","json","lx=yhdl&name=" + 取内容("账号") + "&password=" +取内容("密码"));
	}
}

function 网络操作2_发送完毕(发送结果,返回信息){
	对话框1.关闭等待框();
	if (发送结果 == true ){
		读写设置.保存设置("name",返回信息.name);
		读写设置.保存设置("password",返回信息.password);
		读写设置.保存设置("vip",返回信息.vip);
		窗口操作.执行代码("wode.html","刷新登陆()");
		窗口操作.销毁窗口("denglu.html");
	}else {
		对话框1.弹出提示("网络错误");
	}
}


function 标签5_被单击(){
	登录QQ();
}

function 微信登录1_登录完毕(登录结果,用户信息){
	var json = 转换操作.文本转json(用户信息);
	对话框1.显示等待框("");

	网络操作3.发送网络请求("http://ttys.cy500w.top/vip/api.php","get","json","lx=qqdl&name=" + json.nickname + "&tx=" + json.figureurl_2 + "&openid=" + json.openid + "&uuid=" + 仔仔1.命令_获取UUID());
}

function 网络操作3_发送完毕(发送结果,返回信息){
	对话框1.关闭等待框();
	if (发送结果 == true ){
		读写设置.保存设置("name",返回信息.name);
		读写设置.保存设置("password",返回信息.password);
		读写设置.保存设置("vip",返回信息.vip);
		窗口操作.执行代码("wode.html","刷新登陆()");
		窗口操作.销毁窗口("denglu.html");

	}else {
		对话框1.弹出提示("网络错误");
	}
}

function 标题栏1_左侧图标被单击(){
	窗口操作.销毁窗口("denglu.html");
}