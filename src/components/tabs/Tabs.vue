<template>
  <div>
    <el-alert
      title="标签页可配置项有：...."
      type="success" class="desc">
    </el-alert>
    <div>
      <p>*****基础样式：</p>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <p>*****选项卡样式：</p>
      <el-tabs v-model="activeName2" type="card">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <p>*****卡片化：</p>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <p>*****自定义标签页：</p>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>@tabsItemPaddingVertical: 0px; </span><span class="item">标签页-item-上下padding</span></p>
        <p><span>@tabsItemPaddingHorizontal: 20px;</span><span class="item">标签页-item-左右padding</span></p>
        <p><span>@tabsItemHeight: 40px;</span><span class="item">标签页-item-高度</span></p>
        <p><span>@tabsItemLineHeight: 40px;</span><span class="item">标签页-item-行高</span></p>
        <p><span>@tabsItemFontSize: 14px;</span><span class="item">标签页-item-字体大小</span></p>
        <p><span>@tabsItemFontWeight: 500;</span><span class="item">标签页-item-字体粗细</span></p>
        <p><span>@tabsItemColor: #303133;</span><span class="item">标签页-item-字体粗细</span></p>
        <p><span>@tabsItemActiveColor: #1E9FFF;</span><span class="item">标签页-item-字体颜色</span></p>
        <p><span>@tabsItemHoverColor: #1E9FFF;</span><span class="item">标签页-item-字体颜色</span></p>
        <p><span>@tabsActiveBarHeight: 2px;</span><span class="item">标签页-下划线-高度</span></p>
        <p><span>@tabsActiveBarBackgroundColor: #1E9FFF;</span><span class="item">标签页-下划线-激活背景颜色</span></p>
        <p><span>@tabsNavBgColor: #eee;</span><span class="item">标签页-下划线-背景颜色</span></p>
        <p><span>@tabsActiveBarWidth: 56px;</span><span class="item">标签页-下划线-宽度</span></p>
        <p><span>@tabsActiveBarWidth: 56px;</span><span class="item">标签页-下划线-宽度</span></p>
        <p><span>@tabsBorderCardItemColor:#909399;</span><span class="item">卡片标签页-字体颜色</span></p>
        <p><span>@tabsBorderCardItemHoverColor: #409EFF;</span><span class="item">卡片标签页-悬浮字体颜色</span></p>
        <p><span>@tabsBorderCardItemActiveColor:#409EFF;</span><span class="item">卡片标签页-激活字体颜色</span></p>
        <p><span> @tabsBorderCardItemActiveBackgroundColor: #fff;</span><span class="item">卡片标签页-激活背景颜色</span></p>
        <p><span>@tabsBorderCardItemActiveBorderLeftColor:  #DCDFE6;</span><span class="item">卡片标签页-激活左边框颜色</span></p>
        <p><span>@tabsBorderCardItemActiveBorderRightColor: #DCDFE6;</span><span class="item">卡片标签页-激活右边框颜色</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  data () {
    return {
      activeName: 'second',
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
