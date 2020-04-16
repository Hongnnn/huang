<template>
  <div class="detail">
    <div>
      <mt-header fixed title="订单详情">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="order-lists">
      <p>订单列表</p>
      <ul>
        <li v-for="(item,index) in params.orderlist" :key="index">
          <div class="orderd-content">
            <div class="orderd-left">
              <img src="../../style/img/aa.jpg" alt />
              <h5>{{item.name}}</h5>
            </div>
            <h5 class="orderd-count">*{{item.count}}</h5>
            <h5>￥{{item.price}}</h5>
          </div>
        </li>
        <div class="orderd-jifen">
          <h5>总积分：{{totalprice}}</h5>
        </div>
      </ul>
    </div>
    <div class="order-infor">
      <p>订单信息</p>
      <h4>下单人:{{params.ordername}}</h4>
      <h4>手机号码:{{params.orderphone}}</h4>
      <h4>下单时间:{{ordertime}}</h4>
    </div>
    <div class="order-huishou">
      <p>回收信息</p>
      <h4>回收柜：{{params.ordernumber}}</h4>
      <h4>密码：{{params.orderpsw}}</h4>
      <h4>处理人:{{params.receptname}}</h4>
      <h4>手机号码:{{params.receptphone}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: [],
      orderid: ""
    };
  },
  created() {
    this.getDetail();
  },
  computed: {
    totalprice() {
      let total = 0;
      let bb = [];
      bb = this.params.orderlist;
      if (!bb) {
        return;
      }
      bb.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    ordertime() {
      let oldtime = this.params.ordertime;
      let date = new Date(oldtime);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  methods: {
    getDetail() {
      let orderid = this.$route.query.userid;
      console.log(orderid);
      let url = `http://106.15.136.244:8080/order/getOrderDetail?orderId=${orderid}`;
      console.log(url);
      this.$axios
        .get(url)
        .then(res => {
          this.params = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  position: relative;
}
.order-lists {
  margin-top: 0.8rem;
  width: 100%;
  background: white;
  padding: 0.2rem;
  li {
    display: block;
  }
  p {
    font-size: 0.35rem;
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
.orderd-jifen {
  padding-left: 78%;
  h5 {
    color: black;
  }
}
.order-infor,
.order-huishou {
  margin-top: 0.2rem;
  background: white;
  padding: 0.2rem;
  p {
    font-size: 0.35rem;
    color: black;
  }
  h4 {
    font-size: 0.3rem;
    padding-bottom: 0.1rem;
    font-weight: 400;
  }
}
.order-huishou {
  top: 48%;
}
</style>>
