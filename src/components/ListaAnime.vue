<template>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="anime in animes" :key="anime.id" >
        <CardAnime :anime_individual="anime"></CardAnime>
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>
<script>

import CardAnime from "@/components/CardAnime.vue";
import { Swiper} from 'swiper';
import 'swiper/swiper-bundle.css';
import {Navigation, Pagination} from "swiper/modules";

export default {
  components: {CardAnime},
  props: [
    'animes'
  ],
  mounted() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      slidesPerView: 3,
    });

    swiper.on('slideChange', () => {
      console.log('slide changed');
    });
  }
}
</script>

<style scoped>
</style>