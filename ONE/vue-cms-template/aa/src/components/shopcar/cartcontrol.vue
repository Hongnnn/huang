<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart" translate="move">
      <div  class="inner"><img src="../../style/img/jian.png" alt /></div>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <img src="../../style/img/jia.png" alt />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {
    console.log(this.food.count);
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }

      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
       this.$emit('cart-add',event.target)
    },
    decreaseCart(event) {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
     
    }
  }
};
</script>
<style lang="scss">
.cartcontrol {
  font-size: 0;
  img {
    height: 0.3rem;
  }
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    transition: all 0.4s linear;
    &.move-transition {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      .inner {
        display: inline-block;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0, 160, 220);
        transition: all 0.4s linear;
        transform: rotate(0);
      }
    }

    &.move-enter,
    &.move-leave {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
      .inner {
          transform: rotate(180deg);
      }
    }
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
}
</style>