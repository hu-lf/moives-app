<template>
  <div id="main">
    <!-- Header -->
    <Header title="影片详情">
      <i class="iconfont icon-right" @touchstart="handleToBack"></i>
    </Header>

    <!-- 主体内容 -->
    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | setSize('148.208')" />
          </div>
          <div class="detail_list_info">
            <h2>{{ detailMovie.nm }}</h2>
            <p>{{ detailMovie.enm }}</p>
            <p>{{ detailMovie.sc }}</p>
            <p>{{ detailMovie.cat }}</p>
            <p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
            <p>{{ detailMovie.pubDesc }}</p>
          </div>
        </div>
      </div>

      <div class="detail_intro">
        <p>{{ detailMovie.dra }}</p>
      </div>

      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li
            v-for="(photo, index) in detailMovie.photos"
            :key="index"
            class="swiper-slide"
          >
            <div>
              <img :src="photo | setSize('160.120')" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "detail",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      detailMovie: {},
    };
  },
  methods: {
    handleToBack() {
      this.$router.back();
    },
  },
  activated() {
    var movie_id = this.$route.params.movie_id;
    fetch("/ajax/detailmovie?movieId=" + movie_id)
      .then((res) => res.json())
      .then((res) => {
        this.detailMovie = res.detailMovie;
        // Swiper的使用
        this.$nextTick(() => {
          new Swiper(".detail_player", {
            slidesPerView: "auto",
            freeMode: true,
            freeModeSticky: true,
          });
        });
      });
  },
};
</script>

<style scoped>
#content {
  margin-top: 51px;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  /* background: url(../images/movie_1.jpg) 0 40%; */
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px;}
.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
</style>