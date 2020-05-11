<template>
    <div>
       <div class="my-title">
          <div class="nameimg">
              <img src="../../style/img/tou.jpg" alt="">
           <h5 class=" namecls">{{ params.username}}</h5>
           </div> 
           <div class="content">
           <div class="title-content">
               <h5>总资产（元）</h5>
               <p>￥{{ totalmoney}}</p>
           </div>
            <div class="title-content fontaligin">
               <h5>等级</h5>
               <p>{{grade}}</p>
           </div>
           </div>

       </div>
       <div class="money-button">
           <h4 @click="draw">取现</h4>
           <h4 class="jifen">积分:<span>{{params.score}}</span></h4>
       </div>
       <div>
           <ul class="my">
               <li class="my-content" @click="perinfo">
                
                   <div class="my-list">
                       <img src="../../style/my-icon/information.png" alt="">
                       <h6>个人信息</h6>
                       <img src="../../style/my-icon/right.png" alt="">

                   </div>
               </li>
                <li class="my-content" @click="collect">
                    
                   <div class="my-list">
                       <img src="../../style/my-icon/juan.png" alt="">
                       <h6>回收员兼职</h6>
                       <img src="../../style/my-icon/right.png" alt="">

                   </div>
                    
               </li>
                <li class="my-content">
                   <div class="my-list">
                       <img src="../../style/my-icon/zaunshimall.png" alt="">
                       <h6>积分商城</h6>
                       <img src="../../style/my-icon/right.png" alt="">

                   </div>
               </li>
                 <router-link to="/Record">
                <li class="my-content">
                    
                   <div class="my-list">
                       <img src="../../style/my-icon/fanhui.png" alt="">
                       <h6>反馈问题</h6>
                       <img src="../../style/my-icon/right.png" alt="">

                   </div>
                    
               </li>
                 </router-link>
                <li class="my-content">
                   <div class="my-list">
                       <img src="../../style/my-icon/call.png" alt="">
                       <h6 class="kefu">联系客服</h6>
                    <span class="call">020-456778</span>

                   </div>
               </li>
           </ul>

       </div>
         <Modal :show="show"  @hideModal="hideModal" @submit="submit">
             <p class="delet">您还不是回收员，按确认注册回收</p>
         </Modal>
    </div>
</template>
<script>
import '../../lib/mui/css/my.scss'
import Modal from '../order/modal.vue'
export default {
    data(){
        return{
            params:[{
                
            }
            ],
            show: false,

        }
        
    },
    created(){
        this.getData()
    },
    computed:{
        grade(){
            let grade= this.params.scroe
            if(grade<200||grade==null){
                return '新手环保'
            }
            else if(grade>=200&&grade<700){
                return '环保助手'
            }
            else{
                return '环保达人'
            }
        },
        // jifen(){
        //     let jifen = this.params.score
        //     console.log(jifen)
        //     if(jifen ==null){
        //         return 0
        //     }
        //     else{
        //         return jifen
        //     }
        // },
        totalmoney(){
            let total =this.params.score
            if(total ==null){
                return 0
            }
            else{
                let totalmoney=total/100
                return totalmoney
            }
        }

    },
    methods:{
        draw(){
             let money = this.params.score
             console.log(money)
              let token = localStorage.getItem('token')

             if(money<=100){
                 alert("积分不足100，不能提现")
             }
             else {
                 this.$axios.post('http://106.15.136.244:8080/user/clear',{
                     'token':token
                 })
                 .then(res=>{
                    if(res.data.flag==true){
                        alert("提现成功")
                    }
                    else{
                        alert("提现失败")
                    }
                     
                 })
             }


        },
perinfo(){
     this.$router.push({ path: "/perinfo" });
},
        getData(){
            let token = localStorage.getItem('token')
            if (token == null || token == undefined) {
            this.$router.push({ path: "/login" });
            }
            else{
                let url=`http://106.15.136.244:8080/user/myindex?token=${token}`
                this.$axios.get(url)
                .then(res=>{
                    this.params=res.data.data
                })
            }

        },
         hideModal() {
            // 取消弹窗回调
            this.show = false
        },
        submit(){
            this.$router.push({ path: "/collectsign" });

        },
        collect(){

            // this.show=true
            let token = localStorage.getItem('token')
            let url=`http://106.15.136.244:8080/user/iscollector?token=${token}`
            this.$axios.get(url)
            .then(res=>{
                if(res.data.data.iscollector==1){
                    this.$router.push({ path: "/collect" });
                }
                else{

                    this.show=true
                }

            })
            .catch(err=>{
                console.log(err)
            })
            
            
        }
    },
     components: {
        Modal
    }
}

</script>
<style lang="scss" scoped>
.kefu{
    width: 50%;
}
.call{
    line-height: .6rem;
}
</style>