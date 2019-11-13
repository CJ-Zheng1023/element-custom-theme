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
@elStatHoverBoxShadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26);
.el-stat{
  border-radius: 2px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  &:hover{
    cursor: pointer;
    box-shadow: @elStatHoverBoxShadow;
  }
  .el-stat__icon{
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    display: block;
    float: left;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 15px;
    font-size: 35px;
    line-height: 35px;
    & >i {
      color: #FFFFFF;
      opacity: 0.1;
      margin-left: -35px;
      font-size: 110px;
      line-height: 110px;
    }
  }
  & .el-stat__details{
    margin-bottom: 5px;
    position: absolute;
    right: 15px;
    top: 25px;
    & .el-stat__value{
      color: #FFFFFF;
      font-weight: 300;
      margin-bottom: 0px;
      text-align: right;
      font-size: 34px;
      line-height: 36px;
      letter-spacing: -1px;
    }
    & .el-stat__label{
      color: #FFFFFF;
      opacity: 1;
      text-align: right;
      font-size: 16px;
      letter-spacing: 0px;
      font-weight: 300;
    }
  }
}
</style>
