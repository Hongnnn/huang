//axios-init.js 
import axios from 'axios'

let loadingInstance; //创建Loading 的实例

 axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = false;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization


axios.defaults.transformRequest = function (data) {
//data = Qs.stringify(data);
data = JSON.stringify(data);
  return data;
};
//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(config => {
       //loading开始
        // loadingInstance.start();
        return config;
    }, error => {
        //出错，也要loading结束
        // loadingInstance.close();
        return Promise.reject(error);
    });
 

 // 配置响应拦截器 
 axios.interceptors.response.use(res => {
     //loading结束
    //  loadingInstance.close();
     //这里面写所需要的代码
     if(res.data.code =='401'){
         //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
         return false;
     };
     return Promise.resolve(res);
 }, error => {
    //  loadingInstance.close();
     return Promise.reject(error);
 });
     

 
