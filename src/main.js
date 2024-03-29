// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 用于解决某些浏览器打开白屏的问题
import 'babel-polyfill'
// fastclick 用于解决移动端点击延迟3毫秒的问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import store from './store'

// 统一css
import 'styles/reset.css'
// border.css 用于解决高倍屏手机1像素的问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
