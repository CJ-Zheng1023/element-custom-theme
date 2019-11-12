<template>
  <div>
    <div>
      <h5>基础用法：</h5>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    <div class="tag-group">
      <h5>Dark：</h5>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark">
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <h5>Plain：</h5>
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain">
        {{ item.label }}
      </el-tag>
    </div>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@tagFontweight: 600;</span><span class="item">---标签-字体粗细</span></p>
        <p><span>@tagBoxshadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.15);</span><span class="item">---标签-边框阴影</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Tag',
  data () {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.el-tag{
  margin: 10px;
}
.use-desc{
  margin: 20px 0px;
}
.item{
  margin-left: 10px;
  color: #009688;
}
</style>
