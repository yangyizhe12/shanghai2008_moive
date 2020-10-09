import Vue from 'vue'
import VueRouter from 'vue-router'



import centerRouter from '@/router/routes/center';
import cinemaRouter from '@/router/routes/cinema';
import filmRouter   from '@/router/routes/film';

Vue.use(VueRouter)

const routes = [
  // 注册路由模块
  centerRouter,
  cinemaRouter,
  filmRouter,
  //路由配置
  {
    path: '/',
    redirect:'/film'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
