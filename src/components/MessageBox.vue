<template>
  <div class="messageBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div class="wrapper">
      <div @click="handleCancel">{{ cancel }}</div>
      <div @click="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
};
</script>

<style scoped>
.messageBox {
  width: 200px;
  /* height: 120px; */
  border: 1px #ccc solid;
  border-radius: 6px;
  box-shadow: 1px 1.5px 3px 0px #ccc;
  background: white;

  position: fixed;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -100px;
  z-index: 1;
}
.messageBox p,
.messageBox h2 {
  text-align: center;
  line-height: 40px;
}
.messageBox .wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.messageBox .wrapper div {
  line-height: 30px;
  border: 1px #ff6633 solid;
  color: #ff6633;
  border-radius: 3px;
  padding: 0 5px 0 5px;
  margin-bottom: 4px;
}
</style>
