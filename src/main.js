import Vue from 'vue'
import App from './App.vue'

// 默认导入router，store文件夹中的index配置文件
import router from './router'
import store from './store'

Vue.filter("setSize", (url, size) => {
  if(!url) {return}
  return url.replace("w.h", size)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
