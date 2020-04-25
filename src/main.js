import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'
// 引入vue-lazyload
import vueLazyload from 'vue-lazyload'
// 调用
Vue.use(vueLazyload, {
  preLoad: 1.4, // 预加载高度
  error:
    'http://i0.hdslb.com/bfs/article/2044ade1221373962a06b6992cba64a9c1b9b5d8.jpg', // 当加载真实图片出错时，显示的替代图片
  loading:
    'http://i0.hdslb.com/bfs/article/2044ade1221373962a06b6992cba64a9c1b9b5d8.jpg', // 加载真实图片地址之前的一个替代图片
  attempt: 1 // // 尝试加载真实图片的次数
  // error 与 loading 可以使用线上图片链接，也可以使用本地图片链接，但是要注意，
  // 1. 如果地址是src文件夹中的图片，需要使用 require 去引入
  // 2. 如果地址是public文件夹中的，可以将 public 看成 / 去组织url地址de..
})
Vue.config.productionTip = false

// 全局定义一个过滤器。formatYi
// Vue.filter('formatYi', (value) => {
//   console.log('value: ', value)
//   return `${value}亿`
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
