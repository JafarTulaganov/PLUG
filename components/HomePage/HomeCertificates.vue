<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h2 class="section__title">
          {{ $store.state.translations['main.certificates-title'] }}
        </h2>
        <div class="buttons">
          <svg
            class="left-arrow"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4163 0.791016L7.99967 7.20768L1.58301 0.791016"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            class="right-arrow"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4163 0.791016L7.99967 7.20768L1.58301 0.791016"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div ref="swiperOne" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="item in certificates"
          :key="item.id"
          class="swiper-slide cardo"
        >
          <a :href="item.file" :download="item.file" target="_blank">
            <img
              :title="$store.state.translations['main.title-span']"
              :src="item.image"
              :alt="item.title"
              class="pic"
              loading="lazy"
            />
          </a>
        </div>
        <div
          v-for="item in certificates"
          :key="item.index"
          class="swiper-slide cardo"
        >
          <a :href="item.file" :download="item.file" target="_blank">
            <img
              :title="$store.state.translations['main.title-span']"
              :src="item.image"
              :alt="item.title"
              class="pic"
              loading="lazy"
            />
          </a>
        </div>
        <div
          v-for="item in certificates"
          :key="item.count"
          class="swiper-slide cardo"
        >
          <a :href="item.file" :download="item.file" target="_blank">
            <img
              :title="$store.state.translations['main.title-span']"
              :src="item.image"
              :alt="item.title"
              class="pic"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted() {
    const swiperOne = new Swiper(this.$refs.swiperOne, {
      slidesPerView: 2.2,
      spaceBetween: 8,
      loop: true,
      speed: 10000,
      autoplay: {
        delay: 30,
        disableOnInteractions: false,
      },
      navigation: {
        prevEl: '.right-arrow',
        nextEl: '.left-arrow',
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    })
  },

  props: ['certificates'],
}
</script>

<style scoped>
.pic {
  width: 100%;
  height: 220px;
  object-fit: contain;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 32px;
}
.left-arrow {
  transform: rotate(90deg);
  cursor: pointer;
  height: 24px;
  width: 24px;
}
.left-arrow path {
  stroke: black;
}
.right-arrow {
  cursor: pointer;
  transform: rotate(-90deg);
  height: 24px;
  width: 24px;
}
.right-arrow path {
  stroke: var(--yellow);
}
@media screen and (max-width: 1024px) {
  .wrap {
  }
  .section__title {
    margin-bottom: 0;
  }
  .pic {
    height: 120px;
  }
  .buttons {
    display: none;
  }
}
</style>
