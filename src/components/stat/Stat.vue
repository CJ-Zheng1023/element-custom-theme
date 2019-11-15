<template>
  <div class="">
    <el-row :gutter="20">
      <div v-for="item in dataList" :key="item.title">
        <el-col :span="6">
          <el-stat :value="item.value" :label="item.label" :icon="item.icon" :color="item.color">
          </el-stat>
        </el-col>
      </div>
    </el-row>
    <div class="stat1">
      <el-row :gutter="20">
        <div v-for="item in stat1DataList" :key="item.title">
          <el-col :span="6">
            <el-stat1 :value="item.value" :label="item.label" :icon="item.icon" :bgcolor="item.bgcolor" :progressnumber="item.progressnumber" :progresslabel="item.progresslabel" :fcolor="item.fcolor">
            </el-stat1>
          </el-col>
        </div>
      </el-row>
    </div>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>stat使用说明</span>
      </div>
      <div>
        <p><span>value</span><span class="item">值</span></p>
        <p><span>label</span><span class="item">描述</span></p>
        <p><span>icon</span><span class="item">图标</span></p>
        <p><span>color</span><span class="item">背景颜色</span></p>
      </div>
    </el-card>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>stat1使用说明</span>
      </div>
      <div>
        <p><span>bgcolor</span><span class="item">背景颜色</span></p>
        <p><span>icon</span><span class="item">图标</span></p>
        <p><span>value</span><span class="item">值</span></p>
        <p><span>label</span><span class="item">标签</span></p>
        <p><span>fcolor</span><span class="item">数字字体颜色</span></p>
        <p><span>progressnumber</span><span class="item">进度条数值</span></p>
        <p><span>progresslabel</span><span class="item">进度条标签</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Stat',
  data () {
    return {
      stat1DataList: [{
        bgcolor: '#FFF',
        icon: 'el-icon-s-data',
        value: '1349',
        fcolor: '#5C9BD1 !important',
        label: 'TOTAL PROFIT',
        progressnumber: 34,
        progresslabel: 'PROGRESS'
      }, {
        bgcolor: '#FFF',
        icon: 'el-icon-thumb',
        value: '1349',
        fcolor: '#f36a5a !important',
        label: 'TOTAL PROFIT',
        progressnumber: 50,
        progresslabel: 'PROGRESS'
      }, {
        bgcolor: '#FFF',
        icon: 'el-icon-shopping-cart-2',
        value: '1349',
        fcolor: '#4DB3A2 !important',
        label: 'TOTAL PROFIT',
        progressnumber: 68,
        progresslabel: 'PROGRESS'
      }, {
        bgcolor: '#FFF',
        icon: 'el-icon-s-custom',
        value: '1349',
        fcolor: '#8877a9 !important',
        label: 'TOTAL PROFIT',
        progressnumber: 100,
        progresslabel: 'PROGRESS'
      }],
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
  .stat1{
    background: #e9ecf3;
    padding:10px;
  }
  .use-desc{
    margin: 20px 0px;
  }
  .item{
    margin-left: 10px;
    color: #009688;
  }
</style>
