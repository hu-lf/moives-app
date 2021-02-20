<template>
  <div id="main">
    <Header title="电影院"></Header>

    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <div class="cinema_body">
        <ul>
          <li v-for="cinema in cinemas" :key="cinema.id">
            <div>
              <span>{{ cinema.nm }}</span>
              <span class="q"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
              <span>{{ cinema.addr }}</span>
              <span>{{ cinema.distance }}</span>
            </div>
            <div class="card">
              <div
                v-for="(val, key) in cinema.tag"
                :key="key"
                v-if="val == 1 || val == '折扣卡'"
                :class="key | setClass"
              >
                {{ key | setTag }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "cinema",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cinemas: [],
      geoCity: "",
    };
  },
  mounted() {
    //   先获取当前定位到的城市
    fetch("cities.json")
      .then((res) => res.json())
      .then((res) => {
        //   获取到该城市id并拼接
        this.geoCity = res.geoCity.id;
        fetch("/ajax/cinemaList?cityId=" + this.geoCity)
          .then((res) => res.json())
          .then((res) => (this.cinemas = res.cinemas));
      });
  },
  filters: {
    //   将tag中的0,1转换为具体的值
    setTag(val) {
      const tags = [
        { key: "allowRefund", val: "退" },
        { key: "endorse", val: "改签" },
        { key: "snack", val: "小吃" },
        { key: "vipTag", val: "折扣卡" },
      ];

      for (let i = 0; i < tags.length; i++) {
        if (tags[i].key === val) {
          return tags[i].val;
        }
      }
      // 还有很多tag数据省略了，用”其他“占位
      return "其他";
    },
    // 根据tag中的值，装换为不同的类
    setClass(val) {
      const tags = [
        { key: "allowRefund", val: "bl" },
        { key: "endorse", val: "bl" },
        { key: "snack", val: "or" },
        { key: "vipTag", val: "or" },
      ];
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].key === val) {
          return tags[i].val;
        }
      }
      return "bl";
    },
  },
};
</script>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#content .cinema_menu {
  position: fixed;
  margin-top: 50px;
}
#content .cinema_body {
  margin-top: 90px;
}
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
