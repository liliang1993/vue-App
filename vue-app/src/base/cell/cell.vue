<template>
  <div
    class='newb-cell newb-1px'
    :class="{
      'newb-tap-active': isLink || !!Link
    }"
    @click = 'onclick'
    >
    <div calss='newb-cell--left'>
      <slot name='left'>
      </slot>  
    </div>
    <div class="newb-cell--hd">
      <slot name='icon'>
        <i v-if='icon' class='newui' :class="'newbui-'+icon"></i>
      </slot>
    </div>
    <div 
      class="newb-cell--bd newb-1px-r"
      :style = labelStyles
      :class="{
        'newb-cell-primary': primary === 'title' && valueAlign !== 'left'
      }"
    >
      <slot name='title'>
        <span class="newb-cell-text" v-text='title' ></span>
        <span v-if='label' class="newb-cell-label" v-text="label"></span>
      </slot>
    </div>
    <div class="newb-cell--ft" :class="valueClass">
      <slot>
        <span v-text='value'></span>
      </slot>        
    </div>
    <div class='newb-cell-right'>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  /**
   * mt-cell
   * @module base/cell
   * @desc 单元格
   * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
   * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .newbui-xxx）
   * @param {string} [title] - 标题
   * @param {string} [label] - 备注信息
   * @param {boolean} [is-link=false] - 可点击的链接
   * @param {string} [value] - 右侧显示文字
   * @param {slot} - 同 value, 会覆盖 value 属性
   * @param {slot} [title] - 同 title, 会覆盖 title 属性
   * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
   *
   * @example
   * <nb-cell title="标题文字" icon="back" is-link value="描述文字"></nb-cell>
   * <nb-cell title="标题文字" icon="back">
   *   <div slot="value">描述文字啊哈</div>
   * </nb-cell>
   */
  import cleanStyle from 'common/js/clean-style';
  import getParentProp from 'common/js/get-parent-prop';
  import {go} from 'common/js/router.js';

  export default {
    name: 'nb-cell',

    props: {
      icon: String,
      title: [String, Number],
      label: [String, Number],
      isLink: Boolean,
      value: [String, Number],
      primary: {
        type: String,
        default: 'content'
      },
      link: [String, Object],
      valueAlign: String,
      disabled: Boolean,
      arrowDirection: String  // down or up
    },

    computed: {
      labelStyles () {
        return cleanStyle({
          width: getParentProp(this, 'labelWidth'),
          textAlign: getParentProp(this, 'labelAlign'),
          marginRight: getParentProp(this, 'labelMarginRight')
        });
      },
      valueClass () {
        return {
          'newb-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
          'newb-cell-alignLeft': this.valueAlign === 'left',
          'newb-cell-arrowUp': this.arrowDirection === 'up',
          'newb-cell-arrow-down': this.arrowDirection === 'down',
          'is-link':  this.isLink || !!this.Link
        }
      },
      labelClass () {
        return {
          'newb-cell-justify': getParentProp(this, 'justify') === 'justify'
        }
      }
    },

    methods: {
      onClick () {
        !this.disabled && go(this.link, this.$router);  
      }
    }
  }
</script> 

<style lang='css'>
  @import '../../common/style/variable.css';
  @import '../../common/style/tap.css';
  /* @import '../../common/style'; */

  @component-namespace newb {
    @component cell {
      background-color: $cell-background-color;
      color: inherit;
      font-size:17px;
      box-sizing: border-box;
      align-items: center;
      display: flex;
      padding: 10px 15px;
      @descendent primary {
        flex: 1;
      }
      @descendent text {
        font-size:16px;
      }
      @descendent label {
        display: block;
         color: #888;
         font-size: 12px;
         margin-top: 6px;
      }
      @modifier ft {
        text-align: right;
        color: #999999;
        @when link{
          &::after{
            content: " ";
            display: inline-block;
            height: 6px;
            width: 6px;
            border-width: 2px 2px 0 0;
            border-color: $cell-arrow-color;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            position: relative;
            top: -2px;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 6px;
          }   
        }
      }
    }
  }
</style>

