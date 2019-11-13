<template>
  <div @click="clickItem" class="el-filter-item" :class="[isActive ? 'el-filter-item--active' : '']">
    <span>{{label}}</span>
  </div>
</template>
<script>
export default {
  name: 'ElFilterItem',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    clickItem () {
      this.$parent.handleClickItem(this.value)
    }
  }
}
</script>
