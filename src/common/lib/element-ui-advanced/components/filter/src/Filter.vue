<template>
  <div class="el-filter">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ElFilter',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.setSelected()
  },
  watch: {
    value () {
      this.setSelected()
    }
  },
  methods: {
    setSelected () {
      this.$children.forEach(item => {
        item.isActive = this.value === item.value
      })
    },
    handleClickItem (value) {
      this.$emit('input', value)
      if (this.value !== value) {
        this.$emit('change', value)
      }
    }
  }
}
</script>
<style scoped lang="less">
  .el-filter{
    &:after{
      content: '';
      display: block;
      clear: both;
    }
  }
</style>
