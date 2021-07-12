<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-jianshao" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{ food.count }}</div>
    <!--    click.stop阻止事件冒泡-->
    <div class="iconfont icon-zengjia" @click.stop="updateFoodCount(true)"></div>

  </div>
</template>

<script>
// import {MessageBox,Toast} from 'mint-ui'
export default {
  props: {
    food: Object,

  },

  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)

  .icon-jianshao
    display: inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
    //新增的加减图标样式

    &.move-enter-active, &.move-leave-active
      transition all .5s

    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(10px) rotate(180deg)

  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)

  .icon-zengjia
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color $green
</style>
