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
        <li>
     <div class=" content-list">
        <h4 class="titel-style">小龙虾壳还可以这么用？</h4>
        <div class="csss">
       <div class="hcss" > <h6 class="content-style"> 小龙虾壳经过机器设备的过滤清洗，高温消毒，机器烘干后成为虾粉</h6></div>
      
         <div class="img-css"><img src="../../style/img/aa.jpg" alt=""></div>
        </div>
        <div class="tupian">
          <img src="../../style/img/shares-icon.png" alt=""> <span> 3</span>
          <img src="../../style/img/comment.png" alt=""> <span> 5</span>
        </div>
    </div>
        </li>
            <li>
     <div class=" content-list">
        <h4 class="titel-style">小龙虾壳还可以这么用？</h4>
        <div class="csss">
       <div class="hcss" > <h6 class="content-style"> 小龙虾壳经过机器设备的过滤清洗，高温消毒，机器烘干后成为虾粉</h6></div>
      
         <div class="img-css"><img src="../../style/img/aa.jpg" alt=""></div>
        </div>
        <div class="tupian">
          <img src="../../style/img/shares-icon.png" alt=""> <span> 3</span>
          <img src="../../style/img/comment.png" alt=""> <span> 5</span>
        </div>
    </div>
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
               <img src="../../style/img/aa.jpg" alt="" class="videoimg">
               <h5>变废为宝手工小制作</h5>
               <div class="hudong">
                <div> <img src="../../style/img/zan.png" alt="" class="hudongimg"> <span>2</span></div>
                 <div>  <img src="../../style/img/comment.png" alt="" class="hudongimg"> <span>2</span></div>
                <div>    <img src="../../style/img/share.png" alt="" class="hudong-share"> </div>
               </div></div>
               
          </li>
        </ul>

  </div>
  </mt-tab-container-item>
  
</mt-tab-container>
<router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'page-navbar',  
    data(){
        return{
            selected:'1'
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