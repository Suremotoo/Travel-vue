<template>
  <div>
    <div class="item" v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <div class="item-title-icon"></div>
        {{item.title}}
      </div>
      <div class="item-child" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-title-icon
      position: relative
      display: inline-block;
      width: .36rem
      height: .36rem
      top: .06rem
      left: .06rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-child
    padding: 0 .2rem
</style>
