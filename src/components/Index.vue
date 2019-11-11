<template>
  <div class="app-inner">
    <el-row>
      <el-col :span="5">
        <el-menu :router="true" class="el-menu-vertical-demo" default-active="button">
          <el-menu-item v-for="item in routes[0].children" :index="item.path" :key="item.name">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
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
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>
