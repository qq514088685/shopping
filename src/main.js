import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./network/request.js"
import url from './network/url.js'
Vue.prototype.request=request
Vue.prototype.url=url
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
