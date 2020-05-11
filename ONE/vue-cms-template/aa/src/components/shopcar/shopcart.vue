<template>
<div>
  <div class="shopcart">
    <div class="shopcontent" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper" :class="{'highlight':totalCount>0}">
          <div class="logo"  >
            <span class="icon-shopping" :class="{'highlight':totalCount>0}">
              <img    src="../../style/img/shopcar.png" alt />
            </span>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>

          </div>
        </div>
        <div class="shop-price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}元</div>
        <div class="desc"></div>
      </div>
      <div class="content-right" >
        <div :class="payClass" class="pay" @click.stop.prevent="pay">{{payDesc}}</div>
      </div>
    </div>
   
    <transition   name="fold">
    <div class="shopcart-list" v-show="listShow"  >
        <div class="listheader">
            <h5 class="shoplist-title">资源车</h5>
            <span class="empty" @click="empty">清空</span>

        </div>
        <div class="list-content" ref="listContent">
            <ul>
                <li class="list-food" v-for="food in selectFoods">
                    <span class="listfood-name">{{food.name}}
                    </span>
                    <div class="price">
                        <span>￥{{food.price *food.count}}</span>
                    </div>
                    <div class="cartcontrol-warpper">
                        <cartcontrol :food="food"></cartcontrol>

                    </div>


                </li>
            </ul>
        </div>
    </div>
    </transition>
   
  </div>
  <transition  name="fade">
     <div class="listmask" v-show="listShow" @click="hideList" ></div>
  </transition>
   
 </div>
</template>
<script>
import BScroll from "better-scroll";
import cartcontrol from "../shopcar/cartcontrol.vue";
export default {
    props:{
        selectFoods:{
            type:Array,
            default(){
                return [
                  
                    {
                        price:10,
                        count:2
                    }
                ];
            }
        }
    },
    data(){
        return{
            balls:[
                {
                show:false
            },
               {
                show:false
            },
               {
                show:false
            },
               {
                show:false
            },
            ],
            fold:true

        }
    },
    computed:{
        totalPrice(){
            let total = 0;
            this.selectFoods.forEach((food)=>{
                total += food.price * food.count

            });
            return total;
            

        },
        totalCount(){
            let count = 0;
            this.selectFoods.forEach((food)=>{
                count+=food.count;
            });
            return count
        },
        payDesc(){
            if(this.totalPrice <=0  ){
                return '无价值回收'
            }
            else{
                return '去回收'
                
            }
        },
        payClass(){
            if(this.totalPrice<0){
                return 'not-enough'
            }
            else{
                return 'enough'
            }
        },
        listShow(){
          if(!this.totalCount){
            this.fold =true;
            return false
          }
          let show = !this.fold
          if(show){
            this.$nextTick(()=>{
              if(!this.scroll){
              this.scroll = new BScroll(this.$refs.listContent,{
                click:true
              });
              }else{
                this.scroll.refresh()
              }
            })
          }
          return show
        }
    },
    methods:{
        drop(el){
          
           },

        
        toggleList(){
        
          if(!this.totalCount){
            return
          }
          this.fold = !this.fold

        },
        pay(){
          if(this.totalPrice <=0)
        { 
               return  '请选择商品'
        }  
        else{
          console.log(this.selectFoods)
           this.$router.push({path:'/carteidt',query:{selectfood:this.selectFoods}})
        }
       
        },
        empty(){
          this.selectFoods.forEach((food)=>{
               food.count =0 ;

          })
        },
         hideList(){
          this.fold =true

        },

        },
       
        
        components:{
            cartcontrol
        },
       

    
};
</script>
<style lang="scss">
.shopcart {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 50;
  height: 48px;

  .shopcontent {
    display: flex;
    background: forestgreen;
    font-size: 0;
    .content-left {
      flex: 1;
      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: white;
        &.highlight{
            background: rgb(0, 160, 220);

        }
        .num{
            position: absolute;
            top:0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #fff;
            background: rgb(240,20,20);
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        }
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        //   background: #2b343c;
          text-align: center;
        //   &.highlight{
        //       background: rgb(0, 160, 220);
        //   }
          .icon-shopping {
            font-size: 24px;
            color: #808080;
            line-height: 44px;
            
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
             
              text-align: center;
            }
          }
        }
      }

      .shop-price {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin-top: 12px;
        box-sizing: border-box;
        padding-right: 12px;
        // border-right:  1px solid rgba(255,255255,0.1);
        font-size: 16px;
        font-weight: 700;
        &.highlight{
            color: #fff;
        }
      }
      .desc {
        display: inline-block;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      background: #4cd964;
      .pay{
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.35rem;
        height: 100%;
         &.not-enough{
         background: rosybrown;
      }
      &.enough{
          background: springgreen;
      }
      }
     
    }
  }
  .ball-container{
      .ball{
          position: fixed;
          left: 32px;
          bottom: 22px;
          z-index: 200;
          &.drop-transition{
              transition: all 0.4s;
              .inner{
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  background: rgb(0, 160, 220);
                  transition: all 0.4s;
              }
          }
      }
  }
  

}

.shopcart-list{
  position: absolute;
  bottom: .8rem;
  left: 0;
  z-index: -1;
  width: 100%;
  &.fold-enter-active, &.fold-leave-active{
    transition:  all 0.5s ;
    transform: translate3d(0,50%,0);

  }
  &.fold-enter,&.fold-leave-active{
    transition:  all 0.5s ;
    transform: translate3d(0,100%,0);
  }
  .listheader{
    height: 40px;
    line-height: 40px;
    padding:0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .shoplist-title{
      float: left;
      font-size: 14px;
      color: rgb(7,17,27);
    }
    .empty{
      float: right;
      font-size: 12px;
      color: rgb(0,160,220);
    }

  }
  .list-content{
    padding:0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
    .list-food{
      position: relative;
      padding: 12px 0;
      box-sizing: border-box;
      border:1px rgba(7,17,27,0.1);
      .listfood-name{
        line-height: 24px;
        font-size: 14px;
        color: rgb(7,17,27);
      }
        .price{
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240,0,20);


        }
        .cartcontrol-warpper{
          position: absolute;
          right: 0;

        }

      }
    

 
    

  }

.fade-enter,.fade-leave-to{
    opacity: 1;
    background: rgba(7,17,27,0.6);

  }
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
    background: rgba(7,17,27,0);

  }


}
.listmask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter:blur(10px);
  
}
</style>