<template>
  <div>
    <el-row :gutter=20>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img1.jpg"></el-thumbnail>
      </el-col>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img2.jpg"></el-thumbnail>
      </el-col>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img3.jpg"></el-thumbnail>
      </el-col>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img4.jpg" :showCaption=true>
          <div>
            <h2>标题</h2>
            <p>标题内容</p>
            <div>
              <el-button size="small" type="primary">打开</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </div>
          </div>
        </el-thumbnail>
      </el-col>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img5.jpg" :showCaption=true>
          <div>
            <h2>标题</h2>
            <p>标题内容</p>
            <div>
              <el-button size="small" type="primary">打开</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </div>
          </div>
        </el-thumbnail>
      </el-col>
      <el-col :span="8">
        <el-thumbnail img="http://47.93.1.25:8888/theme/assets/admin/pages/media/works/img6.jpg" :showCaption=true>
          <div>
            <h2>标题</h2>
            <p>标题内容</p>
            <div>
              <el-button size="small" type="primary">打开</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </div>
          </div>
        </el-thumbnail>
      </el-col>
    </el-row>
    <el-card class="box-card use-desc">
      <div slot="header" class="clearfix">
        <span>使用说明</span>
      </div>
      <div>
        <p><span>img:</span><span class="item">图片地址</span></p>
        <p><span>showCaption:</span><span class="item">是否显示图像说明区域，默认值为false</span></p>
        <p><span>slot:</span><span class="item">插槽，填充图像说明区域，需要把showCaption设置为true才会显示该区域</span></p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Thumbnail'
}
</script>
<style scoped lang="less">
  .el-well{
    margin-bottom: 10px;
  }
  .use-desc{
    margin: 20px 0;
  }
  .item{
    margin-left: 10px;
    color: #009688;
  }
</style>
