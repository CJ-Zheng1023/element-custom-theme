<template>
  <div>
    <el-alert
      title="输入框可配置项有：输入框尺寸(默认/中等/小型/迷你)、输入框圆角大小、输入框悬浮边框颜色、文本域圆角大小等"
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
    <div class="demo-input-suffix">
      <p>带icon的输入框-属性方式：</p>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="input1">
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="demo-input-suffix">
      <p>带icon的输入框-slot 方式：</p>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            placeholder="请选择日期"
            v-model="input3">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input
            placeholder="请输入内容"
            v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div>
      <p>文本域：</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        >
      </el-input>
    </div>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@inputHeight: 40px;</span><span class="item">---输入框-高度</span></p>
        <p><span>@inputBorderRadius: 4px; </span><span class="item">---输入框-圆角尺寸</span></p>
        <p><span>@inputMediumFontSize: 14px; </span><span class="item">--- 中等输入框-字体大小</span></p>
        <p><span>@inputMediumHeight: 36px;</span><span class="item">---中等输入框-高度</span></p>
        <p><span>@inputMediumLineHeight: 36px;</span><span class="item">---中等输入框-行高</span></p>
        <p><span>@inputSmallFontSize: 13px;</span><span class="item">--小型输入框</span></p>
        <p><span>@inputSmallLineHeight: 32px;</span><span class="item">---小型输入框-高度</span></p>
        <p><span>@inputSmallHeight: 32px;</span><span class="item">--- 小型输入框-行高</span></p>
        <p><span>@inputMiniFontSize: 12px;</span><span class="item">---迷你输入框</span></p>
        <p><span>@inputMiniHeight: 28px;</span><span class="item">---迷你输入框-高度</span></p>
        <p><span>@inputMiniLineHeight: 28px; </span><span class="item">--迷你输入框-行高</span></p>
        <p><span>@inputHoverBorderColor: #C0C4CC;</span><span class="item">--输入框- 悬浮-边框颜色</span></p>
        <p><span>@TextareaBorderRaius: 4px;</span><span class="item">--文本域- 边框圆角</span></p>
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
      },
      input1: '',
      input2: '',
      input3: '',
      input4: ''
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
