<template>
  <div class="player">
    <video-player class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"

                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"

                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css'

import {videoPlayer} from 'vue-video-player'

export default {
  name: "Player",
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          //类型
          type: "video/mp4",
          //url地址
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        //你的封面地址
        poster: '',
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      }
    }
  },

  mounted() {


  },
  methods: {
    onPlayerPlay(e) {

    },
    onPlayerPause(e) {

    },
    onPlayerEnded(e) {

    },
    onPlayerWaiting(e) {

    },
    onPlayerPlaying(e) {

    },
    onPlayerLoadeddata(e) {

    },
    onPlayerTimeupdate(e) {

    },
    onPlayerCanplay(e) {

    },
    onPlayerCanplaythrough(e) {

    },
    playerStateChanged(e) {

    },
    playerReadied(e) {

    }
  }

};
</script>

<style scoped>
/*设置播放按钮的形状与位置*/
/deep/ .video-js .vjs-big-play-button {
  border-radius: .2rem;
  top: 2rem;
  left: 3.8rem;
}
</style>
