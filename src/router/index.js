import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import centerRouter from "@/router/routes/center";
import cinemaRouter from './routes/cinema';
import filmRouter   from './routes/film';



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
  // base: process.env.BASE_URL,
  routes
})

export default router
