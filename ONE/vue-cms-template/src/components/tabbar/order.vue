<template>
    <div>
          <mt-header fixed title="我的订单"></mt-header>
            <div class="nav-title">
       <mt-navbar v-model="selected">
  <mt-tab-item id="1">进行中</mt-tab-item>
  <mt-tab-item id="2">已完成</mt-tab-item>
  <mt-tab-item id="3">未完成</mt-tab-item>
</mt-navbar></div>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
        
    </div>
</template>

<script>
import '../../lib/mui/css/order.scss'
export default {
     name: 'nav-title',  
    data(){
        return{
            selected:'1'
        }
        }
}

</script>
<style lang="scss" scoped>

</style>