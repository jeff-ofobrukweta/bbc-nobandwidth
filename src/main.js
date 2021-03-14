import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

new Vue({
  render: h => h(App),
}).$mount('#app')
