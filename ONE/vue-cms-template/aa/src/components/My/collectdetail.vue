<template>
  <div class="detail">
    <div>
      <mt-header fixed title="订单详情">
        <router-link to="/collect" slot="left">
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
    </div>
    <div class="order-cycle"  v-show="cyclecase">
     <mt-popup v-model="pickvisble" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="slots" @change="onValuesChange" style="width: 8.5rem;" showToolbar>
                    <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="pickvisble = !pickvisble">取消</div>
                        <div class="">请选择回收情况</div>
                        <div class="usi-btn-sure" @click="pickvisble = !pickvisble">确定</div>
                    </div>
                </mt-picker>
           </mt-popup>
<div class="my-content-list" @click="ShouPup">
           <div style="text-align: center;"><span style="    font-weight: 700; ">回收情况:</span><input class="text-hui" v-model="message" ></div>
 </div>
<button class="confirmBtn" @click="cycleBtn">确定回收</button>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: [],
      orderid: "",
      pickvisble:false,
      slots:[{values: ['完全符合', '基本符合', '一半不符合', '完全不符合']}],
      showToolbar: true,
      message: "请选择回收情况",
      cycle:0,
      cyclecase:false
      
    };
  },
  created() {
    this.getDetail();
    let stat= this.$route.query.status
    if(stat==1){
      this.cyclecase=true
    }
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
      console.log(oldtime)

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
  mounted(){},
  methods: {
    cycleBtn(){
      let mes=this.message[0]
      let _this= this
      console.log(mes)

    
      if(mes==='完全符合')
      {
        // console.log('aa')
        _this.cycle=0
      }
      else if(mes==='基本符合'){
         _this.cycle=1
      }
      else if(mes==='一半不符合'){
      _this.cycle=2
      }
      else if(mes ==='完全不符合'){
         _this.cycle =3
      }
      console.log(_this.cycle)
      let orderid= this.$route.query.userid
      this.$axios.post("http://106.15.136.244:8080/order/finishOrder",{
        'orderid':orderid,
        'slot': _this.cycle
      }).then(res=>{
         console.log(res.data)
          if(res.data.flag==true){
           
            alert("完成回收")
             _this.$router.push({path:'/collect'})
          }
          else{
            alert("回收失败")
          }
      })
      .catch(err=>{
        console.log(err)
      })




    },
     ShouPup() {
                this.pickvisble = true
            },
            onValuesChange(picker, values) {
                this.message = values;
                if(values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
 
            },


    choose(){
         this.pickvisble =true
    },
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
.order-cycle{
  background: white;
  margin-top: .3rem
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
.picker-toolbar-title{
  display: flex;
   flex-direction: row;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
}
    
.usi-btn-cancel,.usi-btn-sure {
color: #FF6600
    }
.confirmBtn{
  width: 100%;
  height: .5rem;
  background: green;
  width: 100%;
    height: .8rem;
    font-weight: 800;
    font-size: .3rem;
    background: #4cd964;

}
.text-hui{
      margin: .4rem;
    border: 1px solid;
    padding: .1rem;
}

</style>>
