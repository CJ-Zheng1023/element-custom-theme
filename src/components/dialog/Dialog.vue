<template>
  <div>
    <el-alert
      title="对话可配置项有：头部背景色、头部关闭按钮颜色、头部关闭按钮悬浮和聚焦时颜色"
      type="success" class="desc">
    </el-alert>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>这是一段信息</span>
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
export default {
  name: 'Dialog',
  data () {
    return {
      dialogVisible: false
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
    margin-bottom: 20px;
  }
  .item{
    margin-left: 10px;
    color: #009688;
  }
</style>
