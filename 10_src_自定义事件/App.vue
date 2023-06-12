<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>

    <!-- 子组件====>父组件 -->

    <!--第一种写法使用@或v-on
    通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 如：@personalEvent 等价于 v-on:personalEvent 
    once代表改事件只执行一次
    如：@personalEvent.once  
    触发发了组件Student的personalEvent事件时候，调用App的getStudentName方法
    即：当Student里面$emit('personalEvent',this.name,666,777,888)被执行时，即触发personalEvent事件时候，
       这时调用调用App的getStudentName(name,...params)方法,参数一一对应，收到来自Student的this.name,[666,777,888]
    -->
    <Student @personalEvent="getStudentName" @demo="demo" />

    <!--第二种写法使用ref绑定事件，来绑定子组件
    ref:获取Student的vc实例对象，实例对象名为：student，
    App主键通过：this.$refs.student获取组件student，然后进行各种操作。
    如，App通过this.$refs.student.$on('personalEvent',getgetStudentName),来获取子组件的传过来的数据，this.name,[666,777,888]
    $on：当事件personalEvent被触发时，执行回调，执行getgetStudentName方法。

    native：告诉vue，解析时候，别把@click当成自定义事件，因为click时原生事件
    --->
    <Student ref="student" @click.native="show" />

    <!--第三种，通过父组件给子组件传递函数类型的 props 实现了子给父传递数据-->
    <School :getSchoolName="getSchoolName" />
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "helloこんにちは",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log(`app收到了学校名,${name}`);
    },
    getStudentName(name, ...params) {
      //...params表示多个参数，使用数组接收，数组名为params
      console.log("自定义");
      console.log(`app收到了学生名, ${name}`);
      this.studentName = name;
      console.log(`剩余参数,${params}`);
    },
    demo() {
      console.log("demo事件被触发了");
    },
    show() {
      console.log(`123`);
    },
  },
  mounted() {
    /**可以通过ref拿到组件实例对象**/
    // setTimeout(() => {
    //   this.$refs.student.$on('personalEvent', this.getStudentName); //当App组件一挂载完毕经过三秒我就在Student组件上绑定事件
    //   //this.$refs.student.$once('personalEvent', this.getStudentName); //注意此时事件只执行一次就不执行了(once),一次性
    // },3000)
    //注意这里回调要写成剪头函数，不然this会丢失,这个this就是(vc)app,而不是(vc)student
    this.$refs.student.$on("personalEvent", (name) => {
      //接收子组件里面this.$emit('personalEvent',this.name,666,777,888)的name
      console.log(this);
      console.log(name);
      this.studentName = name;
    });
  },
};
</script>

<style>
/*
   全局的样式是不需要加scoped
   全局共享
   */
.app {
  background: gray;
  padding: 5px;
}
</style>


