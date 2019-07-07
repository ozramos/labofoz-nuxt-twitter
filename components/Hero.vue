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
        a(v-if='link.tweetTag' @click='setTag(link.tweetTag)')
          | {{link.title}}
          span {{link.subtitle}}
        a(v-if='link.href' :href='link.href')
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
          subtitle: 'Drop-in library for crafting handsfree interfaces',
          tweetTag: 'Handsfree.js'
          // href: 'https://handsfree-js.firebaseapp.com'
        },
        {
          title: '🎓 2018 School of AI Fellowship',
          subtitle: 'Awarded to research handsfree interfaces on low end devices',
          tweetTag: 'School of AI'
          // href: 'https://www.theschool.ai/school-of-ai-fellowship/'
        },
        {
          title: '🎮 BrowseHandsfree',
          subtitle: 'Collection of handsfree demos, including games and robots',
          tweetTag: 'BrowseHandsfree'
          // href: 'https://glitch.com/@browsehandsfree'
        },
        {
          title: '🎨 Residency at CMU',
          subtitle: 'Two weeks at the Frank-Ratchye STUDIO for Creative Inquiry',
          tweetTag: 'Residency at CMU'
          // href: 'https://www.flickr.com/photos/creativeinquiry/albums/72157703188612302'
        },
        {
          title: '🤖 Robots',
          subtitle: 'Work I\'ve done involving robots or robot sims',
          tweetTag: 'Robots'
          // href: 'https://docs.google.com/document/d/1E0B9ZoNRSM3VrQIB9BqDRXOaTXYHdzxHYhn7bR415NI/edit?usp=sharing'
        },
        {
          title: '🧙‍♂️ Misc',
          subtitle: 'Check out what else I\'ve been working on',
          tweetTag: 'Misc'
        }
      ]
    }
  },

  methods: {
    setTag(tag) {
      this.$store.commit('setTag', tag)
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