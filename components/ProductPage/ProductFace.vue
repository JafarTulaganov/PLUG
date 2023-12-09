<template>
  <div class="wrap" itemscope itemtype="https://schema.org/Product">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12 left">
          <div thumbsSlider="" class="swiper smallSwiper">
            <div class="swiper-wrapper">
              <div
                v-for="item in product.images"
                :key="item.id"
                class="swiper-slide"
              >
                <img
                  itemprop="image"
                  :title="product.name"
                  :src="item.image"
                  :alt="product.name"
                  class="pic small"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="swiper bigSwiper">
            <div class="swiper-wrapper">
              <div
                v-for="item in product.images"
                :key="item.index"
                class="swiper-slide"
              >
                <img
                  itemprop="image"
                  :title="product.name"
                  :src="item.image"
                  :alt="product.name"
                  class="pic big"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12 right">
          <p class="sup" itemprop="disambiguatingDescription">
            {{ product.subtitle }}
          </p>
          <h1 class="name" itemprop="name">{{ product.name }}</h1>
          <div v-html="product.desc" class="desc" itemprop="description"></div>
          <div class="specs" v-show="product.specification > 0">
            <div
              v-for="spec in product.specification"
              :key="spec.id"
              class="spec"
            >
              <div class="question">
                <div class="twice">
                  <img
                    :title="product.name"
                    :src="spec.specification.image"
                    :alt="product.name"
                    class="icon"
                    loading="lazy"
                  />
                </div>
                <p>{{ spec.specification.name }}</p>
              </div>
              <div class="line"></div>
              <div class="answer">
                <p>{{ spec.value }}</p>
              </div>
            </div>
          </div>
          <NuxtLink class="all" to="#target">
            {{ $store.state.translations['inner.all-specs'] }}
          </NuxtLink>
          <a :href="`tel: ${info.nbm}`" id="target" class="price">
            {{ $store.state.translations['inner.price'] }}
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
  props: ['product', 'info'],

  mounted() {
    var swiper = new Swiper('.smallSwiper', {
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1024: {
          direction: 'vertical',
          spaceBetween: 8,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        },
      },
    })
    var swiper2 = new Swiper('.bigSwiper', {
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
    })
  },
}
</script>

<style scoped>
.wrap {
  padding: 80px 0 120px 0;
}
.left {
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 24px;
}
.smallSwiper,
.bigSwiper {
  width: 100%;
}
.smallSwiper {
  height: 360px;
}
.bigSwiper {
  height: 600px;
  border: 1px solid #ebebeb;
  border-radius: 24px;
}
.small {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.big {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 24px;
}
.smallSwiper .swiper-slide {
  height: 30% !important;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  transition: 0.1s;
}
.smallSwiper .swiper-slide-thumb-active {
  border: 2px solid #17191c;
}
.sup {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #5d5d5f;
  padding: 4px 12px;
  background: #f5f5f7;
  border-radius: 35px;
  margin-bottom: 14px;
  display: inline-flex;
}
.name {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  margin-bottom: 16px;
}
.desc {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc :deep(td) {
  padding: 4px 16px 4px 0;
}
.specs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 60%;
  margin-bottom: 32px;
}
.spec {
  display: none;
  align-items: center;
  width: 100%;
}
.spec:nth-child(-n + 5) {
  display: flex;
}
.line {
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  height: 100%;
}
.question {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
  padding-right: 50px;
  background: white;
  position: relative;
  z-index: 3;
  white-space: nowrap;
}
.twice {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5f3ff;
}
.icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
.answer {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
  padding-left: 16px;
  background: white;
  position: relative;
  z-index: 3;
  white-space: nowrap;
}
.all {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #1878f3;
  display: flex;
  text-decoration: underline;
  margin-bottom: 40px;
  font-family: var(--medium);
}
.price {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: var(--yellow);
  border: 2px solid var(--yellow);
  border-radius: 40px;
  padding: 16px 24px;
  font-family: var(--decor-bold);
}
@media screen and (max-width: 1024px) {
  .left {
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
  }
  .bigSwiper {
    height: 314px;
    border-radius: 16px;
  }
  .smallSwiper {
    height: 100px;
    margin-bottom: 40px;
  }
  .smallSwiper .swiper-slide {
    height: 100% !important;
  }
  .name {
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .desc {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 150%;
  }
  .specs {
    max-width: 100%;
    margin-bottom: 16px;
  }
  .question {
    padding-right: 12px;
    font-size: 18px;
  }
  .answer {
    font-size: 18px;
  }
  .all {
    margin-bottom: 24px;
  }
  .price {
    width: 100%;
  }
  .wrap {
    padding-bottom: 64px;
  }
}
</style>
