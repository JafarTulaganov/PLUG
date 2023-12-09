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
            <NuxtLink :to="`/${$route.params.lang}/news/${item.slug}`">
              <div class="img">
                <img :src="item.image" alt="" />
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

import SiteTop from '@/components/SiteTop'
// import NewsCard from '@/components/NewsCard.vue'
// import OtherCard from '@/components/OtherCard.vue'

export default {
  components: {
    SiteTop,
    // NewsCard,
    // OtherCard,
  },

  async asyncData({ params, $axios }) {
    const news = await newsApi.getNews($axios, params.lang)
    const post = await newsApi.getNew(params.slug, $axios, params.lang)

    return {
      news,
      post,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 96px 0 170px 0;
}
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  background: linear-gradient(94.17deg, #3f4347 3.94%, #17191c 103.12%);
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
  font-size: 20px;
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
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9a999b;
}
.link {
  font-weight: 700;
  font-size: 14px;
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
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .date {
    font-size: 8px;
  }
  .link {
    font-size: 10px;
  }
}
</style>
