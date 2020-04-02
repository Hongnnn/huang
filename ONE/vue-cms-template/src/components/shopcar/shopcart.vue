<template>
  <div class="shopcart">
    <div class="shopcontent">
      <div class="content-left">
        <div class="logo-wrapper" :class="{'highlight':totalCount>0}">
          <div class="logo"  >
            <span class="icon-shopping" :class="{'highlight':totalCount>0}">
              <img    src="../../style/img/shopcar.png" alt />
            </span>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>

          </div>
        </div>
        <div class="shop-price" :class="{'highlight':totalPrice>0}">${{totalPrice}}元</div>
        <div class="desc"></div>
      </div>
      <div class="content-right" >
        <div :class="payClass" class="pay">{{payDesc}}</div>
      </div>
    </div>
    <div class="ball-container">
    <div transition="drop" v-for="ball in balls" v-show="ball.show"></div>
       <div class="inner"></div>
    </div>
    <div class="shopcart-list" v-show="listShow">
        <div class="listheader">
            <h5 class="shoplist-title">资源车</h5>
            <span class="empty">清空</span>

        </div>
        <div class="list-content">
            <ul>
                <li class="list-food" v-for="food in selectFoods">
                    <span class="listfood-name">
{{food.name}}
                    </span>
                    <div class="price">
                        <span>${{food.price *food.count}}</span>
                    </div>
                    <div class="cartcontrol-warpper">
                        <cartcontrol :food="food"></cartcontrol>

                    </div>


                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
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
            ]

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
        }
    },
    methods:{
        drop(el){
          
           }

        },
        components:{
            cartcontrol
        }
    
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
</style>