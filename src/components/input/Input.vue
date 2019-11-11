<template>
  <div>
    <el-alert
      title="输入框可配置项有：输入框尺寸(默认/中等/小型/迷你)、输入框圆角大小"
      type="success" class="desc">
    </el-alert>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px" size="medium">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@inputHeight: 40px;</span><span class="item">---输入框-高度</span></p>
        <p><span>@inputBorderRadius: 0px; </span><span class="item">---输入框-圆角尺寸</span></p>
        <p><span>@inputMediumFontSize: 14px; </span><span class="item">--- 中等输入框-字体大小</span></p>
        <p><span>@inputMediumHeight: 36px;</span><span class="item">---中等输入框-高度</span></p>
        <p><span>@inputMediumLineHeight: 36px;</span><span class="item">---中等输入框-行高</span></p>
        <p><span>@inputSmallFontSize: 13px;</span><span class="item">--小型输入框</span></p>
        <p><span>@inputSmallLineHeight: 32px;</span><span class="item">---小型输入框-高度</span></p>
        <p><span>@inputSmallHeight: 32px;</span><span class="item">--- 小型输入框-行高</span></p>
        <p><span>@inputMiniFontSize: 12px;</span><span class="item">---迷你输入框</span></p>
        <p><span>@inputMiniHeight: 28px;</span><span class="item">---迷你输入框-高度</span></p>
        <p><span>@inputMiniLineHeight: 28px; </span><span class="item">--迷你输入框-行高</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Input',
  data () {
    return {
      form: {
        name: ''
      }
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
    margin-left: 10px;
    color: #009688;
  }
</style>
