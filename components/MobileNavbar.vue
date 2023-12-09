<template>
  <div class="master">
    <!-- <div class="test-block">
      <p>Сайт работает в тестовом режиме</p>
    </div> -->
    <div class="wrap">
      <div class="container">
        <div class="left">
          <div class="brand">
            <NuxtLink :to="localePath('/')">
              <img
                :title="$store.state.translations['main.title-span']"
                src="@/assets/img/logo/brand.svg"
                :alt="$store.state.translations['main.title-span']"
                loading="lazy"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="right">
          <div
            @click="menuHandle = !menuHandle"
            :class="{ x: menuHandle }"
            class="burger"
          >
            <div class="stick"></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ show: menuHandle }" class="menu">
      <div class="container">
        <ul class="links">
          <li>
            <NuxtLink @click="menuHandle = false" :to="localePath('/')">
              {{ $store.state.translations['main.home'] }}
            </NuxtLink>
          </li>
          <li>
            <button @click="dropHandle = !dropHandle">
              {{ $store.state.translations['main.products'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div :class="{ show: dropHandle }" class="drop">
              <ul>
                <li v-for="item in categories" :key="item.id">
                  <NuxtLink :to="localePath(`/products/${item.slug}`)">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink @click="menuHandle = false" :to="localePath('/about')">
              {{ $store.state.translations['main.about'] }}
            </NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink
              @click="menuHandle = false"
              :to="`/${$route.params.lang}/reviews`"
            >
              {{ $store.state.translations['main.reviews'] }}
            </NuxtLink>
          </li> -->
          <li>
            <NuxtLink @click="menuHandle = false" :to="localePath('/news')">
              {{ $store.state.translations['main.news'] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="menuHandle = false" :to="localePath('/media')">
              {{ $store.state.translations['main.media'] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="menuHandle = false" :to="localePath('/contacts')">
              {{ $store.state.translations['main.contacts'] }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="lang">
          <li>
            <NuxtLink :to="switchLocalePath('ru')"> Russian </NuxtLink>
          </li>
          |
          <li>
            <NuxtLink :to="switchLocalePath('uz')"> Uzbek </NuxtLink>
          </li>
          |
          <li>
            <NuxtLink :to="switchLocalePath('en')"> English </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories.js'

export default {
  data() {
    return {
      menuHandle: false,
      dropHandle: true,
      categories: [],
    }
  },

  watch: {
    $route() {
      this.menuHandle = false
    },

    async currentLang(val) {
      const categories = await categoriesApi.getCategories(this.$axios, {
        headers: {
          language: this.$i18n.locale,
        },
      })

      this.categories = categories
    },
  },

  async fetch() {
    const categories = await categoriesApi.getCategories(this.$axios, {
      headers: {
        language: this.$i18n.locale,
      },
    })

    this.categories = categories
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$i18n.locale
    },
  },

  methods: {
    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
        query: this.$route.query,
      })
      localStorage.setItem('Lang', code)
    },
  },
}
</script>

<style scoped>
.test-block {
  display: flex;
  justify-content: center;
  padding: 8px 0;
  background-color: red;
  height: 37px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.test-block p {
  color: #fff;
  font-family: var(--decor-medium);
  font-size: 14px;
}
.wrap {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 24px 0;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
}
.brand img {
  width: 100px;
}
.stick {
  width: 30px;
  height: 2px;
  background: white;
  border-radius: 2px;
  position: relative;
  transition: 0.4s;
}
.stick::after {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 30px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: 0.4s;
}
.stick::before {
  content: '';
  position: absolute;
  left: 0;
  top: -10px;
  width: 30px;
  height: 2px;
  background: white;
  border-radius: 2px;
}
.burger.x .stick {
  transform: rotate(45deg);
}
.burger.x .stick::after {
  transform: rotate(90deg);
  top: 0;
}
.burger.x .stick::before {
  display: none;
}
.wrap .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background: white;
  z-index: 98;
  transform: translateY(-100%);
  transition: 0.4s;
}
.menu.show {
  transform: translateY(0%);
}
.links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.links a,
.links button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--grey-64, #5d5d5f);
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 100%;
}
.drop ul {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.drop {
  height: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.drop.show {
  height: 100%;
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.lang {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 32px;
}
.lang a {
  font-size: 22px;
  color: var(--grey-64, #5d5d5f);
}
.lang a.disable {
  color: var(--yellow);
}
</style>
