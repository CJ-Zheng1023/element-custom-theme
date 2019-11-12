<template>
  <div class="el-panel" :style="{'border-color': boxColor}" :class="[theme === 'light' ? 'el-panel--light' : 'el-panel--box']">
    <div class="el-panel__header" :style="{'background-color': boxColor}">
      <div class="el-panel__header-inner">
        <div class="el-panel__caption">
          <slot name="caption">
            <span class="el-panel__icon">
              <i :class="icon"></i>
            </span>
            <span class="el-panel__title">{{title}}</span>
            <span class="el-panel__sub">{{sub}}</span>
          </slot>
        </div>
        <div class="el-panel__tools">
          <slot name="tools"></slot>
        </div>
      </div>
    </div>
    <div class="el-panel__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#fff'
    },
    sub: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    boxColor () {
      return this.theme === 'box' ? this.color : '#fff'
    }
  }
}
</script>
<style scoped lang="less">
  .el-panel{
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 10px;
    &.el-panel--light{
      & .el-panel__header-inner{
        padding: 10px 0 15px 0;
        border-bottom: 1px solid #eef1f5;
      }
    }
    &.el-panel--box{
      border-width: 1px;
      border-style: solid;
      & .el-panel__caption{
        & .el-panel__icon, & .el-panel__title{
          color: #fff;
        }
      }
    }
    & .el-panel__header{
      padding: 15px 20px;
      & .el-panel__header-inner{
        &:after{
          content: "";
          display: block;
          clear: both;
        }
      }
    }
    & .el-panel__caption{
      float: left;
      vertical-align: middle;
      & .el-panel__icon{
        font-size: 14px;
        color: #666;
        margin-right: 3px;
      }
      & .el-panel__title{
        font-size: 18px;
        font-weight: 600;
        color: #666;
        margin-right: 2px;
      }
      & .el-panel__sub{
        font-size: 14px;
        font-weight: 400;
        color: #9eacb4;
      }
    }
    & .el-panel__tools{
      float: right;
    }
    & .el-panel__body{
      padding: 20px;
    }
  }
</style>
