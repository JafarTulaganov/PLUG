<template>
  <div class="wrap">
    <div v-for="item in categories" :key="item.id" class="container">
      <div class="header">
        <h2 class="section__title">{{ item.name }}</h2>
        <NuxtLink :to="localePath(`/products/${item.slug}`)" class="all">
          {{ $store.state.translations['main.all-products'] }}
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

      <div class="cover marginer">
        <div class="prev-arrow" :class="'prev-arrow' + item.id">
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
        </div>
        <div class="swiper swiperOne" :class="'swiper' + item.id">
          <div class="swiper-wrapper">
            <div
              v-for="product in item.children"
              :key="product.id * item.id"
              class="swiper-slide cardo"
            >
              <NuxtLink :to="localePath(`/products/${item.slug}`)">
                <div class="img">
                  <img
                    :title="product.name"
                    :src="product.image"
                    :alt="product.name"
                    class="pic"
                    loading="lazy"
                  />
                </div>
                <div class="content">
                  <h4 class="name">{{ product.name }}</h4>
                  <p class="category">{{ item.name }}</p>
                  <p class="txt">
                    {{ product.subtitle }}
                  </p>
                  <p class="more">
                    {{ $store.state.translations['main.more'] }}
                    <i class="bx bx-right-arrow-alt"></i>
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="next-arrow" :class="'next-arrow' + item.id">
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
  props: ['categories'],

  mounted() {
    this.categories.forEach((item) => {
      new Swiper('.swiper' + item.id, {
        slidesPerView: 1.2,
        spaceBetween: 8,
        navigation: {
          prevEl: '.next-arrow' + item.id,
          nextEl: '.prev-arrow' + item.id,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      })
    })
  },
}
</script>

<style scoped>
.wrap {
  background: #f5f5f7;
  padding: 80px 0;
  position: relative;
}
.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}
.cover {
  position: relative;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.all {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: var(--yellow);
  padding: 8px 24px;
  border-radius: 34px;
  transition: 0.4s;
  border: 1px solid var(--yellow);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.all svg {
  transform: rotate(-90deg);
}
.all path {
  transition: 0.4s;
  stroke: var(--yellow);
}
.all:hover {
  background: var(--yellow);
  color: white;
  text-decoration: none;
}
.all:hover path {
  stroke: white;
}
.cardo {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  overflow: hidden;
}
.img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.pic {
  width: 279px;
  height: 279px;
  object-fit: cover;
  border-radius: 50%;
}
.name {
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
  font-family: var(--medium);
  margin-bottom: 8px;
  transition: 0.4s;
}
.category {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: var(--light);
  padding: 4px 12px;
  background: #f5f5f7;
  border-radius: 35px;
  display: inline-flex;
  margin-bottom: 20px;
}
.txt {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: var(--light);
  max-width: 90%;
}
.section__title {
  margin-bottom: 24px;
}
.more {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: var(--black);
  margin-top: 20px;
  position: relative;
  display: inline-flex;
  transition: 0.8s;
  transform: translateY(40px);
  align-items: center;
  gap: 4px;
}
.more::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--yellow);
}
.cardo a:hover {
  text-decoration: none;
}
.content {
  transition: 0.6s;
  transform: translateY(40px);
}
.pic {
  transition: 0.4s;
  transform: translateY(12px);
}
.cardo:hover .pic {
  border-radius: 16px;
  transform: translateY(0);
  width: 100%;
}
.cardo:hover .content,
.cardo:hover .more {
  transform: translateY(0);
}
.cardo:hover .name {
  color: var(--yellow);
}
.next-arrow,
.nextTwo {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -20px);
}
.prev-arrow,
.prevTwo {
  position: absolute;
  top: 50%;
  left: auto;
  right: 0;
  transform: translateY(-50%) translateX(20px);
}
.next-arrow,
.prev-arrow,
.nextTwo,
.prevTwo {
  background: #ffffff;
  border: 1px solid #dde2ed;
  border-radius: 50%;
  display: inline-flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.prev-arrow path,
.next-arrow path,
.prevTwo path,
.nextTwo path {
  stroke: var(--black);
}
.next-arrow svg,
.nextTwo svg {
  transform: rotate(90deg);
}
.prev-arrow svg,
.prevTwo svg {
  transform: rotate(-90deg);
}
.marginer {
  margin-bottom: 40px;
}
@media screen and (max-width: 1600px) {
  .wrap {
    padding: 80px 24px;
  }
}
@media screen and (max-width: 1024px) {
  .cardo {
    padding: 16px;
    border-radius: 16px;
  }
  .pic {
    height: 200px;
    border-radius: 8px;
    transform: translateY(0);
  }
  .img {
    margin-bottom: 16px;
  }
  .content,
  .more {
    transform: translateY(0);
  }
  .name {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .category {
    font-size: 16px;
    padding: 4px 12px;
    margin-bottom: 16px;
  }
  .txt {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .more {
    margin: 0;
    font-size: 16px;
  }
  .next,
  .prev {
    display: none;
  }
  .container {
    padding: 0 16px 60px 16px;
    position: relative;
    /* padding-bottom: 64px; */
    /* margin-bottom: 20px; */
  }
  .all {
    z-index: 9;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    justify-content: center;
  }
  .wrap {
    padding: 20px 0;
  }
  .prev-arrow,
  .next-arrow {
    display: none;
  }
}
</style>
