/**
 * npm package
 */
import Vue from 'vue';

/**
 * vue plugins
 */
import waterfall from 'vue-waterfall2';
import vueAutoComponentsLoader from '@/plugins/vueAutoComponentsLoader';
import installLoginCheck from './script/login-check';
import installAxiosDefault from './script/axios-default';
import installTestLogin from './script/test-login';

/**
 * Vue options dependencies
 */
import router from './router';
import store from './store';
import App from './App.vue';

/**
 * Set Vue config
 */
Vue.config.productionTip = false;

/**
 * Use Vue plugins
 */
Vue.use(vueAutoComponentsLoader);
Vue.use(waterfall);

/**
 * Vue instance
 */
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

/**
 * Install extension script
 */
installLoginCheck(app);
installAxiosDefault();
installTestLogin();

/**
 * Mount
 */
app.$mount('#app');
