<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人五人联票',
          children: [{
            title: '成人五人联票 - 某一连锁酒店销售'
          }]
        }, {
          title: '成人三人联票',
          children: [{
            title: '成人三人联票 - 某一连锁酒店销售'
          }]
        }]
      }, {
        title: '学生票',
        children: [{
          title: '学生五人联票'
        }, {
          title: '学生三人联票'
        }]
      }, {
        title: '儿童票',
        children: [{
          title: '儿童五人联票'
        }, {
          title: '儿童三人联票'
        }]
      }, {
        title: '优惠票',
        children: [{
          title: '优惠五人联票'
        }, {
          title: '优惠三人联票'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
