<template>
  <div class="el-list-item" :class="[isActive ? 'active' : '', isRead ? 'read' : '']">
    <div class="el-list-item__header">
      <div class="el-list-item__header-inner">
        <div class="el-list-item__title">
          <slot name="title">
            <span>{{title}}</span>
          </slot>
        </div>
        <div class="el-list-item__status">
          <slot name="status"></slot>
        </div>
      </div>
    </div>
    <div class="el-list-item__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isRead: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
  @defaultBgColor: #f6fbfc;
  @borderBottomColor: #F1F4F7;
  @activeBgColor: #edf7f9;
  @activeBorderColor: #4c87b9;
  @hoverBgColor: #edf7f9;
  @readBgColor: #f9f1f9;
  .el-list-item{
    position: relative;
    background-color: @defaultBgColor;
    border-bottom: 1px solid @borderBottomColor;
    cursor: pointer;
    padding: 10px;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background-color: transparent;
    }
    &:hover{
      background-color: @hoverBgColor;
    }
    &.read{
      background-color: @readBgColor;
      &:hover{
        background-color: @hoverBgColor;
      }
    }
    &.active{
      background-color: @activeBgColor;
      &:before{
        background-color: @activeBorderColor;
      }
      &:hover{
        background-color: @hoverBgColor;
      }
    }
    & .el-list-item__header-inner{
      &:after{
        content: '';
        display: block;
        clear: both;
      }
      & .el-list-item__title{
        color: #65A0D0;
        font-size: 16px;
        font-weight: 500;
        padding: 3px 0 13px 0;
        float: left;
      }
      & .el-list-item__status{
        padding: 3px 0 13px 0;
        float: right;
      }
    }
    & .el-list-item__body{
      color: #96a5aa;
      font-size: 14px;
      word-wrap: break-word;
      word-break: break-all;
      line-height: 1.4;
    }
  }
</style>
