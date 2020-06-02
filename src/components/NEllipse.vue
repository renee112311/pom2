<template>
  <div id="nellipse">
    <vue-ellipse-progress
        :progress= "progress"
        :angle="-90"
        :color="gradient2"
        emptyColor="#fff"
        :size="250"
        :thickness="15"
        emptyThickness="10%"
        lineMode="in"
        :legend="true"
        :legendValue=timeleft
        legendClass="legend-custom-style"
        dash="strict 60 0.9"
        animation="reverse 1000 200"
        :noData="false"
        :loading="false"
        fontColor="white"
        :half="false"
        :gap="10"
        fontSize="0rem" v-if="isBreak">

      </vue-ellipse-progress>
      <vue-ellipse-progress
        :progress= "progress"
        :angle="-90"
        :color="gradient"
        emptyColor="#fff"
        :size="250"
        :thickness="15"
        emptyThickness="10%"
        lineMode="in"
        :legend="true"
        :legendValue=timeleft
        legendClass="legend-custom-style"
        dash="strict 60 0.9"
        animation="reverse 1000 200"
        :noData="false"
        :loading="false"
        fontColor="white"
        :half="false"
        :gap="10"
        fontSize="0rem" v-else>

      </vue-ellipse-progress>
  </div>

</template>

<script>
export default {
  data () {
    return {
      gradient: {
        radial: false,
        colors: [
          {
            color: '#E6F1DC',
            offset: '0',
            opacity: '1'
          },
          {
            color: '#E6664D',
            offset: '100',
            opacity: '1'
          }
        ]
      },
      gradient2: {
        radial: false,
        colors: [
          {
            color: '#E6F1DC',
            offset: '0',
            opacity: '1'
          },
          {
            color: '#1D7C5C',
            offset: '100',
            opacity: '1'
          }
        ]
      }

    }
  },
  computed: {
    timeleft () {
      return this.$store.getters.timeleft
    },
    progress () {
      return this.$store.getters.isBreak ? this.timeleft * 100 / parseInt(process.env.VUE_APP_TIMELEFT_BREAK) : this.timeleft * 100 / parseInt(process.env.VUE_APP_TIMELEFT)
    },
    isBreak () {
      return this.$store.getters.isBreak
    }
  }
}
</script>
