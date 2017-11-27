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
      width: 100%;
      padding-left:20px;
      padding-right:20px;
    }
  }
</style>
