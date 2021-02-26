<template>
  <div class="search_body">
    <!-- 搜索框 -->
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="kw" />
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li
          v-for="movie in movieList"
          :key="movie.id"
          @touchstart="handelToDetail(movie.id)"
        >
          <div class="img">
            <img :src="movie.img | setSize('200.200')" />
          </div>
          <div class="info">
            <p>
              <span>{{ movie.nm }}</span
              ><span>{{ movie.sc }}</span>
            </p>
            <p>{{ movie.enm }}</p>
            <p>{{ movie.cat }}</p>
            <p>{{ movie.pubDesc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      kw: "",
      movieList: [],
    };
  },
  watch: {
    kw(newKw) {
      this.movieList = [];
      // 这里的cityID参数对于结果应该没有影响，但是这个api还是需要，就加上；
      fetch("/ajax/search?cityId=10&kw=" + newKw)
        .then((res) => res.json())
        .then((res) => {
          if (res.movies) {
            this.movieList = res.movies.list;
          }
        });
    },
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
#content .search_body {
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  line-height: 20px;
}
.search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_body .search_result {
}
.search_body .search_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result ul {
}
.search_body .search_result li {
  border-bottom: 1px #c9c9c9 dashed;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
.search_body .search_result .img {
  width: 60px;
  float: left;
}
.search_body .search_result .img img {
  width: 100%;
}
.search_body .search_result .info {
  float: left;
  margin-left: 15px;
  flex: 1;
}
.search_body .search_result .info p {
  height: 22px;
  display: flex;
  line-height: 22px;
  font-size: 12px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1) {
  font-size: 18px;
  flex: 1;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7103;
}
</style>