<template>
  <div>
    <el-alert
      title="文字提示可配置项有：...."
      type="success" class="desc">
    </el-alert>
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <el-button>上边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <el-button>上右</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <el-button>左上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <el-button>左边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <el-button>左下</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <el-button>右上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <el-button>右边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <el-button>右下</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <el-button>下左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <el-button>下边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <el-button>下右</el-button>
    </el-tooltip>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@tooltipPopperBackgroundColor: #303133;</span><span class="item">文字提示-popper-背景颜色#303133</span></p>
        <p><span>@tooltipPopperColor: #FFF;</span><span class="item">文字提示-popper-字体颜色</span></p>
        <p><span>@tooltipPopperBorderRadius: 4px;</span><span class="item">文字提示-popper-圆角</span></p>
        <p><span>@tooltipPopperPadding: 10px;</span><span class="item">文字提示-popper-上下左右padding</span></p>
        <p><span>@tooltipPopperFontSize: 12px;</span><span class="item">文字提示-popper-字体大小</span></p>
        <p><span>@tooltipPopperLineHeight: 1.2;</span><span class="item">文字提示-popper-行高</span></p>
        <p><span>@tooltipPopperMinWidth: 10px;</span><span class="item">文字提示-popper-最小宽度</span></p>
        <p><span>@tooltipButtonFocusOrHoverColor: #1E9FFF;</span><span class="item">文字提示-按钮-聚焦或悬浮字体颜色</span></p>
        <p><span>@tooltipButtonFocusOrHoverBorderColor: #bce2ff;</span><span class="item">文字提示-按钮-边框颜色</span></p>
        <p><span>@tooltipButtonFocusOrHoverBackgroundColor:  #e9f5ff;</span><span class="item">文字提示-按钮-背景颜色</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Tooltip',
  data () {
    return {
    }
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
    margin: 10px;
  }
</style>
