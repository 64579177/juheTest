


    function 网络操作(name,eventName){
        this.名称 = name;
        this.服务端返回数据类型 = "";
        this.请求头 = null;
        this.跨域 = false;

        this.取网络状态 = function(){
            return plus.networkinfo.getCurrentType();
            /*plus.networkinfo.CONNECTION_UNKNOW：0  未知状态
              plus.networkinfo.CONNECTION_NONE：1  无网络连接
              plus.networkinfo.CONNECTION_ETHERNET：2 有线网络
              plus.networkinfo.CONNECTION_WIFI：3 WIFI网络
              plus.networkinfo.CONNECTION_CELL2G：4   2G网络
              plus.networkinfo.CONNECTION_CELL3G：5   3G网络
              plus.networkinfo.CONNECTION_CELL4G：6   4G网络
            */
        }

        this.置跨域请求 = function(cross){
            this.跨域 = cross;
        }

        this.置附加请求头 = function(header){
            this.请求头 = header;
        }

        this.置UserAgent = function(ua){
            plus.navigator.setUserAgent(ua, false);
        }

        this.取UserAgent = function(){
            return plus.navigator.getUserAgent();
        }

        this.置Cookie = function(url, value){
            plus.navigator.setCookie(url, value);
        }

        this.取Cookie = function(url){
            return plus.navigator.getCookie(url);
        }

        this.删除全部Cookie = function(){
            return plus.navigator.removeAllCookie();
        }

        this.删除指定Cookie = function(url){
            return plus.navigator.removeCookie(url);
        }

        this.删除会话Cookie = function(){
            return plus.navigator.removeSessionCookie();
        }

        this.发送网络请求 = function (url地址,type请求类型,dataType返回数据类型,data数据,timeout超时){
            this.服务端返回数据类型 = dataType返回数据类型;



            var dataType = "json";
            if(dataType返回数据类型=='txt'||dataType返回数据类型=='html'){
              dataType = 'text'
            }

            //更改为apicloud的a.ajax数据请求
            var inner = function(){
                //alert("url=" + url地址);
                //alert("dataType=" + dataType);

                //alert(typeof(api));
                api.ajax({
                    url: url地址,
              //      method: type请求类型,
                    dataType: dataType,
                    data: {
                        values: {
                            name: 'haha'
                        }
                    }
                },function(ret, err){
                    //alert(  '外网' + JSON.stringify( ret ) );
                    if (ret) {
                        //alert( JSON.stringify( ret ) );
                        complete(true,ret);
                    } else {
                        //alert( JSON.stringify( err ) );
                        complete(false,err);
                    }
                });
              }



            if(url地址.indexOf("http")>-1){
              //alert(typeof(api));
              //setTimeout(function(){
              //  alert(typeof(api));
              //  , 2000);
              if(typeof(api)!='undefined'){
                inner();
              }else {
                var t = setInterval(function(){
                  if(typeof(api)==null){

                  }else {
                    inner();
                    clearInterval(t);
                  }
                }, 100);

              }
            }else{
                //处理../css/css/text.txt这样的本地文件。
                          //alert(dataType返回数据类型);
                          mui.ajax(url地址, {
                                      crossDomain:this.跨域,
                                      type: type请求类型,
                                      headers:this.请求头,
                                      dataType: dataType返回数据类型,
                                      data: data数据,
                                      timeout: timeout超时,

                                      success: function(response) {
                                          //alert(JSON.stringify(response));
                                          //alert( '本地' + JSON.stringify( response ) );
                                          complete(true,response);
                                      },

                                      error: function(xhr,type,errorThrown) {
                                        //alert( '本地' + JSON.stringify( response ) );
                                          complete(false,type);
                                      }
                                  });
            }






        }

        var complete = function(result,response) {
            if(eventName==null){
                return;
            }
            if(result==true){
                if (this.服务端返回数据类型 === "json") {
                    response = JSON.stringify(response);
                } else if (this.服务端返回数据类型 === "xml") {
                    response = new XMLSerializer().serializeToString(response);
                }
            }
            eventName(result,response);//发送完毕
        };

    }
