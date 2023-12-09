<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.media']" />
    <div class="container">
      <!-- <div class="header">
        <button
          @click="
            ;(allHandle = true), (photoHandle = false), (videoHandle = false)
          "
          :class="{ active: allHandle }"
          class="button"
        >
          Все медиа
        </button>
        <button
          @click="
            ;(allHandle = false), (photoHandle = true), (videoHandle = false)
          "
          :class="{ active: photoHandle }"
          class="button"
        >
          Фотогалерея
        </button>
        <button
          @click="
            ;(allHandle = false), (photoHandle = false), (videoHandle = true)
          "
          :class="{ active: videoHandle }"
          class="button"
        >
          Видеогалерея
        </button>
      </div> -->
      <div :class="{ show: allHandle }" class="all items">
        <div
          v-for="item in media"
          :key="item.id"
          class="item"
          @click="modalHandle = item.id"
        >
          <div class="cover" v-if="item.image != null">
            <img :src="item.image" alt="" class="pic" />
            <img src="@/assets/img/logo/image.svg" alt="" class="logo" />
          </div>
          <div class="cover" v-if="item.video != null">
            <video :src="item.video" class="pic"></video>
            <img src="@/assets/img/logo/play.svg" alt="" class="logo" />
          </div>
        </div>
      </div>
      <div :class="{ show: photoHandle }" class="photo items">
        <div class="item">
          <img src="@/assets/img/media-5.svg" alt="" class="pic" />
          <img src="@/assets/img/logo/image.svg" alt="" class="logo" />
        </div>
      </div>
      <div :class="{ show: videoHandle }" class="video items">
        <div class="item">
          <img src="@/assets/img/media-2.svg" alt="" class="pic" />
          <img src="@/assets/img/logo/play.svg" alt="" class="logo" />
        </div>
      </div>
    </div>

    <div :class="{ show: modalHandle }" class="modall">
      <div class="x" @click="modalHandle = false">
        <i class="bx bx-x"></i>
      </div>
      <div class="modal__wrap" @click="modalHandle = false"></div>
      <div class="modal__body">
        <div class="swiper bigSwiper">
          <div class="swiper-wrapper">
            <div
              v-for="element in media"
              :key="element.id"
              class="swiper-slide"
            >
              <div v-if="element.image != null" class="cover">
                <img :src="element.image" alt="" class="pic big" />
              </div>

              <div v-if="element.video != null" class="cover">
                <video controls class="pic big" :src="element.video"></video>
              </div>
            </div>
          </div>
        </div>
        <div thumbsSlider="" class="swiper smallSwiper">
          <div class="swiper-wrapper">
            <div
              v-for="element in media"
              :key="element.id"
              class="swiper-slide"
            >
              <div v-if="element.image != null" class="cover">
                <img :src="element.image" alt="" class="pic small" />
              </div>

              <div v-if="element.video != null" class="cover">
                <video class="pic small" :src="element.video"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import mediaApi from '@/api/media'

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

import SiteTop from '@/components/SiteTop'

export default {
  data() {
    return {
      allHandle: true,
      photoHandle: false,
      videoHandle: false,
      modalHandle: false,
    }
  },

  components: {
    SiteTop,
  },

  mounted() {
    var swiper = new Swiper('.smallSwiper', {
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1024: {
          spaceBetween: 20,
          slidesPerView: 10,
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

  async asyncData({ $axios }) {
    const media = await mediaApi.getMedia($axios)

    return {
      media,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 90px 12px 170px 12px;
}
.items {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.items.show {
  display: grid;
}
.item {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 340px;
}
.pic {
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: cover;
}
.cover {
  height: 100%;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header {
  margin-bottom: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.button {
  width: 268px;
  height: 52px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f4347;
  border-radius: 70px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
}
.button.active {
  background: var(--yellow);
}
.smallSwiper,
.bigSwiper {
  width: 100%;
  margin-bottom: 30px;
}
.smallSwiper {
  height: 100px;
}
.bigSwiper {
  height: 600px;
  border: 1px solid #ebebeb;
  border-radius: 24px;
}
.small {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.big {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}
.smallSwiper .swiper-slide {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  transition: 0.1s;
}
.smallSwiper .swiper-slide-thumb-active {
  border: 2px solid var(--yellow);
}
.modall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(2, 1, 5, 0.64);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.modall.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.modal__body {
  max-width: 80%;
  max-height: 80%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
}
.modal__wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
}
.x {
  font-size: 40px;
  position: absolute;
  top: 58px;
  right: 58px;
  color: white;
  cursor: pointer;
  z-index: 9;
}
video {
  object-fit: contain !important;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 32px 12px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .item {
    height: 200px;
  }
  .bigSwiper {
    height: 250px;
    margin-bottom: 16px;
    border-radius: 16px;
  }
  .smallSwiper {
    height: 70px;
    margin-bottom: 0;
  }
  .x {
    top: 16px;
    right: 16px;
  }
}
</style>
