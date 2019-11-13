<template>
  <div class="el-stat" :style="{'background-color': color}">
       <span v-if="icon" class="el-stat__icon">
              <i :class="icon"></i>
      </span>
      <div class="el-stat__details">
        <div v-if="value" class="el-stat__value">{{value}}</div>
        <div v-if="label" class="el-stat__label">{{label}}</div>
      </div>
  </div>
</template>
<script>
export default{
  name: 'ElStat',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="less">
</style>
