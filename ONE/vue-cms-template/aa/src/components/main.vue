<template>
  <div >
    <!-- <header> -->
     
      <!-- <routr-view>
        table -->
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/"  name="home" exact="" >
            <span class="mui-icon mui-icon-home"></span>
              <span class="mui-tab-label">首页
            </span>
          </router-link >
               <router-link  class="mui-tab-item" to="/find"  name="find" >
            <span class="mui-icon mui-icon-eye"></span>
               <span class="mui-tab-label">发现
            </span>
          </router-link >
             <router-link   class="mui-tab-item" to="/fa" name="fa" >
            <span class="mui-icon mui-icon-plus"></span>
               <span class="mui-tab-label">发布
            </span>
          </router-link >
         
           <router-link   class="mui-tab-item" to="/order" name="order" >
            <span class="mui-icon mui-icon-bars"></span>
               <span class="mui-tab-label">订单
            </span>
          </router-link >
           <router-link  class="mui-tab-item" to="/my" name="my"  >
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
.mui-bar-tab .mui-tab-item.mui-active {
    color: #2eda2e; 
}
</style>


<script>
export default {
  data(){
    return{
      name:this.$route.name,
    }
  }
}
</script>

<style>
.router-link-active{
    color: aqua;
}

</style>
 