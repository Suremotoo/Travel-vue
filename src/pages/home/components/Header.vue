<template>
  <div class="head">
     <div class="head-left">
       <div class="iconfont arrow-back-icon">&#xe624;</div>
     </div>
     <div class="head-input">
       <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
     </div>
     <router-link to="/city">
      <div class="head-right">
            {{this.city}} <span class="iconfont arrow-down-icon">&#xe64a;</span>
      </div>
     </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .head
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .head-left
      width: .64rem
      float: left
      .arrow-back-icon
        text-align: center
        font-size: .4rem
    .head-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .62rem
      line-height: .64rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
    .head-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-down-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
