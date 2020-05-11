<template>
    <div>
         <mt-header fixed title="个人信息">
        <router-link to="/find" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="iten ttop">
          <p>昵称</p><span>{{params.username}}</span>
      </div>
      <div class="iten">
          <p>真实名字</p><span>{{params.name}}</span>
      </div>
       <div class="iten">
          <p>手机号码</p><span>{{params.number}}</span>
      </div>
       <div class="iten">
          <p>是否回收员</p><span>{{collect}}</span>
      </div>
       <div class="iten">
          <p>积分</p><span>{{params.score}}</span>
      </div>
       <div class="iten">
          <p>头像</p><span><img :src="params.headimg" alt=""></span>
      </div>
      
    </div>
</template>
<script>
export default {
    data(){
     return{
         params:[]
     }
    },
    created(){
    this.getdata()
    

},
computed:{
    collect(){
        let flag= this.params.iscollector
        if(flag==0){
            return '否'
        }
        else{
            return '是'
        }
    }
},
methods:{
    getdata(){
           let token = localStorage.getItem("token")
           if (token == null || token == undefined) {
            this.$router.push({ path: "/login" });}
        else{
            let url=`http://106.15.136.244:8080/user/info?token=${token}`
            this.$axios.get(url).then(res=>{
            console.log(res.data)
            this.params=res.data.data
        })
        .catch(err=>{
            console.log(err)
        })
        }
    }
}

    
}
</script>
<style lang="scss" scoped>
.ttop{
margin-top: .8rem;
}
img{
    height: .7rem;
    border-radius: 50%;
}
.iten{
        display: flex;
        padding: .2rem;
    
    justify-content: space-between;
    background: white;
    /* font-size: .5rem; */
    height: .8rem;
    align-items: center;
    border-bottom: 1px solid #a98c8c;
}
p{
        font-size: .4rem;
    /* line-height: .4rem; */
    /* justify-content: center; */
    line-height: .5rem;
    margin: 0;
}
span{
    font-size: .4rem;
}
</style>