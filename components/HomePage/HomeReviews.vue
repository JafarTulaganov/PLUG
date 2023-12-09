<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="section__title">
          {{ $store.state.translations['main.reviews-title'] }}
        </h4>
        <NuxtLink class="more" :to="localePath(`/reviews/${item.slug}`)">
          {{ $store.state.translations['main.see-all'] }}
          <svg
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
        </NuxtLink>
      </div>
    </div>
    <div class="swiper" ref="swiperOne">
      <div class="swiper-wrapper">
        <div v-for="item in reviews" :key="item.id" class="swiper-slide cardo">
          <div class="top">
            <div class="img">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="$store.state.translations['main.title-span']"
                class="pic"
                loading="lazy"
              />
            </div>
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <p class="status">CEO From Software</p>
            </div>
          </div>
          <div v-html="item.text" class="bottom"></div>
        </div>
        <div
          v-for="item in reviews"
          :key="item.index"
          class="swiper-slide cardo"
        >
          <div class="top">
            <div class="img">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="$store.state.translations['main.title-span']"
                class="pic"
                loading="lazy"
              />
            </div>
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <p class="status">CEO From Software</p>
            </div>
          </div>
          <div v-html="item.text" class="bottom"></div>
        </div>
        <div
          v-for="item in reviews"
          :key="item.count"
          class="swiper-slide cardo"
        >
          <div class="top">
            <div class="img">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="$store.state.translations['main.title-span']"
                class="pic"
                loading="lazy"
              />
            </div>
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <p class="status">CEO From Software</p>
            </div>
          </div>
          <div v-html="item.text" class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import reviewsApi from '@/api/reviews'

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted() {
    const swiperOne = new Swiper(this.$refs.swiperOne, {
      slidesPerView: 1.2,
      spaceBetween: 8,
      loop: true,
      speed: 10000,
      autoplay: {
        delay: 30,
        disableOnInteractions: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    })
  },

  props: ['reviews'],
}
</script>

<style scoped>
.wrap {
  padding: 120px 0 48px 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.more {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: var(--yellow);
  padding: 8px 24px;
  border-radius: 34px;
  transition: 0.4s;
  border: 1px solid var(--yellow);
  display: flex;
  align-items: center;
  gap: 8px;
}
.more svg {
  transform: rotate(-90deg);
}
.more path {
  transition: 0.4s;
  stroke: var(--yellow);
}
.more:hover {
  background: var(--yellow);
  color: white;
  text-decoration: none;
}
.more:hover path {
  stroke: white;
}
.cardo {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}
.top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.name {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  font-family: var(--medium);
  margin-bottom: 6px;
}
.status {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: var(--light);
}
.bottom {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: var(--light);
}
.swiper {
  padding: 0 16px;
}
@media screen and (max-width: 1024px) {
  .name {
    font-size: 20px;
    margin-bottom: 4px;
  }
  .status {
    font-size: 18px;
  }
  .cardo {
    padding: 16px;
  }
  .pic {
    width: 40px;
    height: 40px;
  }
  .bottom {
    font-size: 18px;
  }
  .wrap {
    position: relative;
    padding-bottom: 120px;
  }
  .more {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    max-width: 90%;
    justify-content: center;
    width: 100%;
  }
}
</style>
