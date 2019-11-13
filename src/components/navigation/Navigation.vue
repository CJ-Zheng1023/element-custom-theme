<template>
  <div>
    <el-alert
      title="导航菜单示例"
      type="success" class="desc" style="margin-bottom: 20px;">
    </el-alert>
    <div class="nav-warpper">
      <ul class="navigation">
        <li class="navigation-item isActive">
          <span class="navigation-item__icon"><i class="el-icon-setting"></i></span>
          <span class="navigation-item__label">Home</span>
        </li>
        <li class="navigation-item">
          <span class="navigation-item__icon"><i class="el-icon-setting"></i></span>
          <span class="navigation-item__label">Home</span>
        </li>
        <li class="navigation-item">
          <span class="navigation-item__icon"><i class="el-icon-setting"></i></span>
          <span class="navigation-item__label">Home</span>
        </li>
        <li class="navigation-item">
          <span class="navigation-item__icon"><i class="el-icon-setting"></i></span>
          <span class="navigation-item__label">Home</span>
        </li>
        <li class="navigation-item">
          <span class="navigation-item__icon"><i class="el-icon-setting"></i></span>
          <span class="navigation-item__label">Home</span>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
  .nav-warpper{
    width:223px;
  }
  .navigation{
    margin: 0;
    padding:0;
    list-style: none;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
    & .navigation-item{
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      color: #6c7b88;
      background: #f4f7f8;
      margin-top: 2px;
      &.isActive,&:hover{
        color: #fff;
        background: #009dc7;
        & .navigation-item__icon>i{
          color: #fff;
        }
      }
      &:first-child{
        margin-top: 0;
      }
      & .navigation-item__icon{
        margin-right: 7px;
        &>i{
          color: #5c7b88;
        }
      }
      & .navigation-item__label{}
    }
  }
</style>
