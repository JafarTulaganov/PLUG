<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.reviews']" />
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <div class="items">
            <div v-for="item in firstHalf" :key="item.id" class="item">
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
        <div class="col-lg-6 col-xs-12">
          <div class="items">
            <div v-for="item in secondHalf" :key="item.id" class="item">
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
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import reviewsApi from '@/api/reviews.js'

import SiteTop from '@/components/SiteTop'

export default {
  components: {
    SiteTop,
  },

  data() {
    return {
      firstHalf: '',
      secondHalf: '',
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'leading supplier, manufacturer of polymer pipes',
        },
        { hid: 'og:title', property: 'og:title', content: this.pageTitle },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pga.uz' + this.$route.fullPath,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'leading supplier, manufacturer of polymer pipes',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://pga.uz/_nuxt/img/brand.19d3c9f.svg',
        },
      ],
      script: [
        {
          src: '/replain.js',
        },
      ],
    }
  },

  async asyncData({ $axios, params }) {
    const reviews = await reviewsApi.getReviews($axios, params.lang)

    return {
      reviews,
    }
  },

  mounted() {
    const half = Math.ceil(this.reviews.length / 2)

    const firstHalf = this.reviews.slice(0, half)
    const secondHalf = this.reviews.slice(half)

    ;(this.firstHalf = firstHalf), (this.secondHalf = secondHalf)
  },
}
</script>

<style scoped>
.row {
  padding: 120px 0 180px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}
.item {
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
@media screen and (max-width: 1024px) {
  .row {
    gap: 24px;
  }
}
</style>
