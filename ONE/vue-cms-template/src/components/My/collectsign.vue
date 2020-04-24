<template>
<div>
    <mt-header fixed title="注册成为回收员">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="collectsign">

    
 
       
   <my-cell>
      <span slot="my-cell-title">真实姓名</span>
      <span slot="my-cell-val">
        <input class="address-input" type="text" placeholder="真实姓名" v-model="receiverPhone" />
      </span>
    </my-cell>
      <my-cell>
      <span slot="my-cell-title">手机号码</span>
      <span slot="my-cell-val">
        <input class="address-input" type="text" placeholder="绑定手机号码" v-model="receiverName" />
      </span>
    </my-cell>
   <mt-button class="confirmbut" @click="signBtn">确定注册</mt-button>
    </div>
</div>
    
</template>
<script>
import MyCell from "../shopcar/mycell.vue";
export default {
    data(){
        return{
            receiverPhone:'',
            receiverName:''
        }
    },
    components:{
        MyCell
    },
    methods:{
      signBtn(){
        let token= localStorage.getItem("token");

        this.$axios.post("http://106.15.136.244:8080/user/collectsign",{
          'name':this.receiverName,
          'number':this.receiverPhone,
          'token':token
        }).then(res=>{
             if(res.data.flag==true){
               alert("注册成功")
                this.$router.push({ path: "/collect" });
               
             }
             else{
               alert("注册失败")
               
             }
        })
        
      }
    }
    
}
</script>
<style>
.collectsign{
    margin-top: .8rem;
}
.confirmbut{
    width: 100%;
   background:  #78e478;
   color: black;
    margin-top: .1rem;
}

</style>