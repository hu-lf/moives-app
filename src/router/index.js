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
  mineRoutes,
  {
    path: '/detail/:movie_id',
    name: "detail",
    component: () => import("@/views/movie/detail"),
  },
  {
    // 1. 上下两种的区别；2. 第一种时，router-link-active不被激活
    // 3. 重定向到 /movie ？还不如直接到hot
    // path: '/*',
    // component:() => import("@/views/movie")
    
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
