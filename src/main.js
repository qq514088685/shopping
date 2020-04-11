import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./network/request.js"
import url from './network/url.js'
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast);

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    // error:'', //报错需要的图片
    loading:require('./assets/img/timg.gif') // 替换需要的图片
})

Vue.prototype.request=request
Vue.prototype.url=url
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
