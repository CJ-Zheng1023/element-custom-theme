<template>
  <div @click="clickItem" class="el-filter__item" :class="[isActive ? 'el-filter__item--active' : '']">
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
<style scoped lang="less">
  .el-filter__item{
    float: left;
    margin: 0 5px 5px 0;
    cursor: pointer;
    padding: 6px 15px;
    background-color: #eee;
    color: #555;
    &:hover{
      background-color: #0da3e2;
      color: #fff;
    }
    &.el-filter__item--active{
      background-color: #0da3e2;
      color: #fff;
    }
  }
</style>
