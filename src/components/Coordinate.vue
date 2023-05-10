<template>
    <section class="section-bottom">
        <div
                class="block-bottom"
        >
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-coords"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            Долгота: {{weatherInfo?.coord?.lat}}
                        </div>
                        <div class="block-bottom-text-block-desc">
                            Долгота измеряет расстояние к востоку или западу от нулевого меридиана.
                        </div>
                    </div>
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            Широта: {{weatherInfo?.coord?.lon}}
                        </div>
                        <div class="block-bottom-text-block-desc">
                            Линии широты начинаются на экваторе (0 градусов широты) и проходят на восток и запад параллельно экватору.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
  props: {
      weatherInfo: {
          type: [Object, null],
          required: true,
      }
  }
}
</script>

<style lang="sass" scoped>

</style>