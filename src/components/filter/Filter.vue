<template>
  <div>
    <div style="margin-bottom: 10px">
      <span>value值:</span><span>{{value}}</span>
    </div>
    <el-filter v-model="value" @change="change">
      <el-filter-item label="item1" value="1"></el-filter-item>
      <el-filter-item label="item2" value="2"></el-filter-item>
    </el-filter>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>filter使用说明</span>
      </div>
      <div>
        <p><span>value:</span><span class="item">选中值</span></p>
        <p><span>@change:</span><span class="item">事件监听，当value值改变时触发，回调参数为新value值</span></p>
      </div>
    </el-card>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>filter-item使用说明</span>
      </div>
      <div>
        <p><span>label:</span><span class="item">选项标签</span></p>
        <p><span>value:</span><span class="item">选项值</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'MyFilter',
  data () {
    return {
      value: '1'
    }
  },
  methods: {
    change (value) {
      alert(`value新值为${value}`)
    }
  }
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
