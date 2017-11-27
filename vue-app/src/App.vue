<template>
  <div id="app">
    <!-- <m-header></m-header> -->
    <nb-button size='small'>你好</nb-button>
    <nb-group labelAlign='center' labelWidth='80px'>
      <nb-cell title='好的' is-link >
        <div style='flex:1;text-align:right;'>好的</div>
      </nb-cell>
    </nb-group>
    <keep-alive>
      </router-view><router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import { nbButton, nbCell, nbGroup } from './base';

  export default {
    name: 'app',
    components: {
      nbButton,
      nbCell,
      nbGroup
    }
  };
</script>
 
<style lang='css'>

 @import './common/style/index.css';
</style>
