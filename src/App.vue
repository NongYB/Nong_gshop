<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
import {reqFoodType} from './api'
export default{
   mounted(){
    reqFoodType().then(response=>{
      console.log(response.data)
    })
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
