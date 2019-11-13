<template>
  <div class="el-thumbnail" :class="[!showCaption ? 'el-thumbnail--only-img' : '']">
    <div class="el-thumbnail__figure">
      <img :src="img"/>
    </div>
    <div v-if="showCaption" class="el-thumbnail__figcaption">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElThumbnail',
  props: {
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    showCaption () {
      return !!this.$slots['default']
    }
  }
}
</script>
