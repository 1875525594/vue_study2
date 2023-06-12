<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      //发送给代理服务器（8080），students为请求资源，该资源首先从代理服务器（public）找，没有则然后去端口5001服务器找
      axios
        .get("/api/students") //其实这里就是请求http://localhost:8080/students只不过把请求转移给了端口5001
        .then((res) => console.log(res.data))
        .catch((e) => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    },
    getCars() {
      axios
        .get("/demo/cars") //同理
        .then((res) => console.log(res.data))
        .catch((e) => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    },
  },
};
</script>



