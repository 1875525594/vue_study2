<template>
  <div class="demo">
    <h2>学校名称:{{ hh.name }}</h2>
    <h2>学校地址: {{ hh.address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    console.log(this);
    return {
      hh: {
        name: "wust university",
        address: "武汉科技大学",
      },
    };
  },
  mounted() {
    console.log("School", this);
    //hello事件检测到，接收数据
    this.$bus.$on("hello", (data111) => {
      console.log(`我是School组件,我收到了数据,${data111.sex}`);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello"); //销毁解绑
  },
};
</script>

<style scoped>
/*scoped代表局部的*/
.demo {
  background: skyblue;
  padding: 5px;
}
</style>


