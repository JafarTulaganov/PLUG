<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h2 class="title section__title">
          {{ $store.state.translations['main.news-title'] }}
        </h2>
        <NuxtLink class="more" :to="localePath('/news')">
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
      <div class="items">
        <div v-for="item in news" :key="item.id" class="item">
          <NuxtLink :to="localePath(`/news/${item.slug}`)">
            <div class="img">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="item.title"
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
  </div>
</template>

<script>
export default {
  components: {},

  props: ['news'],
}
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
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
  margin-bottom: 24px;
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
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.item {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 24px;
}
.content {
  padding: 16px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  transition: 0.4s;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  .wrap {
    padding-bottom: 64px;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .item {
    border-radius: 16px;
  }
  .content {
    padding: 12px;
    gap: 12px;
    min-height: unset;
  }
  .img img {
    height: 102px;
  }
  .name {
    font-size: 18px;
  }
  .date {
    font-size: 8px;
  }
  .link {
    font-size: 8px;
    gap: 4px;
  }
  .header {
    margin: 0;
  }
  .more {
    display: none;
  }
}
</style>
