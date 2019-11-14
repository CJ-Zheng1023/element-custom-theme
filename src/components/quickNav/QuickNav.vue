<template>
  <div>
    <div class="quick-nav" :class="[isOpen ? 'quick-nav--open' : '']">
      <ul class="quick-nav-list">
        <li class="quick-nav-item">
          <span class="quick-nav-item__label">个人中心</span>
          <span class="quick-nav-item__icon">
            <i class="el-icon-user"></i>
          </span>
        </li>
        <li class="quick-nav-item">
          <span class="quick-nav-item__label">客服电话</span>
          <span class="quick-nav-item__icon">
            <i class="el-icon-phone"></i>
          </span>
        </li>
      </ul>
      <div aria-hidden="true" class="quick-nav__bar"></div>
      <div class="quick-nav-toggler" @click="clickToggler">
        <div class="quick-nav-toggler__bar"></div>
      </div>
    </div>
    <div v-if="isOpen" class="mask" @click="clickToggler"></div>
  </div>
</template>
<script>
export default {
  name: 'QuickNave',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    clickToggler () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
