<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-panel :title="title" :icon="icon">
          <div class="panel-body">
            <el-scrollbar style="height: 100%">
              <ul class="messages">
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">Web server hardware needs to be upgraded.</div>
                  <div class="messages-item__time">2019.11.12</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="info" effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息</div>
                  <div class="messages-item__time">2019.11.11</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="warning" effect="dark" size="mini">
                      <i class="el-icon-video-camera"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息</div>
                  <div class="messages-item__time">2019.10.25</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="success" effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息123</div>
                  <div class="messages-item__time">2018.10.25</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="danger" effect="dark" size="mini">
                      <i class="el-icon-goods"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">Web server hardware needs to be upgraded.</div>
                  <div class="messages-item__time">2019.11.12</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="warning" effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息</div>
                  <div class="messages-item__time">2019.11.12</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息223</div>
                  <div class="messages-item__time">2019.8.17</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="success" effect="dark" size="mini">
                      <i class="el-icon-goods"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息22</div>
                  <div class="messages-item__time">2019.11.12</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="success" effect="dark" size="mini">
                      <i class="el-icon-alarm-clock"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息11</div>
                  <div class="messages-item__time">2017.1.8</div>
                </li>
                <li class="messages-item">
                  <div class="messages-item__status">
                    <el-tag type="success" effect="dark" size="mini">
                      <i class="el-icon-video-camera"></i>
                    </el-tag>
                  </div>
                  <div class="messages-item__content">这是一条消息213</div>
                  <div class="messages-item__time">2015.9.9</div>
                </li>
              </ul>
            </el-scrollbar>
          </div>
        </el-panel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Messages',
  data () {
    return {
      title: '标题',
      icon: 'el-icon-document'
    }
  }
}
</script>
<style scoped lang="less">
  .el-panel{
    color: #4B77BE;
  }
  .panel-body{
    height: 200px;
  }
</style>
