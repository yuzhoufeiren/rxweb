import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//临时引入Axios
import axios from 'axios'
Vue.prototype.$axios = axios

import qs from 'qs';
Vue.prototype.$qs = qs;

// 引入公用css
import '@/common/css/Base.css'

// 引入animated.css
import animated from 'animate.css'
Vue.use(animated);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
