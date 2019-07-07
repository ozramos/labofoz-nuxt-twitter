<template lang="pug">
.container
  Hero
  form
    input(type='text' placeholder='Join my monthly newsletter to get a list of things that inspired me 🧙‍♂️')
    input(type='submit')
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
</style>
