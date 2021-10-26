import Vue from 'vue'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Box2 from './components/Box2.vue'
import Box1 from './components/Box1.vue'

// import db from './db.json';
// Vue.prototype.$appConfig = db;

Vue.component('footerr', Footer)
Vue.component('box2', Box2)
Vue.component('box1', Box1)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
