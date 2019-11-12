<template>
  <div>
    <el-well>
      well
    </el-well>
    <el-well size="small">
      well
    </el-well>
    <el-well size="large">
      well
    </el-well>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>size:</span><span class="item">组件修饰类，small/large，主要控制padding和border-radius值</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>

export default {
  name: 'well'
}
</script>
<style scoped lang="less">
  .el-well{
    margin-bottom: 10px;
  }
  .use-desc{
    margin: 20px 0;
  }
  .item{
    margin-left: 10px;
    color: #009688;
  }
</style>
