// 入口文件
import Vue from 'vue'
import app from './App.vue'
import Vuex from 'vuex'
// import { Header, Swipe, SwipeItem,Navbar, TabItem} from 'mint-ui'
import  VueRouter  from 'vue-router'
import VueSource from 'vue-resource'
import router  from './router.js'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import axios from 'axios'
import qs  from  'qs'
import store from './store/datatoken'

import axiosInit from "./store/axios-init";



Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueSource)
Vue.use(Vuex)

Vue.prototype.$axios = axios;


// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);




import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './style/rem'



import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video


var vm = new Vue({

    el:'#app'   , 
    render:c =>c(app),
    router,
    store

})

//请求拦截器
axios.interceptors.request.use(config => {
    //判断是否存在token，如果存在将每个页面的header都添加token
      // if(store.state.token){
        
      //   config.headers.common['Authentication-Token']=store.state.token   //此处的XX-Token要根据登录接口中请求头的名字来写
      // }
     
      return config;
    }, error => {
    // 请求错误
      return Promise.reject(error);
    });
     
    //respone拦截器
    axios.interceptors.response.use(
      response => {
        return response;
      },
      
      error => {  //默认除了2XX之外都为错误
        if(error.response){
          switch(error.response.status){
            case 401:
              this.$store.commit('delToken');
              router.replace({ //跳转到登录页面
                path: '/managerLogin',
                query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
              });
          }
        }
        return Promise.reject(error.response);
      }
    );
    
 

