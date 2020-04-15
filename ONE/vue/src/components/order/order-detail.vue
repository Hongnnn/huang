<template>
  <div class="detail">
    <div >
      <mt-header fixed title="订单详情">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="order-lists">
      <p>订单列表</p>
      <ul>
        <li>
          <div class="orderd-content">
            <div class="orderd-left">
              <img src="../../style/img/aa.jpg" alt />
              <h5>书本</h5>
            </div>
            <h5 class="orderd-count">数量：1</h5>
            <h5>￥1</h5>
          </div>
          <div class="orderd-jifen"><h5> 总积分：111</h5>
          </div>
          
        </li>
      </ul>
    </div>
    <div class="order-infor">
        <p>订单信息</p>
        <h4>下单人:111</h4>
        <h4>手机号码:111</h4>
        <h4>下单时间:111</h4>

    </div>
      <div class="order-huishou">
        <p>回收信息</p>
        <h4>回收柜：11</h4>
        <h4>密码：44</h4>
        <h4>处理人:111</h4>
        <h4>手机号码:111</h4>
        
    </div>
  </div>
</template>
<style lang="scss" scoped>
.detail{
    position: relative;
}
.order-lists {
    margin-top: .8rem;
  width: 100%;
  background: white;
  padding: 0.2rem;
  li{
      display: block;
  }
  p{
      font-size: .35rem;
    color: black;
  }
}
.orderd-content {
  display: flex;
  width: 100%;
  .orderd-left {
    display: flex;
    width: 70%;

    align-items: center;
    img {
      height: 0.7rem;
      padding-right: 0.1rem;
    }
  }
  h5 {
    line-height: 1rem;
  }
  .orderd-count {
    width: 23%;
  }
}
.orderd-jifen{
       padding-left: 78%;
    h5{
            color: black;
    }
}
.order-infor,.order-huishou{
   margin-top: .2rem;
    background: white;
    padding: 0.2rem;
    p{
            font-size: .35rem;
    color: black;
    }
    h4{
            font-size: .3rem;
    padding-bottom: .1rem;
    font-weight: 400;
    }
    
}
.order-huishou{
    top:48%

}
</style>>
