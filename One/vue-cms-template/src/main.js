// 入口文件
import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import  VueRouter  from 'vue-router'
import VueSource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueSource)
Vue.component(Header.name,Header)


import './lib/mui/css/mui.min.css'


var vm = new Vue({

    el:'#app'   ,
    render:c =>c(app)

})