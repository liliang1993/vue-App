<template>
  <div class='newb-cell'>
    <div class='newb-cell--hd'>
      <slot name='label'>
        <span class="newb-cell-text" v-text='title' ></span>
        <span v-if='label' class="newb-cell-label" v-text="label"></span>
      </slot>  
    </div>
    <div class="newb-cell__bd newb-cell__primary">
      <input
        v-if="!type || type === 'text'"
        class="newb-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        type="text"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"/>
        <input
        :id="`vux-x-input-${uuid}`"
        v-if="type === 'number'"
        class="weui-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        type="number"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"/>
        <input
        :id="`vux-x-input-${uuid}`"
        v-if="type === 'email'"
        class="weui-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        type="email"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"/>
        <input
        :id="`vux-x-input-${uuid}`"
        v-if="type === 'password'"
        class="weui-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        type="password"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"/>
        <input
        :id="`vux-x-input-${uuid}`"
        v-if="type === 'tel'"
        class="weui-input"
        :maxlength="max"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :style="inputStyle"
        type="tel"
        :name="name"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focusHandler"
        @blur="onBlur"
        @keyup="onKeyUp"
        ref="input"/>
    </div>
    <div class='newb-cell--ft'>
        <i class='newui-icon newui-icon-clear'></i>
         <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import getParentProp from 'common/js/get-parent-prop';
  export default{
    name:'nb-input',
    created () {
      this.currentValue = (this.value === undefined || this.value === null) ? '' this.value;
    },
    minxins:[Base],
    components: {

    },
    props: {
      title: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: String,
      value: [String , Number],
      name: String,
      readonly:String,
      disabled: Boolean,
      min: Number,
      max: Number,
      showClear: {
        type: Boolean,
        default: true
      },
      autocomplete: {
        type: String,
        default: 'off'
      },   
      autocapitalize: {
      type: String,
      default: 'off'
      }, 
      autocorrect: {
      type: String,
      default: 'off'
      },
      iconType: String,
      placeholderAlign: String,
      labelWidth: String
    },
    computed(){
      labelStyles () {
        return {
          width: this.labelWidthComputed ||this.$parent.labelWidth,
          textAlign: this.$parent.labelAlign,
          marginRight: this.$parent.labelMarginRight 
        }
      },
      labelClass () {
        return {
          'newb-cell-justify':  getParentProp(this, 'justify') === 'justify'
        };
      },
      pattern () {
        if(this.keyboard === 'nember' || this.isType === 'china-mobile' ){
          return '[0-9]*'
        }
      },
      inputStyle () {
        return {
          textAlign : this.textAlign
        }
      }    
    },
    methods: {
      clear () {
        this.currentValue = '';
        this.focus();
      },
      focus () {
        this.$refs.input.focus();
      },
      blur () {
        this.$refs.input.blur();
      },
      onfocus ($event) {
        this.$emit('on-focus' , this.currentValue , $event);
      },
      onBlur ($event) {
         this.$emit('on-focus' , this.currentValue , $event);
      },
      onKeyUp ($event) {
        if($event.key == 'Enter') {
          $event.target/blur();
          this.$emit('on-enter', this.current, $event);
        }
      }
    }
  }
</script>