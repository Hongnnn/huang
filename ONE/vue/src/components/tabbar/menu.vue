<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item":class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text"></span>
          <span v-show="item.type>0" class="icon"></span>
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul class="goodul">
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" />
              </div>
              <div class="goodcontent">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.price}}</p>
                 <div class="cartcontrol-wrapper">
                <cartcontrol :food="food" ></cartcontrol>

              </div>

                <!-- <div class="extra">
              <span>月售{{food.sellCount}}份
              </span>
                </div>-->
                <!-- <div class="price">
              <span>￥{{food.price}}</span>
              <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>-->
              </div>
             
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart  :select-foods="selectFoods"></shopcart>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import shopcart from "../shopcar/shopcart.vue";
import cartcontrol from "../shopcar/cartcontrol.vue";
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      ListHeight: [],
      scrollY: 0,
    };
  },
  computed: {
    currentIndex() {
      //currentIndex对应菜单栏的下标
      for (let i = 0; i < this.ListHeight.length; i++) {
        let height1 = this.ListHeight[i];
        let height2 = this.ListHeight[i + 1];
        //获得了一个区间的上下范围，判断scrollY落到这个区间，!height2是判断最后一个区间
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods(){
      let foods =[];
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.count){
            foods.push(food)
          }

        })
      })
      return foods
    }
  },
  created() {
    this.$axios.get("../../../data.json").then(response => {
     
      this.goods = response.data.goods;
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
        console.log(this.tokenn)
      });
    });
  },
  methods: {
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
      console.log(index);
    },
    _drop(target){
      this.$refs.shopcart.drop(target)


    },
    _initScroll: function() {
      (this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })),
        (this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
           click: true,
          probeType: 3
        })); //foodsScroll监听事件,在scroll滚动时能见位置实时暴露出来
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      ); //计算每个类别的区间高度
      let height = 0;
      this.ListHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.ListHeight.push(height);
      }
    }
  },
  components: {
    shopcart,
    cartcontrol
},
events:{
  'cart.add'(target){
    this._drop(target)

  }
}
};

</script>
<style lang="scss" scoped>
.goods {
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 0px;
  width: 100%;
  bottom: 40px;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: aliceblue;
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      border: 1px (rgba(7, 17, 27, 0.1));
      &:last-child {
        border: none;
      }
    }
  }
}

.menu-item {
  display: table;
  height: 54px;
  width: 56px;
  line-height: 14px;
  font-size: 12px;
  &.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
    .text {
      border: none;
    }
  }
}
.text {
  font-size: 12px;

  width: 56px;
  vertical-align: middle;
  border: 1px (rgba(7, 27, 27, 0));
}
// .food-item{
//     li{display: none;}
//     h1{
//       font-size:12 ;
//     }
// }
.icon {
  img {
    height: 1.5rem;
  }
}
.goodcontent {
  flex: 1;
  .name {
    margin: 2px 2px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }

  width: 100%;
  display: inline-table;
  h2 {
    font-size: 12px;
  }
}
.goodul {
  li {
    display: inline-table;
  }
  h1 {
    font-size: 15px;
  }
  
}
.cartcontrol-wrapper{
  position:absolute;
  right: 0rem;
 
  img{
    height: .3rem;
  }
}
</style>