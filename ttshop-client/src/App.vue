<template>
<div>
  <router-view></router-view>
  <FootGuide v-if="$route.meta.showFooter===true"></FootGuide>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import FootGuide from './components/FooterGuide/FootGuide'
// import {reqFoodTypes} from './api'
// import {reqFoodTypes} from './api'
export default {

  // async mounted(){
  //   const result=await reqFoodTypes()
  //   console.log(result)
  // },

  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },

  methods:{
    ...mapActions(['getAddress','getUserInfo'])

  },


  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5

</style>
