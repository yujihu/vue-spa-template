import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/base.scss'
import { rem } from '@yolkpie/utils'
// 注册全局插件
import '@/plugins'

rem(750) // 设计稿宽度为750

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
