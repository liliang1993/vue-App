<template>
  <div class="newb-cells">
      <slot></slot>
  </div>
</template>

<script>
// import cleanStyle from '../../libs/clean-style'

export default {
  name: 'group',
  methods: {
    // cleanStyle
  },
  props: {
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String
  }
};
</script>

<style lang="css">
  @component-namespace newb {
    @component cells {
      width: auto;
      position: relative;
      margin-left:20px;
      margin-right:20px;
      margin-bottom:20px;
    }
  }
</style>
