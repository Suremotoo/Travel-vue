// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// fastclick 用于解决移动端点击延迟3毫秒的问题
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// border.css 用于解决高倍屏手机1像素的问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
