<template>
  <div class="movie_body">
    <ul>
      <li
        v-for="movie in movieList"
        :key="movie.id"
        @touchstart="handelToDetail(movie.id)"
      >
        <div class="pic_show">
          <img :src="movie.img | setSize('200.200')" />
        </div>
        <div class="info_list">
          <h2>
            {{ movie.nm }} <img v-if="movie.version" src="@/assets/maxs.png" />
          </h2>
          <p>
            <span class="person">{{ movie.wish }}</span> 人想看
          </p>
          <p>{{ movie.star }}</p>
          <p>{{ movie.comingTitle }}</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "coming",
  data() {
    return {
      movieList: [],
      preCityId: -1,
    };
  },
  // 组件激活时执行
  activated() {
    // 先获取当前城市
    var cityId = this.$store.state.city.id;
    // 如果城市没有切换，则不执行请求
    if (cityId == this.preCityId) {
      return;
    }
    this.preCityId = cityId;

    fetch("/ajax/comingList?token=")
      .then((res) => res.json())
      .then((res) => (this.movieList = res.coming));
  },
  methods: {
    handelToDetail(id) {
      this.$router.push({
        name: "detail", 
        params:{movie_id:id}
      })
    }
  }
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>