import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});


//定义事件总线
Vue.prototype.eventBus = new Vue()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
