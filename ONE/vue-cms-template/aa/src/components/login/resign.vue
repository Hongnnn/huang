<template>
<div class="loginproject">
<img src="../../style/icon/body.jpg" alt="" class="backimg">
<div class="logininput" >
    <img src="../../style/icon/laji.jpg" alt="" class=" imgcss">
    <input type="text"  placeholder="请输入用户名" class="inputt" v-model="uusername">
    <input type="password"   placeholder="请输入密码" class="inputt" v-model="upassword">
    <input type="password"  placeholder="请再次输入密码" class="inputt" v-model="uagainpsw">
  
  
    <div class="sign">
     </div>  
    <button @click="resign">注册</button>
  
</div>
</div>
    
</template>
<script>
import '../../lib/mui/css/login.scss'
export default {
    data() {
    return {
        uusername: "",
        upassword: "",
        uagainpsw:""
     
    };

    
},
methods:{
    resign(){
        if(this.uusername === "" || this.upassword === ""||this.uagainpsw === "")
        {
            alert("账号或密码不能为空")
        }
       else 
       {if(this.upassword  !== this.uagainpsw)
        {
            alert("密码和确认密码不一致")
        }
        else{
         this.$axios.post("http://106.15.136.244:8080/user/register", {
            'username': this.uusername,
            'password': this.upassword,
           
          })
          .then(res=>{
             if(res.data.data ==1){
                 alert("注册成功")
                  this.$router.push({path:'/login'})
             }
             else{
                 alert("账号已存在，注册失败")
             }
          })
         .catch(function(error) {
            console.log(error);
          })
        }
       }


    }


}
}
</script>