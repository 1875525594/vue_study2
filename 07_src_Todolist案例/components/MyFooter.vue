<template>
  <!--隐式类型转换-->
  <div class="todo-footer" v-show="total">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllDoneTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      //reduce方法
      //callback （执行数组中每个值的函数，包含四个参数）
      // 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
      // 2、currentValue （数组中当前被处理的元素）
      // 3、index （当前元素在数组中的索引）
      // 4、array （调用 reduce 的数组）
      //initialValue （作为第一次调用 callback 的第一个参数。）
      //例子：
      // var arr = [1, 2, 3, 4];
      // var sum = arr.reduce(function(prev, cur, index, arr) {
      //     console.log(prev, cur, index);
      //     return prev + cur;
      // })
      // console.log(arr, sum);
      // 打印结果：
      // 1 2 1
      // 3 3 2
      // 6 4 3
      // [1, 2, 3, 4] 10

      return this.todos.reduce((todoTotal, todo) => {
        //隐士类型转换
        return todoTotal + todo.done;
      }, 0);
      // return this.todos.filter(todo => todo.done).length;
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.doneTotal > 0; //计算属性可以通过其他的计算属性接着进行计算得到结果
      },
      set(value) {
        //value注意要么为true，要么为false，因为你是把它应用在了checkbox上
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    // checkAll(e){
    //   // console.log(e.target.checked); //判断这个checkbox到底是不是全选 true全选 false全不选
    //   this.checkAllTodo(e.target.checked);
    // }
    clearAll() {
      this.clearAllDoneTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
