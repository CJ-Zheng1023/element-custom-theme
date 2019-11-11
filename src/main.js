// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import ElementUIAdvanced from '@/common/lib/element-ui-advanced'
import '@/assets/styles/themes/layui/index.css'
import '@/assets/styles/styles.less'
Vue.use(ElementUI)
Vue.use(ElementUIAdvanced)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
