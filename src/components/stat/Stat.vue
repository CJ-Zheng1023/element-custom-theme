<template>
  <div>
    <el-row :gutter="20">
      <div v-for="item in dataList" :key="item.title">
        <el-col :span="6">
          <el-stat :value="item.value" :label="item.label" :icon="item.icon" :color="item.color">
          </el-stat>
        </el-col>
      </div>
    </el-row>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>value</span><span class="item">值</span></p>
        <p><span>label</span><span class="item">描述</span></p>
        <p><span>icon</span><span class="item">图标</span></p>
        <p><span>color</span><span class="item">每快的背景颜色</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Stat',
  data () {
    return {
      dataList: [{
        value: '1349',
        label: 'New Feedbacks',
        icon: 'el-icon-goods',
        color: '#4c87b9'
      }, {
        value: '125M',
        label: 'Total Profit',
        icon: 'el-icon-goods',
        color: '#d05454'
      }, {
        value: '549',
        label: 'New Orders',
        icon: 'el-icon-goods',
        color: '#3faba4'
      }, {
        value: '+89%',
        label: 'Brand Popularity',
        icon: 'el-icon-goods',
        color: '#8877a9'
      }]
    }
  }
}
</script>
<style scoped lang="less">
  .use-desc{
    margin: 20px 0px;
  }
  .item{
    margin-left: 10px;
    color: #009688;
  }
</style>
