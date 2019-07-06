<template lang="pug">
  img(src='/favicon.png')
</template>

<style scoped lang="stylus">
img
  position absolute
  display inline-block
  position relative
  overflow hidden
  animation turn 1s ease-in-out

@keyframes turn
  0%
    transform rotateY(0deg)
    width 0
    height 0

  100%
    transform rotateY(1440deg)
    width 240px
    height 240px
</style>
