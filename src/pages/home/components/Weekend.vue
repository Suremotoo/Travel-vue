<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="recommend of recommendList" :key="recommend.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="recommend.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '大连必打卡',
        desc: '爱上北方的碧海蓝天',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg'
      }, {
        id: '0002',
        title: '沈阳必游',
        desc: '初入黑土地，玩味多彩人生',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/98/392c73a32d5ce0.jpg_r_640x214_bc565fa1.jpg'
      }, {
        id: '0003',
        title: '亲子游乐',
        desc: '来生机勃勃的森林野生动物园留下你们珍贵的足迹，这里是儿童的天堂，大人最美好的回忆',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      color: #ccc
      line-height: .4rem
      ellipsis()
</style>
