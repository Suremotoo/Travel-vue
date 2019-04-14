<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="recommend of recommendList" :key="recommend.id">
        <img class="item-img" :src="recommend.imgUrl">
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '沈阳方特欢乐世界',
        desc: '被誉为“东方梦幻乐园”、“亚洲科幻神奇”',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/f4/f47635631020932ca3.water.jpg_200x200_275db91f.jpg'
      }, {
        id: '0002',
        title: '皇家海洋公园',
        desc: '被誉为“东方梦幻乐园”、“亚洲科幻神奇”',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/fa/fa88b1059e9cbd7ea3.img.jpg_200x200_48780e48.jpg'
      }, {
        id: '0003',
        title: '热高乐园丛林公园',
        desc: '被誉为“东方梦幻乐园”、“亚洲科幻神奇”',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/3a/1863c41f4e516418d949a6e5b5fc3316.water.jpg_200x200_79dd8a8b.jpg'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        color: #ccc
        line-height: .4rem
        ellipsis()
      .item-button
        line-height: .44rem
        padding: 0 .2rem
        background: #ff9300
        margin-top: .16rem
        color: #fff
        border-radius: .06rem
</style>
