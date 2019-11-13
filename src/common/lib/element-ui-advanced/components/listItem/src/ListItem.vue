<template>
  <div class="el-list-item" :class="[isActive ? 'el-list-item--active' : '', isRead ? 'el-list-item--read' : '']">
    <div class="el-list-item__header">
      <div class="el-list-item__header-inner">
        <div class="el-list-item__title">
          <slot name="title">
            <span>{{title}}</span>
          </slot>
        </div>
        <div class="el-list-item__status">
          <slot name="status"></slot>
        </div>
      </div>
    </div>
    <div class="el-list-item__body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isRead: {
      type: Boolean,
      default: false
    }
  }
}
</script>
