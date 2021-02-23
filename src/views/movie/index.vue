<template>
  <div id="main">
    <Header title="猫眼电影"></Header>

    <div id="content">
      <!-- 二级链接 -->
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{ $store.state.city.name }}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/hot" class="hot_item"
            >正在热映</router-link
          >
          <router-link tag="div" to="/movie/coming" class="hot_item"
            >即将上映</router-link
          >
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <!-- 二级容器 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { messageBox } from "@/components";

export default {
  name: "movie",
  components: {
    Header,
    Footer,
  },
  // 只执行一次：在应用刚启动的时候
  mounted() {  
    setTimeout(function() {
      // 创建一个百度地图对象
      var myCity = new BMap.LocalCity();
      myCity.get(showMessageBox);
    }, 3000)

    function showMessageBox(result) {

      // 获取城市
      var cityName = result.name;
      var cityId = result.code;

      // 判断是否弹出消息框
      var nowCity = window.localStorage.getItem("nowCityName")
      if(nowCity == cityName){ return }

      // 弹出消息框
      messageBox({
        title: cityName,
        content: "当前定位",
        cancel: "继续浏览",
        ok: "切换定位",
        handleOk() {
          window.localStorage.setItem("nowCityName", cityName) 
          window.localStorage.setItem("nowCityId", cityId) 
          window.location.reload()
        },
      });
    }
  },
};
</script>

<style scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  position: fixed;
  margin-top: 50px;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
.city_body,
.movie_body,
.search_body {
  margin-top: 97px;
}
</style>