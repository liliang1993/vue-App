<template>
  <div class='newb-cell'>
    <div class='newb-cell--hd'>
      <slot name='label'>
        <span class="newb-cell-text" v-text='title' ></span>
        <span v-if='label' class="newb-cell-label" v-text="label"></span>
      </slot>  
    </div>
    <div class="weui-cell__bd weui-cell__primary">
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
  export default{
    name:'nb-input',
    created () {
      this.currentValue = (this.value === undefined || this.value === null) ? '' : (this.mask ? this.maskValue(this.value) : this.value);
    }
  }
</script>