<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <h2>light主题</h2>
        <el-panel :title="title" :sub="sub" :icon="icon">
          <div slot="tools">
            <div>
              <el-button size="mini" type="success" icon="el-icon-share">分享</el-button>
              <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            </div>
          </div>
          <div>body</div>
        </el-panel>
      </el-col>
      <el-col :span="12">
        <h2>box主题</h2>
        <el-panel :title="title" :sub="sub" :icon="icon" :color="color" theme="box">
          <div slot="tools">
            <div>
              <el-button size="mini" type="success" icon="el-icon-share">分享</el-button>
              <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            </div>
          </div>
          <div>
            <p>body</p>
            <p>body</p>
            <p>body</p>
          </div>
        </el-panel>
      </el-col>
      <el-col :span="12">
        <h2>无header</h2>
        <el-panel>
          <div>body</div>
        </el-panel>
      </el-col>
    </el-row>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>theme:</span><span class="item">组件形态，分为light，box。默认值为light</span></p>
        <p><span>icon:</span><span class="item">图标class</span></p>
        <p><span>title:</span><span class="item">标题</span></p>
        <p><span>sub:</span><span class="item">副标题</span></p>
        <p><span>color:</span><span class="item">当box形态时的组件头部和边框颜色，默认值为#fff</span></p>
        <p><span>slot:</span><span class="item">插槽值可为caption(头部标题区),tools(头部操作区),默认值填充内容区域</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>

import ElRow from 'element-ui/packages/row/src/row'

export default {
  components: {ElRow},
  name: 'Panel',
  data () {
    return {
      title: '标题',
      sub: '副标题',
      icon: 'el-icon-document',
      color: '#67809F'
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
