import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./utils/https";
import urls from "./utils/urls";

Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$urls = urls; // 其他页面在使用 urls 的时候直接  this.$urls 就可以了

import {
  Button,
  Select,
  Dialog,
  Form,
  FormItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
