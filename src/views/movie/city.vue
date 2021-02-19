<template>
  <div class="city_body">

    <!-- 城市列表 -->
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
        </ul>
      </div>

      <div class="city_sort">
        <div v-for="(cities,index) in cityMap" :key="index">
          <h2>{{ index }}</h2>
          <ul>
            <li v-for="city in cities" :key="city.id">{{ city.nm }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 城市索引 -->
    <div class="city_index">
      <ul>
        <li v-for="(cities,index) in cityMap" :key="index">
          {{ index }}
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      cityMap : [],
    }
  },
  mounted() {
    fetch("/cities.json")
    .then(res => res.json())
    .then(res => this.cityMap = res.letterMap)
  }
};
</script>

<style scoped>
#content .city_body{ display: flex; width:100%; }
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
.city_body .city_index {
    position: fixed;
    right: 0;
    background: #fff;
    height: 100%;
}
</style>