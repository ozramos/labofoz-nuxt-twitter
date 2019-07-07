<template lang="pug">
.container
  Hero
  .coming-soon
    p More coming soon (last update: 7/6)
  //- form
  //-   input(type='text' placeholder='Join my monthly newsletter to get a list of things that inspired me 🧙‍♂️')
  //-   input(type='submit')
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: {Hero}
}
</script>

<style lang="stylus">
@import '~assets/styl/variables'

form
  margin $padding 0
  position relative

input
  padding $paddingSm
  border 2px solid $colorText
  outline none
  width 100%

  &:hover
    border-color $colorLink
  &:focus
    border-color $colorLink
    box-shadow inset 0 0 0px 2px $colorLink

  &[type='submit']
    position absolute
    right 0
    top 0
    width auto
    background $colorLink
    color #fff
    border-color $colorLink

.coming-soon
  font-weight 900
  color #fff
  padding $padding
  background linear-gradient(90deg, rgba(254,200,6,1) 0%, rgba(244,124,32,1) 24%, rgba(244,25,44,1) 50%, rgba(214,9,133,1) 63%, rgba(132,42,130,1) 80%, rgba(50,46,130,1) 100%)
</style>
