<template lang="pug">
div
  a(ref='tweetsAnchor' name='tweets' style='margin-bottom: 40px')
  .container
    h2 {{tweetTag}}
  .container.wide
    div(v-masonry transition-duration='0.3s' item-selector='.tweet-wrap')
      Tweet.tweet-wrap(ref='tweet' v-masonry-tile v-for='tweetId in tweets[tweetTag]' :key='tweetId' :id='tweetId')
        p Loading ...
</template>

<script>
import {Tweet} from 'vue-tweet-embed'
import {mapState} from 'vuex'
import VueScrollTo from 'vue-scrollto'

export default {
  components: {Tweet},

  computed: mapState(['tweetTag']),

  watch: {
    tweetTag (val) {
      VueScrollTo.scrollTo(this.$refs.tweetsAnchor, 1500)
    }
  },

  /**
   * Relayout
   */
  mounted () {
    window.Vue = this
    
    // @FIXME 7/7/19 We shouldn't need to do this
    setInterval(() => {
      this.$redrawVueMasonry()
    }, 500)
  },

  data () {
    return {
      tweets: {
        BrowseHandsfree: ['1126196779882504192', '1122672513073340416', '1116183558568071168', '1115645107321966594', '988602422925770752', '1056690029416730624', '987443602652446721'],
        'Handsfree.js': ['1093686802215362560', '1093258290933379072', '1092568370925502464', '1092493743683440640', '1092136979385536513', '1091478503474819074', '1069640435428134912', '1084888747118714880', '1081325378231099392', '1063193718172381186'],
        'Residency at CMU': ['1093245305871577088', '1090989560358752256', '1088570329088360450'],
        'Misc': ['1098734890193801217', '1092102355313745920', '1087830756511137795', '1081019637314158592', '1073264325970690048', '1070093622891008001', '1069479561803399168', '1066016464321355776', '1064765062416523264', '1064642826732851200', '1063128000915398656', '1060767690212528128', '1028143393661042688', '1021438213481566208', '996603306540548096', '994624613450567680', '987047676746371072', '981593804313538560', '978776989090787328', '958737132582940672', '955707049098137600', '951153555825606656', '951035741773033473', '947223676017000448', '937578332614418432', '935770774664867840', '932802065524449280'],
        'School of AI': ['1052086264084684801', '1032362390317281280'],
        'Robots': ['1098702216351821825', '1098702214321733632', '1097637958990016513', '1092556272208101376', '1090662898232410113', '1090294591364964352']
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styl/variables'

.tweet-wrap
  width 33%
  float left
  padding $paddingSm

  @media screen and (max-width: 900px)
    width 50%
  @media screen and (max-width: 600px)
    width 100%
  
</style>
