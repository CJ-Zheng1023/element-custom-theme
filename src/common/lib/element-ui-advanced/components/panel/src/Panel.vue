<template>
  <div class="el-panel" :style="{'border-color': boxColor}" :class="[theme === 'light' ? 'el-panel--light' : 'el-panel--box']">
    <div v-if="showHeader" class="el-panel__header" :style="{'background-color': boxColor}">
      <div class="el-panel__header-inner">
        <div class="el-panel__caption">
          <slot name="caption">
            <span v-if="icon" class="el-panel__icon">
              <i :class="icon"></i>
            </span>
            <span v-if="title" class="el-panel__title">{{title}}</span>
            <span v-if="sub" class="el-panel__sub">{{sub}}</span>
          </slot>
        </div>
        <div class="el-panel__tools">
          <slot name="tools"></slot>
        </div>
      </div>
    </div>
    <div class="el-panel__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#fff'
    },
    sub: {
      type: String,
      default: ''
    }
  },
  computed: {
    showHeader () {
      return this.title || this.$slots['caption'] || this.$slots['tools']
    },
    boxColor () {
      return this.theme === 'box' ? this.color : '#fff'
    }
  }
}
</script>
