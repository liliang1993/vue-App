<template>
    <a href="javascript:void(0);" :class='classes' :style="style" @click='onItemClick>
        <slot>
        <slot>    
    <a>   
</template>   
<script>
export default {
    name: 'button-tab-item',
    props: {
        selected: {
            type: Boolean,
            default: false
        }
    },
    computed：{
        classes(){
            return {
                'newb-button-tab-item-current': this.currentIndex === this.$parent.cureentIndex,
                'newb-button-tab-iten-first': this.currentIndex === 0,
                'newb-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
                'newb-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length-1
            }
        },
        style () {
            if (this.$parent.height){
                return {
                    height: `${this.$parent.height}px`,
                    lineHeight: `${this.$parent.height}px`
                }
            }
        }，
        beforeDestory(){
            this.$nextTick(() => {
                this.$parent.updateIndex()
            })
        },
    }
    methods: {
        onItemClick (hasLink) {
            if (this.$parent.preventDefault) {
               this.$parent.$emit('on-before-index-change', this.currentIndex)
               return 
            }
            if (typeof this.disabled === 'undefined' || this.disabled === false) {
                this.currentSelected = true
                this.$parent.currentIndex = this.currentIndex
                this.$nextTick(() => {
                    this.$emit('on-item-click', this.currentIndex);
                })
                if(hasLink === true){
                    go(this.link)
                }
            }
        }
    }

}
</script>