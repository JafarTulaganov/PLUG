<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="header">
          <h2 class="section__title title">
            {{ $store.state.translations['main.partners-title'] }}
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
        <div ref="swiperOne" class="swiper swiperOne">
          <div class="swiper-wrapper">
            <div v-for="item in partners" :key="item.id" class="swiper-slide">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="item.title"
                class="pic"
                loading="lazy"
              />
            </div>
            <div
              v-for="item in partners"
              :key="item.index"
              class="swiper-slide"
            >
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="item.title"
                class="pic"
                loading="lazy"
              />
            </div>
            <div
              v-for="item in partners"
              :key="item.count"
              class="swiper-slide"
            >
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="item.title"
                class="pic"
                loading="lazy"
              />
            </div>
          </div>
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
  props: ['partners'],

  mounted() {
    const swiperOne = new Swiper(this.$refs.swiperOne, {
      slidesPerView: 2,
      spaceBetween: 8,
      navigation: {
        prevEl: '.right-arrow',
        nextEl: '.left-arrow',
      },
      speed: 10000,
      autoplay: {
        delay: 30,
        disableOnInteractions: false,
      },
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      },
    })
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.cardo {
  background: #f5f5f7;
  border-radius: 32px;
  padding: 48px;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-transform: uppercase;
  margin-bottom: 0;
}
.pic {
  width: 100%;
  height: 128px;
  object-fit: cover;
  border-radius: 12px;
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
    padding-bottom: 64px;
  }
  .cardo {
    padding: 16px;
    border-radius: 16px;
  }
  .pic {
    height: 77px;
  }
  .title {
    margin-bottom: 0px;
  }
  .header {
    margin-bottom: 12px;
  }
  .buttons {
    display: none;
  }
}
</style>
