<template>
  <div class="demoBox">
    <div>
      <H1> 没有处理</H1>
      <input type="text" v-model="msg" />
      <h5>{{ msg }}</h5>
      <H1>经历处理的 </H1>
      <input type="text" @input="debounceInput($event)" />
    </div>
  </div>
</template>

<script>
import debounce from '../../until/index.js';
export default {
  name: "index",
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    this.onload();
  },
  methods: {
    // 处理过的函数方法
    debounceInput(e) {
      debounce((_) => {
        console.log(e.target.value);
      }, 2000)
    },



    onload() {
      // 检查日期是否为工作日
      const isWeekday = (date) => date.getDay() % 6 !== 0;
      console.log(isWeekday(new Date(2021, 0, 11)));
      // Result: true (Monday)
      console.log(isWeekday(new Date(2021, 0, 10)));
      // Result: false (Sunday)


      const reverse = str => str.split('').reverse().join('');
      reverse('hello world');
      // Result: 'dlrow olleh'

      // 滚动到页面顶部
      const goToTop = () => window.scrollTo(0, 0);
      goToTop();
      // Result: will scroll the browser to the top of the page

    }

  }

}
</script>

<style scoped>
.demoBox{
  font-size: 18px;
}
</style>