<template>

    <div>
         <mt-header fixed title="辣鸡回收"></mt-header>
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
                   <div  class="list-icon">
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

    }


}

</script>

<style lang="scss" scoped>

.mint-swipe{
  height: 4rem;
    margin-top: .15rem;
    .mint-swipe-item:nth-child(1){
        background: url("../../style/img/aa.jpg") no-repeat  5%
        
          
    }
}

</style>