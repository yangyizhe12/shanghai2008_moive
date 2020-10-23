import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)　

Vue.use(ElementUI)

Vue.config.productionTip = false

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});

//定义事件总线
Vue.prototype.eventBus = new Vue()


//还原token到vuex中
let _token = localStorage.getItem('_token')
if( _token){
  store.commit('updateToken' , _token)
}




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
