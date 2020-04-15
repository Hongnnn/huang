<template>
    <div>
        <div class="cartorder-title">
          <mt-header fixed title="确认回收"  >
              <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
          </router-link>
          </mt-header>

        </div>
    
    <!-- <div class="root editPsw"  :style="'min-height:'+allHeight +'px'">
      <div class="form">
          <addressPicker class="underLine" :address="address" @choiceAddress='choiceAddress'></addressPicker>
         
      </div>
      <div class="btn">
        <p class="subEdit" v-if="type == '0'" @click="addSave()">保存</p>
        <p class="subEdit" v-else  @click="editSave()">确认修改</p>
      </div>
    </div> -->
    </div>

        <!-- <div class="cartorder-content">
            <div>
             <div class="address" @click="showaddress" >
              
             <mt-picker :slots="myAddressSlots" @change="onMyAddressChange" showToolbar v-show="isShowAddress">
                 <span class="backPickerSubBtn"  @click="addressBtn">确定确定</span>
             <! </mt-picker>
              <p class="slecctZhan">选择回收站 <span class="pickimg" v-show="addressimg"><img src="../../style/my-icon/right.png" alt=""></span></p>
　           　<p  v-show="addressname">{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
            
             

                  
             
              </div>
            
                  
                 </div>
            </div>  --> 
      <!--  
             <div class="address">
                <p>联系方式</p>
                <img src="../../style/my-icon/right.png" alt="">
            </div> -->
            <!-- <div class="caimenu">
                <p>回收菜单</p>
                <ul>
                    <li>
                        <h6 class="goodname">冬瓜炒肉</h6>
                       
                        <h6 class="goodnumber">*1</h6>
                        <h6 class="goodprice">10</h6>

                    </li>
                     <li>
                        <h6 class="goodname">冬瓜炒肉</h6>
                       
                        <h6 class="goodnumber">*1</h6>
                        <h6 class="goodprice">10</h6>

                    </li>
                </ul>
                   <h5>共计: 10 积分</h5>

            
            </div>
           -->
       
       
   
        <!-- <div class="cartorder-footer">
         <span>确定回收</span>
        </div> -->

    <!-- </div></div> -->
</template>
<script>
　import myaddress from '../../../addresss.json'
import { Picker } from 'mint-ui';
import addressPicker from '../shopcar/cartaddress.vue'
export default {
    　name: '',
    　components: {
　　　　'mt-picker': Picker
　　},
props: {},
　　　
      data(){
        
        return{
            type: this.$route.params.type,
      allHeight: 0,
      addressID: '',
      name: '',
      phone: '',
      address: '省,市,区',
      addressdetail: '',
      IsDefault: 1

        }
//             choseaddress:false,
//             addressimg:true,
//             isShowAddress:false,
//             addressname:false,
//             addresstext:true,
//             myAddressSlots: [
// 　　　　　　　　{
// 　　　　　　　　　　flex: 1,
// 　　　　　　　　　　defaultIndex: 1,
// 　　　　　　　　　　values: Object.keys(myaddress), //省份数组
// 　　　　　　　　　　className: 'slot1',
// 　　　　　　　　　　textAlign: 'center'
// 　　　　　　　　}, {
// 　　　　　　　　　　divider: true,
// 　　　　　　　　　　content: '-',
// 　　　　　　　　　　className: 'slot2'
// 　　　　　　　　}, {
// 　　　　　　　　　　flex: 1,
// 　　　　　　　　　　values: [],
// 　　　　　　　　　　className: 'slot3',
// 　　　　　　　　　　textAlign: 'center'
// 　　　　　　　　},
// {
// 　　　　　　　　　　divider: true,
// 　　　　　　　　　　content: '-',
// 　　　　　　　　　　className: 'slot4'
// 　　　　　　　　},{
// 　　　　　　　　　　flex: 1,
// 　　　　　　　　　　values: [],
// 　　　　　　　　　　className: 'slot5',
// 　　　　　　　　　　textAlign: 'center'
// 　　　　　　　　}
//             ],
//             myAddressProvince:'',
// 　　　　　　myAddressCity:'',
// 　　　　　　myAddresscounty:'',

//         }
       
    },
    components: {addressPicker},
    methods:{
//         showaddress(){
//             this.isShowAddress =! this.isShowAddress,
//             this.addresstext=!this.addresstext,
//             this.addressname=!this.addressname,
//             this.addressimg=!this.addressimg


//         },
//         addressBtn (){
//           this.isShowAddress=false,
//           this.addressname =true
// 　　　　},
         
// 　      onMyAddressChange(picker, values) {
// 　　　　　　if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
// 　　　　　　　　picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
// 　　　　　　　　picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
// 　　　　　　　　this.myAddressProvince = values[0];
// 　　　　　　　　this.myAddressCity = values[1];
// 　　　　　　　　this.myAddresscounty = values[2];
// console.log(this.myAddressProvince+　this.myAddressCity+　this.myAddresscounty)
// 　　　　　　}
// 　　　　},
choiceAddress (data) {
      this.address = data
    },
    addSave () {
    },
    editSave () {
    }
  },
  beforeMount () {
    this.type = Number(this.$route.params.type)
    if (this.type !== 0 && this.type !== 1 && this.type !== 2) {
      alert('警告：网址错误')
    }
    if (this.type === 1) {
      let addressInfo = JSON.parse(localStorage.getItem('addressInfo'))
      this.name = addressInfo.Name
      this.phone = addressInfo.Phone
      this.address = addressInfo.Province + ',' + addressInfo.City + ',' + addressInfo.Region
      this.addressdetail = addressInfo.Address
      this.IsDefault = addressInfo.IsDefault ? 1 : 0
      this.addressID = addressInfo.ID
    }
  },

     
 
    mounted(){
// 　　　　this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
// 　　　　　　this.myAddressSlots[0].defaultIndex = 0
　　　　　　// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
　　　　　　//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
  this.allHeight = document.documentElement.clientHeight
　　　　}
};
    


</script>
<style lang="scss">
.cartorder-title{
       background: chartreuse;
    /* height: .5rem; */
    width: 100%;
    text-align: center;
    line-height: 0.8rem;
    justify-content: center;
    align-items: center;
    img{
      display: block;
    float: left;
    height: .5rem;
  
    margin-top: .1rem;
    }

    
}
.cartorder-content{
    margin-top: .8rem;
    .address{
        height: .8rem;
        padding: .1rem;
        background: white;
        border-bottom: 0.5px solid #808080;
       
    }
    .pickimg{
        position: absolute;
    right: .2rem;
}

    
    img{
            height: .5rem;
    }
    h5{
        padding-left: 70%;
        padding-top: .1rem;
    }
    p{
        font-size: .32rem;
        
    color: #29b76a;
    }
    .caimenu{
            margin-top: .2rem;
    background: white;
    li{
            margin-top: .2rem;
    }
        .goodname{
                width: 69%;
        }
        .goodnumber{
            width: 18%;
        }

    }

}
.cartorder-footer{
    height: .8rem;
    background: chartreuse;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: .8rem;


}
.picker{
    position: fixed;
    bottom: 0;
    background: white;
    width: 100%;
}
.backPickerSubBtn{
    position: absolute;
    right: .5rem;
    top: .2rem;
}
.slecctZhan{
    float: left;
    margin-right: .5rem;
}
</style>