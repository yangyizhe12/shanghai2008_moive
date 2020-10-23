import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import centerRouter from "@/router/routes/center";
import cinemaRouter from './routes/cinema';
import filmRouter   from './routes/film';
import detailRouter from './routes/detail';
import cityRouter   from './routes/city';
import vuexRouter   from './routes/vuex';
import authRouter   from './routes/auth';
import cinemaDetailRouter from './routes/cinemaDetail';

const routes = [
  {
    path: '/',
    redirect:'/film'
  },

  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,  
  cityRouter,
  vuexRouter,
  ...authRouter,
  cinemaDetailRouter
  
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
