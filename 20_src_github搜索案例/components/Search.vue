<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //使用全局事件总线在组件间传递数据
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      //${xxx}:表示括号里面时js内容，可以防止直接字符串化
      axios
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then((res) => {
          console.log(res.data.items); //注意items为后端参数，注意拼写
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        })
        .catch((e) => {
          console.log(`请求失败:${e.message}`);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: e.message,
            users: [],
          });
        });
    },
  },
};
</script>

<style scoped>
</style>
