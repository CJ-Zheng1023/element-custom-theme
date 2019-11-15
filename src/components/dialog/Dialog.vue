<template>
  <div>
    <el-alert
      title="对话可配置项有：头部背景色、头部关闭按钮颜色、头部关闭按钮悬浮和聚焦时颜色"
      type="success" class="desc">
    </el-alert>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-button type="text" @click="dialogTableVisible = true">点击打开嵌套表格的Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      class="el-dialog-table"
      >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogTableVisible"
      width="80%"
    >
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
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@dialogHeaderBackgroundColor: #FFF;</span><span class="item">---对话框-头部-背景色</span></p>
        <p><span>@dialogHeaderFontColor:#303133; </span><span class="item">---对话框-头部- 字体颜色</span></p>
        <p><span>@dialogHeaderFontSize: 18px;</span><span class="item">---对话框-头部- 字体大小</span></p>
        <p><span>@dialogHeaderBtnCloseColor: #909399;</span><span class="item">--- 对话框-头部- 关闭按钮-颜色</span></p>
        <p><span>@dialogHeaderBtnHoverOrFocusColor: #1E9FFF;</span><span class="item">---对话框-头部- 关闭按钮-悬浮或聚焦颜色</span></p>
        <p><span>@dialogHeaderPaddingTop: 20px;</span><span class="item">---对话框-头部- 上padding</span></p>
        <p><span>@dialogHeaderPaddingbottom: 10px;</span><span class="item">--- 对话框-头部- 下padding</span></p>
        <p><span>@dialogHeaderPaddingHorizontal: 20px;</span><span class="item">---对话框-头部- 左右padding</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
import ElDialog from '../../../node_modules/element-ui/packages/dialog/src/component.vue'

export default {
  components: {ElDialog},
  name: 'Dialog',
  data () {
    return {
      dialogVisible: false,
      dialogTableVisible: false,
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
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
  .desc{
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
