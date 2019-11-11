<template>
  <div>
    <el-alert
      title="表格可配置项有：表头背景色、每行悬浮样式、斑马纹表格样式、每行高度、表头高度"
      type="success" class="desc">
    </el-alert>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-view" size="mini" round plain>查 看</el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" round plain>编 辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" round plain>删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@tableHoverBackgroundColor: #f2f2f2;</span><span class="item">---表格-悬浮-背景颜色</span></p>
        <p><span>@tableThreadBackgroundColor: #f2f2f2;</span><span class="item">--- 表格-表头-背景颜色</span></p>
        <p><span>@tableTdPaddingVertical: 5px;</span><span class="item">---表格- 每个单元格-上下padding</span></p>
        <p><span>@tableTdPaddingHorizontal: 0px;</span><span class="item">---表格- 每个单元格-左右padding</span></p>
        <p><span>@tableAlreadyReadTdBackgroundColor: #f2f2f2;</span><span class="item">--表格- 已读背景色</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        isRead: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        isRead: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        isRead: false
      }]
    }
  }
}
</script>
<style scoped lang="less">
.desc {
  margin-bottom: 20px;
}
.use-desc{
  margin: 20px 0px;
}
.item{
  margin-left: 10px;
  color: #009688;
}
</style>
