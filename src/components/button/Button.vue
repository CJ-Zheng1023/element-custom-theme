<template>
  <div>
    <el-alert
      title="按钮可配置项有：按钮上下左右padding、是否有圆角、按钮尺寸"
      type="success" class="desc">
    </el-alert>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>

    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@buttonFontHeight: 16px;</span><span class="item">---按钮-字体-高度</span></p>
        <p><span>@buttonRadius: 0px;</span><span class="item">--- 按钮-圆角尺寸</span></p>
        <p><span>@buttonPaddingHorizontal: 20px;</span><span class="item">---按钮-左右padding</span></p>
        <p><span>@buttonIsRoundRadius: 20px;</span><span class="item">---圆角按钮-圆角尺寸</span></p>
        <p><span>@buttonIsRoundPaddingHorizontal: 23px;</span><span class="item">---圆角按钮-左右padding</span></p>
        <p><span>@buttonSizeMediumPaddingVertical: 10px;</span><span class="item">---中等按钮-上下padding</span></p>
        <p><span>@buttonSizeMediumPaddingHorizontal: 20px;</span><span class="item">---中等按钮-左右padding</span></p>
        <p><span> @buttonSizeSmallPaddingVertical: 9px;</span><span class="item">---小型按钮-上下padding</span></p>
        <p><span>@buttonSizeSmallPaddingHorizontal: 15px; </span><span class="item">---小型按钮-左右padding</span></p>
        <p><span>@buttonSizeMiniPaddingVertical: 3px;</span><span class="item">--- 超小按钮-上下padding</span></p>
        <p><span>@buttonSizeMiniPaddingHorizontal: 8px;</span><span class="item">--- 超小按钮-左右padding</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Button',
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
.el-button{
  margin-bottom: 10px;
}
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
