// 入口文件
import Vue from 'vue'
import app from './App.vue'
// import { Header, Swipe, SwipeItem,Navbar, TabItem} from 'mint-ui'
import  VueRouter  from 'vue-router'
import VueSource from 'vue-resource'
import router  from './router.js'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueSource)
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);




import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './style/rem'




var vm = new Vue({

    el:'#app'   , 
    render:c =>c(app),
    router

})