import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

import 'ant-design-vue/dist/antd.css';
import '@/assets/index.less';

import Antd from 'ant-design-vue';
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
