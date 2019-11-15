<template>
  <div class="el-stat1" :style="{'background-color': bgcolor}">
    <div class="display">
      <div v-if="icon" class="el-stat1__icon">
        <i :class="icon"></i>
      </div>
      <div class="el-stat1__details">
        <div v-if="value" class="el-stat1__value" :style="{'color':fcolor}">{{value}}</div>
        <div v-if="label" class="el-stat1__label">{{label}}</div>
      </div>
    </div>
    <div class="el-stat1__progress">
      <div v-if="progressnumber" class="el-stat1__progressvalue">
        <el-progress :percentage="progressnumber" :color="fcolor" :show-text="false"></el-progress>
      </div>
      <div class="status">
        <div v-if="progresslabel" class="el-stat1__progresslabel">{{progresslabel}}</div>
        <div v-if="progressnumber" class="el-stat1__progressnumber">{{progressnumber}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'ElStat1',
  props: {
    bgcolor: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    fcolor: {
      type: String,
      default: ''
    },
    progressnumber: {
      type: Number,
      default: 0
    },
    progresslabel: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="less">
</style>
