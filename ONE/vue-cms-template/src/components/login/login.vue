<template>
  <div class="loginproject">
    <img src="../../style/icon/body.jpg" alt class="backimg" />
    <div class="logininput">
      <img src="../../style/icon/laji.jpg" alt class="imgcss" />
      <input type="text" name placeholder="用户名" class="inputt" v-model="loginForm.username" />
      <input type="password" name placeholder="密码" class="inputt" v-model="loginForm.password" />
      <div class="sign">
        <h6>忘记密码</h6>
        <h6 @click="signn">注册</h6>
      </div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import "../../lib/mui/css/login.scss";
import axios from "axios";
import { mapMutations } from "vuex";
import Qs from "qs";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      userToken: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    signn: function(){
        
        this.$router.push({path:'/resign'})
    },

    login: function() {
      let _this = this;
      //   // let a = JSON.stringfiy(_this.loginForm)
      //   console.log(_this.loginForm)

      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.$axios
          .post("http://106.15.136.244:8080/user/login", {
            'username': _this.loginForm.username,
            'password': _this.loginForm.password
          })
          .then(function(response) {
            console.log('chengg');
            if(response.data.flag ==false){
                alert('登录失败')
                _this.loginForm.username='',
                _this.loginForm.password=''


            }
            else{
                console.log('登录成功'),
                _this.$router.push({path:'/'})
            }

          })
          .catch(function(error) {
            console.log(error);
          });
        // this.$axios .post("http://106.15.136.244:8080/user/login", {
        //        'username':_this.loginForm.username,
        //       'password':_this.loginForm.password,
        //   })
        //   .then(res=>{
        //      alert('账号成功');
        //      console.log(res.data);

        //   })
        //   .catch(function(error) {
        //        alert('账号密码错误');

        //   });
        // console.log(this);
        // this.$axios.post("http://106.15.136.244:8080/user/login", {
        //      'username':_this.loginForm.username,
        //      'password':_this.loginForm.password,

        //   })
        //   .then(res => {
        //        alert('登录成功');
        //        console.log(res.data)
        //        this.$router.push({path:'/'})
        //   })
        //   .catch(error =>{
        //       alert('账号或密码错误');
        //   })
        //    this.$axios.post
        //    ({
        //          method: 'post',
        //          url:'http://106.15.136.244:8080/user/login',
        //
        //            headers: {
        //             'Content-Type': 'application/json',

        //          },

        //      }).then(res =>{
        //          console.log(res.data);

        //         // _this.userToken = 'Bearer ' + res.data.data;
        //         // _this.changeLogin({ Authorization: _this.userToken })
        //         //  console.log("准备跳转!");
        //         //  _this.$router.push('/home');
        //      }).catch(error => {
        //          console.log(error);
        //      })

        //  .post('http://106.15.136.244:8080/user/login',{

        //      data:JSON.stringify(_this.loginForm),

        //  }).then(res=>{
        //      alert('账号成功');
        //      console.log(res.data);
        //       _this.userToken = 'Bearer ' + res.data.data.body.token;
        //        // 将用户token保存到vuex中
        //       _this.changeLogin({ Authorization: _this.userToken });
        //       _this.$router.push('/home');
        //       alert('登陆成功');

        //  }).catch(error =>{
        //       alert('账号或密码错误');
        //       console.log(error);
        //  })
      }
    }
  }
};
</script>