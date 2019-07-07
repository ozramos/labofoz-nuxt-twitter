<template lang="pug">
#hero-logo(
  data-tilt 
  data-tilt-max=50
  data-tilt-full-page-listening='true'
  data-tilt-reverse='true'
  data-tilt-reset='false'
  data-tilt-max-glare='1')

  template(v-for='i in 6')
    img(:src='"/favicon-head-flat-" + (7 - i) + ".png"')
  img(src='/favicon-head.png')
</template>

<style lang="stylus" scoped>
@import '~assets/styl/variables'
$logoSize = 240px

#hero-logo
  pointer-events none
  width $contentWidth
  margin auto
  top (120px + $paddingLg)
  position absolute
  text-align: center
  left 50%
  margin-left -($contentWidth/2)
  height $logoSize
  transform-style preserve-3d
  transform perspective(1000px)

  @media screen and (max-width: 800px)
    position relative
    top 0

  img
    display inline-block
    position absolute
    top 0
    overflow hidden
    margin-top 20px
    left (($contentWidth - $logoSize ) / 2)

  for i in (1..10)
    img:nth-child({i})
      transform translateZ(i * 20px)
      animation float 3s ease infinite (i * -.25s)

  img:last-child
    animation float 3s ease infinite (7 * -.25s)

@keyframes float
  0%
    top -50px
  50%
    top 50px
  100%
    top -50px

@keyframes turn
  0%
    top 90px
    transform rotateY(0deg)
    width 0
    height 0

  100%
    top 0
    transform rotateY(1440deg)
    width 240px
    height 240px
</style>
