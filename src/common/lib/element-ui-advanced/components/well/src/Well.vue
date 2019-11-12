<template>
  <div class="el-well" :class="[wellSize]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ElWell',
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    wellSize () {
      if (this.size === 'small') {
        return 'el-well--sm'
      } else if (this.size === 'large') {
        return 'el-well--lg'
      } else {
        return ''
      }
    }
  }
}
</script>
<style scoped lang="less">
  .el-well{
    background-color: #eee;
    min-height: 20px;
    padding: 19px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 2px;
    &.el-well--sm{
      border-radius: 1px;
      padding: 9px;
    }
    &.el-well--lg{
      border-radius: 4px;
      padding: 24px;
    }
  }
</style>
