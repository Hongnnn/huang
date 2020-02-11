import VueRouter from 'vue-router'
import Home from './components/tabbar/home.vue'
import Find from './components/tabbar/find.vue'
import Issue from './components/tabbar/issue.vue'
import Order from './components/tabbar/order.vue'
import My from './components/tabbar/my.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home', component:Home},
    {path:'/find', component:Find},
    {path:'/fa', component:Issue},
    {path:'/my', component:My},
    {path:'/order', component:Order},
    
  ],
  linkActiveClass:' mui-active'//覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router