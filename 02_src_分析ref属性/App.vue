<template>
  <div>
    <h1 v-text="msg1" id="title1"></h1>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showH">点我输出上方的dom元素</button>
    <School ref="sch" />
  </div>
</template>

// ref属性
// 1.被用来给元素或子组件注册引用信息(id的替代者)
// 2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象vc
// 3.使用方式:
// 打标识:<h1 ref="xxx">.....</h1>或<School ref="xxx"xx/School>获取:this.$refs.xxx

<script>
import School from "./components/School";

export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue",
      msg1: "欢迎学习Vue1",
    };
  },
  methods: {
    showH(e) {
      console.log(document.getElementById("title1"));
      console.log(this.$refs.title); //this ==> vc(app组件)
      console.log(e.target); //发生事件的dom元素m
      console.log(this.$refs.sch); //可以是school组件加refs属性 获得的是组件事例对象vc
    },
  },
  components: {
    School,
  },
};
</script>

