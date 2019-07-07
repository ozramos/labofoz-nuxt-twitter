<template lang="pug">
  #hero
    .text-center
      h1
        small
          small the
        |  Lab of Oz
      p Hey 👋 I'm Oz and I love the future,<br><strong>computer vision</strong>, and <strong>machine learning</strong>!

    ul
      li(v-for='link in links')
        a
          | {{link.title}}
          span {{link.subtitle}}

    #hero-logo(
      data-tilt 
      data-tilt-max=50
      data-tilt-full-page-listening='true'
      data-tilt-reverse='true'
      data-tilt-reset='false'
      data-tilt-max-glare='1')
      img(src='/favicon.png')
</template>

<script>
import 'vanilla-tilt'

export default {
  data () {
    return {
      links: [
        {
          title: 'Handsfree.js',
          subtitle: 'Drop-in library for crafting handsfree interfaces'
        },
        {
          title: 'School of AI',
          subtitle: 'Awarded Fellowship in 2018'
        },
        {
          title: 'Nonprofiters',
          subtitle: 'Resource guide for public services and assistance programs'
        },
        {
          title: 'Residency at CMU',
          subtitle: 'Two weeks at the Studio for Creative Inquiry'
        },
        {
          title: 'LinkShow',
          subtitle: 'No-download interactive slideshow presentation platform'
        },
        {
          title: 'More...',
          subtitle: 'Everything else I\'ve been up to'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
#hero-logo
  width 650px
  margin auto
  position absolute
  text-align: center
  left 50%
  margin-left -325px

  img  
    display inline-block
    position relative
    overflow hidden
    animation turn 1s ease-in-out
    margin-top 20px

#hero
  margin auto
  position relative

  ul
    padding 0
    top 120px
    list-style none
    text-align left
    width 650px
    margin auto

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
          display block
          font-weight 400

@keyframes turn
  0%
    top 120px
    transform rotateY(0deg)
    width 0
    height 0

  100%
    top 0
    transform rotateY(1440deg)
    width 240px
    height 240px
</style>
