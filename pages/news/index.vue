<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.news']" />
    <div class="container">
      <div class="latest">
        <h4 class="title">
          {{ $store.state.translations['inner.news-today'] }}
        </h4>
        <div class="items">
          <div v-for="item in news" :key="item.id" class="item">
            <NuxtLink :to="localePath(`/news/${item.slug}`)">
              <div class="img">
                <img
                  :title="$store.state.translations['main.title-span']"
                  :src="item.image"
                  :alt="$store.state.translations['main.title-span']"
                  loading="lazy"
                />
              </div>
              <div class="content">
                <p class="name">{{ item.title }}</p>
                <div class="flexer">
                  <p class="date">{{ item.date }}</p>
                  <p class="link">
                    {{ $store.state.translations['main.more'] }}
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
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- <div class="other">
        <h4 class="title">News</h4>
        <div class="items">
          <OtherCard />
          <OtherCard />
          <OtherCard />
          <OtherCard />
          <OtherCard />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import newsApi from '@/api/news.js'
import infoApi from '@/api/info.js'

import SiteTop from '@/components/SiteTop'
// import NewsCard from '@/components/NewsCard.vue'
// import OtherCard from '@/components/OtherCard.vue'

export default {
  components: {
    SiteTop,
    // NewsCard,
    // OtherCard,
  },

  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.info?.subtitle,
        },
        { hid: 'og:title', property: 'og:title', content: this.info?.title },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pga.uz' + this.$route.fullPath,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.info?.subtitle,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.info?.catalog,
        },
      ],
      script: [
        {
          src: '/replain.js',
        },
      ],
    }
  },

  async asyncData({ params, $axios, query, i18n }) {
    const news = await newsApi.getNews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const post = await newsApi.getNew(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const info = await infoApi.getInfo($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      news,
      post,
      info,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 96px 16px 170px 16px;
}
.title {
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
  margin-bottom: 24px;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.other .items {
  grid-template-columns: repeat(2, 1fr);
}
.other {
  padding-top: 80px;
}
.item {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 24px;
}
.content {
  padding: 16px;
}
.img img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  transition: 0.4s;
}
.img {
  overflow: hidden;
}
.name {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  font-family: var(--medium);
  color: var(--black);
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.4s;
}
.flexer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9a999b;
}
.link {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: var(--yellow);
  display: flex;
  align-items: center;
  gap: 16px;
}
.link svg {
  transform: rotate(-90deg);
}
.link path {
  stroke: var(--yellow);
}
.item a:hover {
  text-decoration: none;
}
.item:hover img {
  transform: scale(1.1);
}
.item:hover .name {
  color: var(--yellow);
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .container {
    padding: 64px 12px;
  }
  .title {
    font-size: 24px;
    font-weight: 700;

    line-height: 150%;
  }
  .item {
    border-radius: 16px;
  }
  .img img {
    height: 106px;
  }
  .content {
    padding: 12px;
  }
  .name {
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .date {
    font-size: 8px;
  }
  .link {
    font-size: 14px;
  }
}
</style>
