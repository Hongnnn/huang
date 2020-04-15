<template>
  <div class="address-add-content">
    <div class="cartorder-title">
      <mt-header fixed title="确认回收">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <my-cell>
      <span slot="my-cell-title">下单人</span>
      <span slot="my-cell-val">
        <input class="address-input" type="text" placeholder="下单人" v-model="receiverName" />
      </span>
    </my-cell>
    <my-cell>
      <span slot="my-cell-title">手机号码</span>
      <span slot="my-cell-val">
        <input class="address-input" type="text" placeholder="手机号码" v-model="receiverPhone" />
      </span>
    </my-cell>
    <my-cell @click.native="chooseCity">
      <span slot="my-cell-title">回收站点</span>
      <span slot="my-cell-val">
        <input
          class="address-input"
          type="text"
          v-model="chooseAddress"
          placeholder="点击选择回收站点"
          disabled="disabled"
        />
      </span>
      <span slot="my-cell-arrow">
        <i class="iconfont icon-arrow-right color-gray"></i>
      </span>
    </my-cell>
    <mt-popup v-model="popupVisible" position="bottom" class="choose-city">
      <location-picker
        ref="locationPicker"
        @getChooseAddress="getChooseAddress"
        :provinceData="provinceData"
        :cityData="cityData"
        :districtData="districtData"
      ></location-picker>
    </mt-popup>
    <div class="caimenu">
      <p>回收菜单</p>
      <ul>
        <li v-for="food in  selectList">
          <h6 class="goodname">{{food.name}}</h6>
          <h6 class="goodnumber">*{{food.count}}</h6>
          <h6 class="goodprice">{{food.price}}</h6>
        </li>
      </ul>
      <h5 class="jitext">共计积分：{{totalprice}}</h5>
    </div>
    <div class="orderbuy" @click="orderBtn">确认</div>
   
  </div>
</template>
 
<script>
import MyCell from "../shopcar/mycell.vue";
import LocationPicker from "../shopcar/cartaddress.vue";
import axios from "axios";
import Qs from "qs";
import { log } from 'util';

export default {
  name: "AddressAddItem",
  components: {
    MyCell,
    LocationPicker
  },
  data() {
    return {
      addressText: false,
      popupVisible: false,
      chooseAddress: "",
      receiverName: "",
      receiverPhone: "",
      provinceData: "",
      cityData: "",
      districtData: "",
      selectList: [],
      selectarr:[]

    };
  },
  created() {
    this.provinceData = this.$route.params.receiveProvince;
    this.cityData = this.$route.params.receiveCity;
    this.districtData = this.$route.params.receiveDistrict;
    this.selectList = this.$route.query.selectfood;
    console.log(this.selectList);
    
 
    

  
  },
  computed: {
    totalprice() {
      let total = 0;
      let bb=this.selectList
      bb.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    
  },
  mounted() {
    // this.getData();
    
  },
  methods: {
    
    orderBtn() {
      // })
      // .then(function(response){

      // }
      let a = localStorage.getItem("token");
      console.log(a);

      if (a == null || a == undefined) {
        this.$router.push({ path: "/login" });
      } else {
        let oderdata = this;
        let ordertime =  (new Date()).valueOf()
        console.log(oderdata.receiverName)
       
        
        oderdata.$axios
          .post("http://106.15.136.244:8080/order/createOrder", {
            'ordername': oderdata.receiverName,
            'orderphone': oderdata.receiverPhone,
            'orderlist': oderdata.selectList,
            'orderaddress': oderdata.chooseAddress,
            'orderprice': oderdata.orderprice,
            'ordertime':ordertime,
            'token': a
          })
          .then(function(response) {
            console.log(response.data)
            if (response.data.flag == true) {
              alert("下单成功");
              oderdata.$router.push({ path: "/" });
            } else {
              alert("下单失败");
             } 
                   
              
            })
          .catch(function(error){
            console.log(error)
          })
      }
    },

    chooseCity() {
      this.popupVisible = true;
    },
    getChooseAddress(fullCity, closeVal) {
      this.chooseAddress = fullCity;
      this.popupVisible = closeVal;
    },
    getData: function() {
      this.address.receiveId = this.$route.params.receiveId;
      if (this.$route.params.receiveId !== "-1") {
        // 加载信息
        this.chooseAddress =
          this.$route.params.receiveProvince +
          "-" +
          this.$route.params.receiveCity +
          "-" +
          this.$route.params.receiveDistrict;
        this.$refs.locationPicker.myAddressPrivince = this.$route.params.receiveProvince;
        this.$refs.locationPicker.myAddressCity = this.$route.params.receiveCity;
        this.$refs.locationPicker.myAddressDistrict = this.$route.params.receiveDistrict;
        this.address.receiverName = this.$route.params.receiverName;
        this.address.receiverPhone = this.$route.params.receiverPhone;
        this.address.receiveAddress = this.$route.params.receiveAddress;
        this.address.postalCode = this.$route.params.postalCode;
      }
    }
  }
};
</script>
 
<style scoped lang="scss">
.address-add-content {
  position: absolute;
  top: 0.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  .my-cell {
    .my-cell-right {
      .address-input {
        font-size: 0.3rem;
        line-height: 1rem;

        &:disabled {
          background-color: #fff;

          color: #333;
        }
      }
      .my-cell-arrow {
        .iconfont {
          &.color-gray {
            color: #999;
          }
        }
      }
    }
  }
  .address-detail-content {
    font-size: 0;
    background-color: #fff;
    .p-title {
      color: #666;
      font-size: 0.37rem;
      padding: 0.3rem 0.3rem 0;
    }
    .address-detail {
      width: 100%;
      margin: 0;
      height: 2rem;
      padding: 0.2rem 0.3rem;
      font-size: 0.37rem;
    }
  }
}
.choose-city {
  width: 100%;
}
.caimenu {
  margin-top: 0.2rem;
  background: white;
  p {
    font-size: 0.3rem;
    color: black;
    padding-top: 0.1rem;
  }
  li {
    margin-top: 0.2rem;
  }
  .goodname {
    width: 69%;
    font-size: 0.3rem;
  }
  .goodnumber {
    width: 18%;
  }
}

.cartorder-footer {
  height: 0.8rem;
  background: chartreuse;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 0.8rem;
}
.picker {
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
}
.backPickerSubBtn {
  position: absolute;
  right: 0.5rem;
  top: 0.2rem;
}
.slecctZhan {
  float: left;
  margin-right: 0.5rem;
}
.jitext {
  text-align: right;
  padding-top: 0.2rem;
  padding-right: 0.4rem;
  color: #333;
  font-size: 0.3rem;
}
.orderbuy {
  height: 0.8rem;
  background: #78e478;
  text-align: center;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>