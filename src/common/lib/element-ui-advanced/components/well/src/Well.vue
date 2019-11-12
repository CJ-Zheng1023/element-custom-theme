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
    border: 1px solid #e3e3e3;
    background-color: #f5f5f5;
    min-height: 20px;
    padding: 19px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    border-radius: 4px;
    &.el-well--sm{
      border-radius: 3px;
      padding: 9px;
    }
    &.el-well--lg{
      border-radius: 6px;
      padding: 24px;
    }
  }
</style>
