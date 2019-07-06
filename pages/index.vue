<template lang="pug">
  #hero
    .text-center
      h1
        small
          small the
        |  Lab of Oz
      p Hey 👋 I'm Oz and I love the future, <strong>computer vision</strong>, and <strong>machine learning</strong>!
      br
      logo

    ul
      li
        a
          | Handsfree.js
          br
          span Drop-in library for crafting handsfree interfaces
      li
        a 
          | School of AI
          br
          span Awarded Fellowship in 2018
      li
        a
          | Nonprofiters
          br
          span Resource guide for public services and assistance programs
      li
        a
          | STUDIO Residency
          br
          span Residency at the Studio for Creative Inquiry at Carnegie Mellon
      li
        a LinkShow
      li
        a More...
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
#hero
  width 300px
  margin auto
  position relative

  ul
    position absolute
    margin 0
    padding 0
    left -175px
    top 120px
    list-style none
    text-align left
    width 650px

    li
      display inline-block
      width 50%
      float left
      height 100px

      &:nth-child(odd)
        a
          padding-right 110px
          padding-left 0
      &:nth-child(even)
        text-align right
        a
          padding-left 110px
          padding-right 0

      p
        margin 0

      a
        display inline-block
        font-weight 900
        padding 20px

        span
          font-weight 400
</style>
