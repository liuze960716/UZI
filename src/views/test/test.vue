<template>
  <div id="box">
    <div class="content">
      <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn" @imgError="imgErrorFn">
        <div class="img-info" slot-scope="props">
            <img class="waterImg" src="../../../public/static/img/moRenAdmin.png" alt="">
            <div class="waterText">
              <p class="waterTit">标题标题标题标题标题标题标题标题标题</p>
              <p class="waterCon">
                <span class="waterName">作者名字</span>
                <span>{{props.value.info}}</span>
              </p>
            </div>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from '../../components/vue-waterfall-easy/vue-waterfall-easy.vue'

export default {
  name: 'test',
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
      pullDownDistance: 0
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('../../../static/mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
          .then(res => {
            this.group++
            if (this.group === 10) { // 模拟已经无新数据，显示 slot="waterfall-over"
              this.$refs.waterfall.waterfallOver()
              return
            }
            this.imgsArr = this.imgsArr.concat(res.data)
          })
    },
    clickFn(event, { index, value }) {
      // event.preventDefault()
      if (event.target.tagName.toLowerCase() == 'img') {
        console.log('img clicked', index, value)
      }
    },
    imgErrorFn(imgItem){
      console.log('图片加载错误',imgItem)
    },
    changeImgArr() {
      this.$http.get('../../../static/mock/data-change.json') // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个静态json文件模拟
          .then(res => {
            this.imgsArr = res.data
          })
    },
    pullDownMove(pullDownDistance) {
      // console.log('pullDownDistance', pullDownDistance)
      this.pullDownDistance = pullDownDistance
    },
    pullDownEnd(pullDownDistance) {
      console.log('pullDownEnd')
      if(this.pullDownDistance>50){
        alert('下拉刷新')
      }
      this.pullDownDistance = 0
    },
  }
}
</script>

<style lang="scss">
#box {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
  }
}

.img-info {
  display: flex;
  align-items: center;
  background: #FFFFFF;

  .waterImg{
    width: 40px;
    height: 40px;
    margin: 3px;
  }

  .waterText{
    width: 100%;
  }

  .waterTit{
    color: #555555;
    font-size: 16px;
    text-align: left;
    padding-left: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 128px;
  }

  .waterCon{
    width: 128px;
    text-align: left;
    color: #666666;
    font-size: 14px;
    padding-left: 3px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;


    .waterName{
      padding-right: 15px;
    }

  }

}



</style>
