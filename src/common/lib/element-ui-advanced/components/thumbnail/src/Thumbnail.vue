<template>
  <div class="el-thumbnail" :class="[!showCaption ? 'el-thumbnail--only-img' : '']">
    <div class="el-thumbnail__figure">
      <img :src="img"/>
    </div>
    <div v-if="showCaption" class="el-thumbnail__figcaption">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElThumbnail',
  props: {
    img: {
      type: String,
      default: '',
      required: true
    },
    showCaption: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
  .el-thumbnail{
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 4px;
    margin-bottom: 10px;
    background-color: #fff;
    transition: border .2s ease-in-out;
    &.el-thumbnail--only-img{
      cursor: pointer;
      &:hover{
        border-color: #337ab7;
      }
    }
    & .el-thumbnail__figure{
      width: 100%;
      & img{
        width: 100%;
      }
    }
    & .el-thumbnail__figcaption{
      padding: 10px;
      line-height: 1.4;
    }
  }
</style>
