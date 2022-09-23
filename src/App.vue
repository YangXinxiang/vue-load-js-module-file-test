<template>
  <div id="app">
    
    <!-- HelloWorld :src="m3u8src" /-->
  </div>
</template>

<script>
import yuv2,  {FrameSink as FrameSink2, SoftwareFrameSink as SoftwareFrameSink2}  from './lib/yuv-canvas.js'
import yuv3,  {FrameSink as FrameSink3, SoftwareFrameSink as SoftwareFrameSink3}  from '../node_modules/yuv-canvas/src/yuv-canvas22'
import yuv1, {FrameSink as FrameSink1, SoftwareFrameSink as SoftwareFrameSink1, WebGLFrameSink as WebGLFrameSink1, attach} from 'yuv-canvas';


export default {
  name: 'App',
  data() {
    return {      
    }    
  },
  components: {
  },
  mounted() {
    this.startTest()
  },
  methods: {
    startTest() {
      console.log('startTest :: 从安装环境下导入的:: yuv1 = ',yuv1)
      console.log('startTest :: 从安装环境下导入的:: FrameSink = ',FrameSink1)
      console.log('startTest :: 从安装环境下导入的:: SoftwareFrameSink = ',SoftwareFrameSink1)
      console.log('startTest :: 从安装环境下导入的:: WebGLFrameSink = ',WebGLFrameSink1)
      console.log('startTest :: 从安装环境下导入的:: attach = ',attach)
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
      console.log('startTest :: 从单独文件导入:: yuv2 = ', yuv2)
      console.log('startTest :: 从单独文件导入:: FrameSink2 = ', FrameSink2)
      console.log('startTest :: 从单独文件导入:: SoftwareFrameSink2 = ', SoftwareFrameSink2)
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
      console.log('startTest :: 从单独文件导入:: yuv3 = ', yuv3)
      console.log('startTest :: 从单独文件导入:: FrameSink3 = ', FrameSink3)
      console.log('startTest :: 从单独文件导入:: SoftwareFrameSink3 = ', SoftwareFrameSink3)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
