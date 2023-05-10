<template>
    <section class="section-bottom">
        <div
                class="block-bottom"
        >
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-humidity"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            Влажность: {{ weatherInfo?.main?.humidity }} %
                        </div>
                        <div class="block-bottom-text-block-desc">
                            Влажность - это концентрация водяного пара, присутствующего в воздухе. Водяной пар, газообразное состояние воды, как правило, невидим для человеческого глаза.
                            <br /><br />
                            Одинаковое количество водяного пара приводит к более высокой относительной влажности холодного воздуха, чем теплого.
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

<style lang="scss" scoped>

</style>