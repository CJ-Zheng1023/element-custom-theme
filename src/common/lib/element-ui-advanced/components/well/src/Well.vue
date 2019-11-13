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
