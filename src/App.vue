<template>
    <div class="page">
        <main class="main">
            <div class="container">
                <div class="laptop">
                    <div class="sections">
                        <section class="section section-left">
                            <div class="info">
                                <div class="city-inner">
                                    <input v-model="this.city" type="text" @keyup.enter="fetchCity" class="search">
                                </div>
                                <weather-summary :weather-info="weatherInfo"></weather-summary>
                            </div>
                        </section>
                        <section class="section section-right">
                            <Highlights :weather-info="weatherInfo"></Highlights>
                        </section>
                    </div>
                    <div class="sections">
                        <coordinate :weather-info="weatherInfo"></coordinate>
                        <humidity :weather-info="weatherInfo"></humidity>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {API_key, BASE_URL} from "@/const";
import WeatherSummary from "@/components/WeatherSummary.vue";
import Highlights from "@/components/Highlights.vue";
import Coordinate from "@/components/Coordinate.vue";
import Humidity from "@/components/humidity.vue";
import axios from "axios";
export default {
    components: {
        Highlights,
        WeatherSummary,
        Coordinate,
        Humidity,
    },

    data() {
        return{
            city: 'Moscow',
            weatherInfo: null
        }
    },
    methods: {
        async fetchCity() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&&units=metric&appid=${API_key}&lang=ru`)
            this.weatherInfo = response.data
        }
    },

    mounted() {
        this.fetchCity()
    }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/main.sass"
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('./assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>