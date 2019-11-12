<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-panel :showHeader=false>
          <div style="height: 400px">
            <el-scrollbar style="height: 100%;overflow: hidden;">
              <div class="list">
                <div v-for="item in dataList" @click="clickItem(item)" :key="item.title">
                  <el-list-item :title="item.title" :isActive="item.isActive" :isRead="item.isRead">
                    <div slot="status">
                      <template v-if="item.score >= 80">
                        <el-tag effect="dark" type="success" size="mini">{{item.score}}%</el-tag>
                      </template>
                      <template v-else-if="item.score < 80 && item.score >= 60">
                        <el-tag effect="dark" type="warning" size="mini">{{item.score}}%</el-tag>
                      </template>
                      <template v-else>
                        <el-tag effect="dark" type="danger" size="mini">{{item.score}}%</el-tag>
                      </template>
                    </div>
                    <div>{{item.description}}</div>
                  </el-list-item>
                </div>
              </div>
            </el-scrollbar>
          </div>
        </el-panel>
      </el-col>
    </el-row>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>title:</span><span class="item">标题</span></p>
        <p><span>isActive:</span><span class="item">是否激活标识，默认值false</span></p>
        <p><span>isRead:</span><span class="item">是否已读标识，默认值false</span></p>
        <p><span>slot:</span><span class="item">插槽值可为title(标题区),status(状态区),默认值填充内容区域</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  data () {
    return {
      dataList: [{
        title: '标题1',
        score: 96,
        isActive: true,
        isRead: true,
        description: '根据被嵌入内容的外部容器的宽度，自动创建一个固定的比例，从而让浏览器自动确定视频或 slideshow 的尺寸，能够在各种设备上缩放。'
      }, {
        title: '标题2',
        score: 80,
        isActive: false,
        isRead: false,
        description: '根据被嵌入内容的外部容器的宽度，自动创建一个固定的比例，从而让浏览器自动确定视频或 slideshow 的尺寸，能够在各种设备上缩放。'
      }, {
        title: '标题3',
        score: 67,
        isActive: false,
        isRead: false,
        description: '根据被嵌入内容的外部容器的宽度，自动创建一个固定的比例，从而让浏览器自动确定视频或 slideshow 的尺寸，能够在各种设备上缩放。'
      }, {
        title: '标题4',
        score: 50,
        isActive: false,
        isRead: false,
        description: '根据被嵌入内容的外部容器的宽度，自动创建一个固定的比例，从而让浏览器自动确定视频或 slideshow 的尺寸，能够在各种设备上缩放。'
      }]
    }
  },
  methods: {
    clickItem (item) {
      this.dataList.forEach(item => {
        item['isActive'] = false
      })
      item['isActive'] = true
      item['isRead'] = true
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
