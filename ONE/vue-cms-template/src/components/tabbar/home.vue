<template>

    <div>
         <mt-header fixed title="辣鸡回收" ></mt-header>
       <mt-swipe :auto="4000">
           <mt-swipe-item >
            1
           </mt-swipe-item>
             <mt-swipe-item >
            2
           </mt-swipe-item>
             <mt-swipe-item >
            3
           </mt-swipe-item>
           
       </mt-swipe>
        <div>
           <div >
               <ul >
                   <li>
                   <div  class="list-icon" @click="login">
                   <img src="../../style/icon/yifu.png" alt="">
                   <h5>衣服</h5>
                   </div>
                   <div  class="list-icon">
                   <img src="../../style/icon/jiadian.png" alt="">
                   <h5>家电</h5>
                   </div>
                   </li>
                    <li>
                   <div  class="list-icon1">
                   <img src="../../style/icon/jinshu.png" alt="">
                   <h5>金属</h5>
                   </div>
                   <div  class="list-icon1">
                   <img src="../../style/icon/baozhi.png" alt="">
                   <h5>书报纸</h5>
                   </div>
                   </li>
                       <li>
                   <div  class="list-icon1">
                   <img src="../../style/icon/suliao.png" alt="">
                   <h5>塑料</h5>
                   </div>
                   <div  class="list-icon1">
                   <img src="../../style/icon/suliao.png" alt="">
                   <h5>易拉罐</h5>
                   </div>
                   </li>
                       <li>
                   <div  class="list-icon1">
                   <img src="../../style/icon/boli.png" alt="">
                   <h5>玻璃瓶</h5>
                   </div>
                   <div  class="list-icon1">
                   <img src="../../style/icon/dianzi.png" alt="">
                   <h5>电子产品</h5>
                   </div>
                   </li>
                      <li>
                  
                   </li>
                   
                   
               </ul>
               
           </div>
        </div>
         

    </div>
  
</template>
<script>
import '../../lib/mui/css/home.scss'
export default {
    data(){
        return {
            LunboList:[
                   { 'img': '../../style/img/aa.jpg'}, 
                     { 'img': '../../style/img/aa.jpg'}, 
                       { 'img': '../../style/img/aa.jpg'}, 
            ]
        }
    },
     created(){
        //  this.getLunbotu()
     },
    methods:{
        // getLunbotu(){
        //     this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        //         console.log(result.body);
        //     });
        // }
        login(){
            this.$router.push({path:'/menu'})
        }

    }


}

</script>

<style lang="scss" scoped>
.app-ol{
padding-top: 30px;
}
.mui-bar-tab .mui-tab-item.mui-active {
    color: #20c11f;
}
.mint-swipe{
  height: 4rem;
    margin-top: .15rem;
    .mint-swipe-item:nth-child(1){
        background: url("../../style/img/aa.jpg") no-repeat  5%
        
          
    }
}
.mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #78e478;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 1rem;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
.mint-swipe {
    height: 4rem;
    margin-top: 0rem;
}
</style>