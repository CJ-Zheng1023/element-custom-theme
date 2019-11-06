<template>
  <div class="app-inner">
    <el-row>
      <el-col :span="8">
        <el-menu :router="true" class="el-menu-vertical-demo" default-active="/button" @open="handleOpen" @close="handleClose">
          <el-menu-item index="/button">
            <i class="el-icon-setting"></i>
            <span slot="title">按钮</span>
          </el-menu-item>
          <el-menu-item index="/table">
            <i class="el-icon-setting"></i>
            <span slot="title">表格</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <div style="margin: 20px;">
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Index',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
