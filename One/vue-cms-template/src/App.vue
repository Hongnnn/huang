<template>
  <div >
    <!-- <header> -->
     
      <!-- <routr-view>
        table -->
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/home" >
            <span class="mui-icon mui-icon-home"></span>
              <span class="mui-tab-label">首页
            </span>
          </router-link >
               <router-link  class="mui-tab-item" to="/find" >
            <span class="mui-icon mui-icon-eye"></span>
               <span class="mui-tab-label">发现
            </span>
          </router-link >
             <router-link   class="mui-tab-item" to="/fa">
            <span class="mui-icon mui-icon-plus"></span>
               <span class="mui-tab-label">发布
            </span>
          </router-link >
         
           <router-link   class="mui-tab-item" to="/order">
            <span class="mui-icon mui-icon-bars"></span>
               <span class="mui-tab-label">订单
            </span>
          </router-link >
           <router-link  class="mui-tab-item" to="/my" >
            <span class="mui-icon mui-icon-person"></span>
               <span class="mui-tab-label">我的
            </span>
          </router-link >
        </nav>   

  
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-ol{
padding-top: 30px;
}
</style>
 