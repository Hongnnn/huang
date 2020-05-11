<template>
  <div class="my-cell clearfix">
    <div class="my-cell-title">
      <slot name="my-cell-title"></slot>
    </div>
    <div class="my-cell-right">
      <span class="my-cell-val">
        <slot name="my-cell-val"></slot>
      </span>
      <span class="my-cell-arrow">
        <slot name="my-cell-arrow"></slot>
      </span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'MyCell'
}
</script>
 
<style scoped lang="scss">
.my-cell{
  padding: 0 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  line-height: 1rem;
  height: 1rem;
  background-color: #fff;
  font-size: 0;
  width: 100%;
  position: relative;
  .my-cell-title{
    font-size: 0.3rem;
    color: #666;
    vertical-align: middle;
    position: absolute;
    left: 0.3rem;
    top: 0;
  }
  .my-cell-right{
    position: absolute;
    right: 0.3rem;
    top: 0;
    vertical-align: middle;
    .my-cell-val{
      font-size: 0.37rem;
      color: #999;
      img{
        width: 0.7rem;
        height: 0.7rem;
        border: 1px solid #e6e6e6;
        border-radius: 50%;
      }
    }
    .my-cell-arrow{
      float: right;
      padding-left: 0.2rem;
      height: 1.17rem;
      .iconfont{
        color: #666;
        font-size: 0.4rem;
      }
    }
  }
}
</style>