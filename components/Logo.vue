<template lang="pug">
  img.VueToNuxtLogo(src='/favicon.png')
</template>

<style lang="stylus">
.VueToNuxtLogo
  display inline-block
  animation turn 1s ease
  transform rotateY(0deg)
  position relative
  overflow hidden
  height 240px
  width 240px

@keyframes turn
  0%
    width 0
    height 0

  100%
    transform rotateY(1440deg)
    width 240px
    height 240px
</style>
