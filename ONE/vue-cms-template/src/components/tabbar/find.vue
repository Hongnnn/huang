<template>
    <div class="page-navbar">  
        <mt-navbar v-model="selected" class="nvr-title">
  <mt-tab-item id="1" class="title-color">文章</mt-tab-item>
  <mt-tab-item id="2" class="title-color">视频</mt-tab-item>
  
</mt-navbar>
       <!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1" >

    <div class=" subject">
      <ul>
        <li v-for="(item,index) in articleList" :key="index">
     <div class=" content-list">
        <h4 class="titel-style">{{item.articletitle}}</h4>
        <div class="csss" @click="articledetail(item.articleid)">
       <div class="hcss" > <h6 class="content-style"> {{item.articledesc}}</h6></div>
      
         <div class="img-css"><img :src="item.imageurl" alt=""></div>
        </div>
        <div class="tupian">
       <img :src="collcount" alt="" @click="collectmodify(item.articleid)"> <span> {{item.collectcount}}</span>
          <img src="../../style/img/comment.png" alt="" @click="comment(item.articleid)"> <span> {{item.commentcount}}</span>
        </div>
    </div>
        </li>                                                                                                                  
            <li>
    
        </li>
      </ul>
 </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2" >
  <div class="share-movie">
        <ul>
          <li class="movie-li">
            <div class="movie">
              <div class="movie-title">
                <img src="../../style/img/tou.jpg" alt=""> <h5>爱生活的小能手</h5>
               
              </div>
                <p>2小时发布</p>
                </div>
                <div class="videocss">
              <div v-for="(item,i) in list" :key="i" style="margin-bottom: 30px">
      <video :id="'myVideo'+item.id" class="video-js">
        <source :src="item.src" type="video/mp4">
      </video>
    </div>
               <h5>垃圾分类小知识</h5>
               <div class="hudong">
                <div @click="shidian"> <img :src="collcount" alt="" class="hudongimg"> <span>{{dian}}</span></div>
                 <div @click="pinglun">  <img src="../../style/img/comment.png" alt="" class="hudongimg"> <span>{{ping}}</span></div>
                <div>    <img src="../../style/img/share.png" alt="" class="hudong-share"> </div>
               </div></div>
               
          </li>
        </ul>
        



  </div>
  </mt-tab-container-item>
  
</mt-tab-container>
<router-view></router-view>
<com-ment v-show="comshow" @setmes="setmes"></com-ment>
  <com-ment v-show="com" @setmes="comm"></com-ment>
    </div>
  
  

</template>
<script>
import ComMent from'../comment/comment.vue'
export default {
    name: 'page-navbar',  
    data(){
        return{
            selected:'1',
            articleList:[],
            collcount:require('../../style/img/shares-icon.png'),
            flag:false,
            comshow:false,
            com:false,
            aa:false,
            ping:3,
            mess:'',
            msg:'',
            dian:2,
            artid:'',
             list:[
              {
                  src:'https://vdept.bdstatic.com/64505331595659364a47594a44335548/77637a6976737359/f9dad0201fb6ab1d73594ee6ccf329784af3f5e07f5e3b0efa7f021052794ffcc5bbd700d974d6f5ea4e1de70a1f00ee.mp4?auth_key=1589080338-0-0-409fef8ecab5b1086e9b6a75fc840e3b ',
                  id:0,
                  pic:"../../style/img/aa.jpg",
              }
              // },
              // {
              //     src:'http://img.yopoo.cn/banner_video.mp4 ',
              //     id:1,
              //     pic:"",
              // },
              // {
              //     src:'http://img.yopoo.cn/banner_video.mp4 ',
              //     id:2,
              //     pic:"",
              // }
          ]
     
           
        }
        },
        created(){
          this.getData()
        },
        computed:{

        },
           mounted() {
        this.initVideo();
    },
        components:{
          ComMent
        },
        methods:{
         
          setmes(m){
          let token = localStorage.getItem("token");
           if (token == null || token == undefined) {
        this.$router.push({ path: "/login" });
      }   else{
              this.msg=m
            this.$axios.post("http://106.15.136.244:8080/article/addComment",{
              "articleid":this.artid,
              "mess":this.msg,
              "token":token
            }).then(res=>{
              if(res.data.flag=true){
                this.comshow=false
                this.$toast("评论成功")
                this.getData()

              }
              else{
                this.$toast("评论失败，请重新提交")
              }
              
            })
            .catch(err=>{
              console.log(err)
            })
          
          
          }
          },
          shidian(){
               if(this.aa==false){
                 this.aa=!this.aa
                 this.collcount=require('../../style/img/shares-icon_on.png')
                 this.dian++
               }
               else{
                 this.add=!this.aa
                      this.collcount=require('../../style/img/shares-icon.png')
                      this.dian--
               }
          },
          pinglun(){
            this.com=true
          },
          comm(){
           this.com=false
           this.$toast("评论成功")
           this.ping++
          },
          getData(){
            // let _this= this
            let classify =this.selected-1
            let url=`http://106.15.136.244:8080/article/list?classify=${classify}`
            this.$axios.get(url)
            .then(res=>{
              
              this.articleList=res.data.data
              console.log(this.articleList)
            })
          },
          comment(e){
            this.comshow = true
            this.artid=e
          
          },
          articledetail(id){
             this.$router.push({
        path: "articledetail",
        query: { articleid: id }
      });
          },
          collectmodify(data,data2){
            if(this.flag==false){
              this.flag=!this.flag
            this.collcount=require('../../style/img/shares-icon_on.png')
             this.$axios.post("http://106.15.136.244:8080/article/addLikes",{
               'articleid':data
             }).then(res=>{
               console.log(res.data)
                this.getData()
             }).catch(err=>{
               console.log(err)
             })
            }
            else{
              this.flag=!this.flag
              data2=data2-1
             this.collcount=require('../../style/img/shares-icon.png')
             this.$axios.post("http://106.15.136.244:8080/article/cancelLikes",{
               'articleid':data
             }).then(res=>{
               console.log(res.data)
                this.getData()
             }).catch(err=>{
               console.log(err)
             })
            }
           

          },
            initVideo() {
            //初始化视频方法 循环列表获取每个视频的id
            this.list.map((item,i)=>{
                let myPlayer = this.$video('myVideo'+item.id, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: "true",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: "350px",
                    //设置视频播放器的显示高度（以像素为单位）
                    height: "400px",
                    //封面图
                    poster:item.pic
                });
            })

        }
    }
        
    }


</script>
<style lang="scss" scoped>
.mint-navbar .mint-tab-item.is-selected {
   border-bottom: 3px solid #e60b0b;
    color: #e60b0b;
    margin-bottom: -0.03rem;}
   
    .item {
    display: inline-block;
  }
.title-color{
    color: black;
    font-size: .35rem;
    line-height: 1;
}
  .mint-tab-container-wrap {
        background: white;
    margin-top: .12rem;
    display: flex;
  }
.content-list{
      background: white;
    padding: .2rem;
        margin-top: .15rem;
}

  

  .nav {
    padding: 10px;
  }
 
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  img{
    height: 2rem;
  }
ul{
   margin: 0rem
}
  .wenzi{
width: 54%;
  }
  .titel-style{
    padding-top: .15rem;
  }
  .img-css{
        padding-left: .3rem;
        img{
          height: 2rem
        }

  }
.tupian{
  img{
    height: .5rem
  }
}
.hcss{
      padding-top: .2rem;
}

.content-style{
      text-indent: .5rem;
    letter-spacing: .02rem;
    line-height: .32rem;
    font-size: .28rem;
}
.csss{
  display: flex;
      padding-right: .1rem;
    padding-left: .1rem;
}
.movie-title{
  display: flex;
      padding-left: .2rem;
    padding-top: .1rem;

  h5{
        line-height: .7rem;
  }
img{
  height: .8rem;
  border-radius: 50%;
}
}

.hudong{
  display: flex;
  justify-content: space-between;
  span{
        font-size: .4rem;
  }

  
}
ul{
  li{
    display: block;
  }
}
.videocss{
     padding: 0rem .2rem .2rem .2rem;
    
     }
.movie{
  display: flex;
    justify-content: space-between;
    p{
          padding-top: .38rem;
          padding-right: .4rem;
    }
}
.hudongimg{
  height: .5rem;

}
.hudong-share{
    padding-right: .4rem;
      height: .5rem;
}
.videoimg{
   height: 4rem;
}
.movie-li{
      background: white;
    margin: .15rem 0rem;
}
.nvr-title{
  background-color: #78e478;
}


</style>