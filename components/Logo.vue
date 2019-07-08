<template lang="pug">
#hero-logo(
data-tilt
data-title-gyroscope='false' 
data-tilt-max=50
data-tilt-full-page-listening='true'
data-tilt-reverse='true'
data-tilt-reset='false'
data-tilt-max-glare='1')
  template(v-for='i in 11')
    TensorMonkey
  TensorMonkey
</template>

<script>
import TensorMonkey from './TensorMonkey'

export default {
  components: {TensorMonkey}
}
</script>


<style lang="stylus">
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

  svg
    display inline-block
    position absolute
    top 0
    overflow hidden
    margin-top 20px
    left (($contentWidth - $logoSize ) / 2)
    
  // SVG
  for i in (1..12)
    svg:nth-child({i})
      transform translateZ(i * 10px - 40)
      animation float 3s ease infinite (i * -.2s)
  
  svg:nth-child(1)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #272381
  svg:nth-child(2)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #582e82
  svg:nth-child(3)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #842a82
  svg:nth-child(4)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #a82085
  svg:nth-child(5)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #d60985
  svg:nth-child(6)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #f41b2c
  svg:nth-child(7)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #fc5319
  svg:nth-child(8)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #f57c21
  svg:nth-child(9)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #fca118
  svg:nth-child(10)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #fca217
  svg:nth-child(11)
    .labofoz-logo-skin, .labofoz-logo-fur
      fill #fec806
  
@keyframes float
  0%
    top -75px
  50%
    top 75px
  100%
    top -75px
</style>
