<template>
  <div>
    <mt-header fixed title="我的回收">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="nav-title">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">已接单</mt-tab-item>
        <mt-tab-item id="2">可接单</mt-tab-item>
        <mt-tab-item id="3">已完成</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
         <div class="order">
        <div class="order-list">
          <ul>
            <li v-for="(item,index) in newArr" :key="index" @click="orderdetail(item.orderId)">
              <div class="order-header">
                <p>
                  订单编号:{{item.orderId}}
                  <span>已接单</span>
                </p>
              </div>
              <ul>
                <li v-for="(good,index) in item.orderList" :key="index">
                  <div class="order-content" @click="orderdetail(item.orderId)">
                    <div class="order-left">
                      <img :src="good.icon" alt />
                      <h5>{{good.name}}</h5>
                    </div>
                    <h5 class="order-count">数量：{{good.count}}</h5>
                    <h5>￥{{good.price}}</h5>
                  </div>
                </li>
                <P class="totalji">总积分：{{item.orderprice}}</P>
              </ul>

              <div class="order-footer" >
                <button>查看详情</button>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
    </mt-tab-container>
      <mt-tab-container v-model="selected">
    <mt-tab-container-item id="2">
      <div class="order">
        <div class="order-list">
          <ul>
            <li v-for="(item,index) in newArr" :key="index" >
              <div class="order-header">
                <p>
                  订单编号:{{item.orderId}}
                  <span>可接单</span>
                </p>
              </div>
              <ul>
                <li v-for="(good,index) in item.orderList" :key="index">
                  <div class="order-content" @click="orderdetail(item.orderId)">
                    <div class="order-left">
                      <img :src="good.icon" alt />
                      <h5>{{good.name}}</h5>
                    </div>
                    <h5 class="order-count">数量：{{good.count}}</h5>
                    <h5>￥{{good.price}}</h5>
                  </div>
                </li>
                <P class="totalji">总积分：{{item.orderprice}}</P>
              </ul>

              <div class="order-footer" >
                <button  @click="orderdetail(item.orderId)">查看详情</button>
                <button @click="conformord(item.orderId)">确定接单</button>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="no-order" v-show="notOrder">暂无订单~</div> -->
    </mt-tab-container-item>
      </mt-tab-container>
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="3">
       <div class="order">
        <div class="order-list">
          <ul>
            <li v-for="(item,index) in newArr" :key="index">
              <div class="order-header">
                <p>
                  订单编号:{{item.orderId}}
                  <span>已完成</span>
                </p>
              </div>
              <ul>
                <li v-for="(good,index) in item.orderList" :key="index">
                  <div class="order-content" @click="orderdetail(item.orderId)">
                    <div class="order-left">
                      <img :src="good.icon" alt />
                      <h5>{{good.name}}</h5>
                    </div>
                    <h5 class="order-count">数量：{{good.count}}</h5>
                    <h5>￥{{good.price}}</h5>
                  </div>
                </li>
                <P class="totalji">总积分：{{item.orderprice}}</P>
              </ul>

              <div class="order-footer">
                <button>查看详情</button>
              
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div class="no-order" v-show="notOrder">暂无订单~</div>
      </mt-tab-container-item>
    </mt-tab-container>
  <Modal :show="show" @hideModal="hideModal" @submit="submit">
      <p class="delet">是否确认接单</p>
    </Modal>

  </div>
</template>
<style>
.nav-title {
  margin-top: 0.7rem;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #26a2ff;
  color: #dd524d;
  margin-bottom: -0.03rem;
}
</style>
<script>
import Modal from "../order/modal.vue";
export default {
 data(){
  return{
    selected: "1",
    show: false,
    notOrder:false,
    newArr:[],
    price:0,
    list :[],
    url:'',
    id:''
  }
 },
//   created(){
//     this.selected()

//  },
 watch:{
    selected: function(val, oldVal){
            let token = localStorage.getItem("token");
      if (token == null || token == undefined) {
        this.$router.push({ path: "/login" });

   }
   else{
     
     if(val==1||val==3){
      this.url= `http://106.15.136.244:8080/order/getMyCollectOrder?token=${token}`}
      else{
        this.url= "http://106.15.136.244:8080/order/getCollectList"}
      }

       console.log(this.url);
        this.notOrder=false
         this.$axios.get(this.url)
     .then(res=>{
       let dd=[]
      this.newArr=[]
      let newobj=[]
      this.list=[]
     
       newobj=res.data.data
       console.log(newobj)
       let id =0;
      
       let price =0
       newobj.forEach(Element=>{
         if(Element.status==this.selected){
         this.list.push(Element.orderlist)
         price =Element.orderprice
         console.log(price)

         }
       })
       console.log(this.list)
       if(this.list.length==0){
         this.notOrder=true
       }
      
       
        this.list.forEach((v, i) => {
          console.log(v)
         
         id = v[0].orderid;
         let total =0
         console.log(id)
        // console.log('id值',this.list[i]);
         const orderList = [];
         v.forEach(v => {
         orderList.push({
                  name: v.name,
                  price: v.price,
                  icon: v.icon,
                  count: v.count, 
                });
                total +=v.price *v.count
              });
              this.newArr.push({
                 orderId: id,
                orderList: orderList,
                orderprice:total
                
                
              });
       });
      // this.list.forEach(Element=>{
      //   Element.forEach((v,i)=>{
      //       console.log(v[i])
      //   })
      // })
       console.log(this.newArr)

   })
   .catch(err=>{
     console.log(err)
   })
            
   }   
    }

 ,

 computed:{
  //  price(){
  //    let total =0
  //    let price=[]
  //    price =this.newArr.orderList
  //    console.log(price)
  //     if (!price) {
  //       return;
  //     }
  //    price.forEach(food => {
  //       total += food.price * food.count;
  //     });
  //     this.price =total

  //     return total;
  //  }
  

 },
 components: {
    Modal
  },
 methods:{
   conformord(event){
     this.show = true;
     this.id = event

   },
    hideModal() {
      // 取消弹窗回调
      this.show = false;
      
    },
    submit() {
      let token = localStorage.getItem("token");
      if (token == null || token == undefined) {
        this.$router.push({ path: "/login" });

   }else{
      this.$axios.post("http://106.15.136.244:8080/order/confirm-order",{
        "orderid":this.id,
        "token":token
      }).then(res=>{
        if(res.data.falg=true){
          this.$toast("接单成功")
          this.show=false
        }
        else{
          this.$toast("接单失败")
        }
      })
      .catch(err=>{
        console.log(err)
      })
      }
    },
   orderdetail(data){
   this.$router.push({
                path: '/collectdetail',
                query:{userid:data,status:this.selected}
            })

},
  //  getData(){
  //    let that =this 
  //     that.notOrder=false
  //   let token = localStorage.getItem("token");
  //     if (token == null || token == undefined) {
  //       that.$router.push({ path: "/login" });

  //  }
  //  else{
  //    thiurl= `http://106.15.136.244:8080/order/getMyCollectOrder?token=${token}`
  //    console.log(url)
  //    that.$axios.get(url)
  //    .then(res=>{
  //      let dd=[]
  //     that.newArr=[]
  //     let newobj=[]
  //     that.list=[]
     
  //      newobj=res.data.data
  //      console.log(newobj)
  //      let id =0;
      
  //      let price =0
  //      newobj.forEach(Element=>{
  //        if(Element.status=that.selected){
  //        that.list.push(Element.orderlist)
  //        price =Element.orderprice
  //        console.log(price)

  //        }
  //      })
  //      console.log(that.list)
      
       
  //       that.list.forEach((v, i) => {
  //         console.log(v)
         
  //        id = v[0].orderid;
  //        let total =0
  //        console.log(id)
  //       // console.log('id值',this.list[i]);
  //        const orderList = [];
  //        v.forEach(v => {
  //        orderList.push({
  //                 name: v.name,
  //                 price: v.price,
  //                 icon: v.icon,
  //                 count: v.count, 
  //               });
  //               total +=v.price *v.count
  //             });
  //             that.newArr.push({
  //                orderId: id,
  //               orderList: orderList,
  //               orderprice:total
                
                
  //             });
  //      });
  //     // this.list.forEach(Element=>{
  //     //   Element.forEach((v,i)=>{
  //     //       console.log(v[i])
  //     //   })
  //     // })
  //      console.log(that.newArr)
  //     //  if(this.newArr.length==0){
  //     //    this.notOrder =true
  //     //  }
       
  //  })
   
           
  //    .catch(err=>{
  //      console.log(err)
  //    })
   
   
}}

// }}

</script>