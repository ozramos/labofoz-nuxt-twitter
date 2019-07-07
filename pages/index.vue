<template lang="pug">
div
  //- Above the Fold
  .container
    Hero

    .gradient.text-center
      p Are you hiring? I'm looking 📧 <a href="mailto:labofoz@gmail.com">labofoz@gmail.com</a>
      p
        small ps I'm still working on this site 😅
      p
        small <a href="https://twitter.com/labofoz">Twitter @labofoz</a>
    //- form
    //-   input(type='text' placeholder='Join my monthly newsletter to get a list of things that inspired me 🧙‍♂️')
    //-   input(type='submit')

  //- Below the fold
  Tweets
</template>

<script>
import Hero from '~/components/Hero'
import Tweets from '~/components/Tweets'

export default {
  components: {Hero, Tweets}
}
</script>

<style lang="stylus">
@import '~assets/styl/variables'

form
  margin $padding 0
  margin-bottom $paddingLg
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

.gradient
  font-weight 900
  font-size: 1.5em
  margin $padding 0
  margin-bottom $paddingLg
  color #fff
  padding $padding
  background linear-gradient(90deg, rgba(254,200,6,1) 0%, rgba(244,124,32,1) 24%, rgba(244,25,44,1) 50%, rgba(214,9,133,1) 63%, rgba(132,42,130,1) 80%, rgba(50,46,130,1) 100%)

  a
    color #fff
</style>
