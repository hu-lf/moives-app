import Vue from 'vue'
import VueRouter from 'vue-router'
// 将各模块的路由配置收集起来
import movieRoutes from './movie'
import cinemaRoutes from './cinema'
import mineRoutes from './mine'

Vue.use(VueRouter)

const routes = [
  movieRoutes,
  cinemaRoutes,
  mineRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
