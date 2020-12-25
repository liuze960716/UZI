<template>
  <div class="hello">
    <div>{{ msgS }}</div>
    <van-button type="danger" @click="show = true">危险按钮</van-button>
    <div>getAPI测试结果：{{ isGet }}</div>
    <div>postAPI测试结果：{{ isPost }}</div>


    <van-image-preview v-model="show" :images="images" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import Vue from 'vue'
import {ImagePreview} from 'vant';

import {mockGetApi, mockPostApi} from '../../request/api.js';

Vue.use(ImagePreview);
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      msgS: 'Hello，基于vue3.0：vant组件、rem适配、axios封装的模板',
      isGet: false,
      isPost: false,

      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    testGetApi() {
      mockGetApi({}).then(res => {
        if (res.success) {
          this.isGet = true
        } else {
          this.isGet = false
        }
      })
    },
    testPostApi() {
      mockPostApi({}).then(res => {
        if (res.data) {
          this.isPost = true
        } else {
          this.isPost = false
        }
      })
    }
  },
  mounted() {
    // this.testGetApi()
    // this.testPostApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
