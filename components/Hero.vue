<template lang="pug">
  #hero
    Logo
    .text-center
      h1
        small
          small the
        |  Lab of Oz
      p Hey 👋 I'm Oz Ramos and I'm interested in <br><strong>computer vision</strong>, <strong>handsfree interfaces</strong>, and <strong>robots</strong>!

    ul
      li(v-for='link in links')
        a
          | {{link.title}}
          span {{link.subtitle}}
</template>

<script>
import 'vanilla-tilt'
import Logo from '~/components/Logo'

export default {
  components: {Logo},
  
  data () {
    return {
      links: [
        {
          title: '👀 Handsfree.js',
          subtitle: 'Drop-in library for crafting handsfree interfaces'
        },
        {
          title: '🎓 2018 School of AI Fellowship',
          subtitle: 'Awarded to research handsfree interfaces on low end devices'
        },
        {
          title: '🎮 BrowseHandsfree',
          subtitle: 'Collection of handsfree demos, including games and robots'
        },
        {
          title: '🎨 Residency at CMU',
          subtitle: 'Two weeks at the Frank-Ratchye STUDIO for Creative Inquiry'
        },
        {
          title: '📜 C.V.',
          subtitle: 'See if I\'m a good match for your next project'
        },
        {
          title: '📚 My Blog',
          subtitle: 'Read through out my (almost) daily posts'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styl/variables'

#hero
  margin auto
  position relative

  ul
    &:after
      content ''
      clear both
      display block
  
    padding 0
    list-style none
    text-align left
    width $contentWidth
    margin auto
    margin-top $padding

    li
      display inline-block
      width 50%
      float left
      height 150px

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
        padding $padding * 2

        span
          display block
          font-weight 400
          color $colorText

        &:hover
          span
            color $colorLink
</style>