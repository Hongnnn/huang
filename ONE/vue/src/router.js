import VueRouter from 'vue-router'
import Home from './components/tabbar/home.vue'
import Find from './components/tabbar/find.vue'
import Issue from './components/tabbar/issue.vue'
import Order from './components/tabbar/order.vue'
import My from './components/tabbar/my.vue'
import main from './components/main.vue'




// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'main',
      component: main,
      redirect:'/home',

   
    
      children: [
        {
          path:'/',
          name:'home',
       
          component: () => import('./components/tabbar/home.vue')
        },
        {
          path:'/find',
          name:'find',
          meta:{
            requireAuth: true,
           
          },
          component: () => import('./components/tabbar/find.vue')
        },
        {
          path:'/fa',
          name:'fa',
          component: () => import('./components/tabbar/find.vue')
        },
        {
          path:'/order',
          name:'order',
          meta:{
            requireAuth: true,
      
          },
          component: () => import('./components/tabbar/order.vue')
        },
        {
          path:'/my',
          name:'my',
          component: () => import('./components/tabbar/my.vue')
        },
     
        
      
        ]
        
    },
    {
      path:'/login',
      name:'login',
      component: () => import('./components/login/login.vue')
    },
    {
      path:'/resign',
      name:'resign',
      component: () => import('./components/login/resign.vue')
    },
    {
      path:'/menu',
      name:'menu',
      component: () => import('./components/tabbar/menu.vue')
    },
    {
      path:'/carteidt',
      name:'carteidt',
      component: () => import('./components/shopcar/carteidt.vue')
    },
    {
      path:'/orderdetail',
      name:'orderdetail',
      component: () => import('./components/order/order-detail.vue')
    }
    
  ], linkActiveClass:' mui-active'//覆盖默认的路由高亮的类
 

})
// router.beforeEach((to,from,next) => {
//   if (to.path === '/login') {
//     next();
//   }
//   else{
//     let token = localStorage.getItem('Authorization');
//     if(token  === null || token === ''){
//       next('/login');
//     }
//     else{
//       next()
//     }
//   }

// });
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {    //若要跳转的页面是登录界面
    next();     //直接跳转
  }
  else if (to.path === '/home'){   //若要跳转的页面是个人界面
    let token = localStorage.getItem('token');    //获取本地存储的token值
    if (token===null||token===''){    //若token为空则验证不成功，跳转到登录页面
      next('/login');
    }
    else{           //不为空则验证成功
      next();
    }
  }
  else{
    next();
  }
});

// 把路由对象暴露出去
export default router