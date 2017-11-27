<template>
  <div class="nb-header">
    <div class="nb-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <i class="nb-icon icon-back" @click="onClickBack" v-show="_leftOptions.showBack"></i>
        </transition>
        <transition :name="transition">
          <a class="nb-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}</a>
        </transition>
      </slot>
    </div>
    <h1 class="nb-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="nb-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="nb-header-right">
      <a class="nb-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script>
import objectAssign from 'object-assign'

export default {
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  beforeMount () {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true
    }
  },
  computed: {
    _leftOptions () {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  },
  data () {
    return {
      shouldOverWriteTitle: false
    }
  }
}
</script>

<style lang="less">
@import "~common/style/variable";
.nb-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @header-background-color;
}
.nb-header .nb-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: @header-title-color;
}
.nb-header-title-area, .nb-header .nb-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nb-header .nb-header-title > span {
  display: inline-block;
}
.nb-header .nb-header-left,.nb-header .nb-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @header-text-color;
}
.nb-header .nb-header-left a,.nb-header .nb-header-left button,.nb-header .nb-header-right a,.nb-header .nb-header-right button {
  float: left;
  margin-right: 8px;
  color: @header-text-color;
}
.nb-header .nb-header-left a:active,.nb-header .nb-header-left button:active,.nb-header .nb-header-right a:active,.nb-header .nb-header-right button:active {
  opacity: .5
}
.nb-header .nb-header-left {
  left: 18px
}
.nb-header .nb-header-left .nb-header-back {
  padding-left: 16px
}
.nb-header .nb-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.nb-header .nb-header-right {
  right: 15px
}
.nb-header .nb-header-right a,.nb-header .nb-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.nb-header .nb-header-right .nb-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.nb-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.nb-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
}
@keyframes fadeinL{
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

