<template>
    <div>
        <div>
         <mt-header fixed title="文章详情">
        <router-link to="/find" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
        <div class="com">
      <div >
          <p>{{prams.articletitle}}</p>
              <span>{{time}}</span>
          <div>
              <h5>{{prams.articlecontent}}</h5>
          </div>
          <div class="img"><img :src="prams.imageurl" alt=""></div>
      </div>
      <div class="comment">
       <h4>评论区({{prams.commentcount}})</h4>
       <ul>
         <li v-for="(item,index) in prams.commentlist" :key="index">
            <div class="comper">评论人：{{item.username}}</div>
          <div class="commen">{{item.comment}}</div>
         </li>
         
       </ul>
      </div>
      <div>
        <h4>添加评论</h4>
        <input type="text" name="" id="" v-model="setmess">
        <button @click="setmes">发送</button>
      </div>
      </div>
      
      </div>
    </div>
    
</template>
<script>
export default {
  data(){
    return{
      prams:{},
      setmess:''
      
    }
  },
  created(){
    this.getDate()
     
  },
  computed:{
    time(){
       let d = new Date(this.prams.createtime);
       console.log(d)

  let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
  let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
  let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
  let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
  let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();

  let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
  return times

    }
  },
  methods:{
    getDate(){
       let orderid = this.$route.query.articleid;
       let url=`http://106.15.136.244:8080/article/detail?articleid=${orderid}`
      this.$axios.get(url).then(res=>{
        this.prams= res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    setmes(){
       let token = localStorage.getItem("token");
       let artcileid = this.$route.query.articleid;
           if (token == null || token == undefined) {
        this.$router.push({ path: "/login" });
      }   else if(this.setmess ==null)
      {
        this.$toast("评论内容不能为空")
      }
      else{
             
            this.$axios.post("http://106.15.136.244:8080/article/addComment",{
              "articleid":artcileid,
              "mess":this.setmess,
              "token":token
            }).then(res=>{
              if(res.data.flag=true){
              
                this.$toast("评论成功")
                this.setmess=''
                this.getDate()

              }
              else{
                this.$toast("评论失败，请重新提交")
              }
              
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
.com{
    top: 1rem;
    position: absolute;
}
p{
    text-align:center;
    font-size: .4rem;
    color:black;
    font-weight: 800;
}
h5{
        font-size: .35rem;
    line-height: .5rem;
     letter-spacing: .04rem;
     text-indent: .5rem;
}
.img{
  display: block;
    left: 40%;
    padding-left: 19%;
}
.comper{
      width: 100%;
    background: aqua;
    height: .5rem;
    /* justify-items: center; */
    line-height: .5rem;
}
.commen{
      margin-top: .1rem;
      margin-bottom: .1rem;
}
button{
      width: 100%;
}
span{
      padding-left: 33%;
}
li{
  display: block;
}
</style>
