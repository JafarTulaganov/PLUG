<template>
  <div id="navbar" class="wrap">
    <!-- <div class="test-block">
      <p>Сайт работает в тестовом режиме</p>
    </div> -->
    <div class="top">
      <div class="container">
        <div class="left">
          <p>{{ info.adres }}</p>
          <p>|</p>
          <p>{{ info.work_time }}</p>
        </div>

        <div class="right">
          <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
          <a :href="`mailto:${info.email}`">{{ info.email }}</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="left">
          <NuxtLink :to="localePath('/')">
            <img
              :title="$store.state.translations['main.title-span']"
              width="122"
              class="brand"
              src="@/assets/img/logo/brand.svg"
              :alt="$store.state.translations['main.title-span']"
              loading="lazy"
            />
            <img
              :title="$store.state.translations['main.title-span']"
              width="122"
              class="brand-black"
              src="@/assets/img/logo/brand-black.svg"
              :alt="$store.state.translations['main.title-span']"
              loading="lazy"
            />
          </NuxtLink>
        </div>
        <div class="right">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')">{{
                $store.state.translations['main.home']
              }}</NuxtLink>
            </li>
            <li class="caller">
              <button class="dropper">
                {{ $store.state.translations['main.products'] }}
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
              </button>
              <div class="dropdown">
                <ul>
                  <li v-for="item in categories" :key="item.id">
                    <NuxtLink :to="localePath(`/products/${item.slug}`)">{{
                      item.name
                    }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')">{{
                $store.state.translations['main.about']
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/news')">{{
                $store.state.translations['main.news']
              }}</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink :to="`/${$route.params.lang}/reviews`">{{
                $store.state.translations['main.reviews']
              }}</NuxtLink>
            </li> -->
            <li>
              <NuxtLink :to="localePath('/media')">{{
                $store.state.translations['main.media']
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')">{{
                $store.state.translations['main.contacts']
              }}</NuxtLink>
            </li>
          </ul>
          <div class="lang">
            <p class="current">
              {{ $i18n.locale }}
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
            <div class="dropdown langer">
              <ul>
                <li>
                  <NuxtLink :to="switchLocalePath('ru')"> Russian </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="switchLocalePath('uz')"> Uzbek </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="switchLocalePath('en')"> English </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories.js'
import infoApi from '@/api/info.js'

export default {
  name: 'DesktopNavbar',

  data() {
    return {
      categories: [],
      info: {},
    }
  },

  async fetch() {
    const categories = await categoriesApi.getCategories(this.$axios, {
      headers: {
        language: this.$i18n.locale,
      },
    })
    const info = await infoApi.getInfo(this.$axios, {
      headers: {
        language: this.$i18n.locale,
      },
    })

    this.categories = categories
    this.info = info
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll')
      } else {
        navbar.classList.remove('scroll')
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$i18n.locale
    },
  },

  watch: {
    async currentLang(val) {
      const categories = await categoriesApi.getCategories(this.$axios, {
        headers: {
          language: this.$i18n.locale,
        },
      })
      const info = await infoApi.getInfo(this.$axios, {
        headers: {
          language: this.$i18n.locale,
        },
      })

      this.categories = categories
      this.info = info
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
}
.test-block p {
  color: #fff;
  font-family: var(--decor-medium);
  font-size: 14px;
}
.wrap {
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  z-index: 999;
  transition: 0.4s;
}
.wrap.scroll {
  background: white;
}
.wrap.scroll .bottom {
  z-index: 99;
  border-bottom: 1px solid #ebebeb;
  box-shadow: 0px 8px 32px rgba(8, 54, 97, 0.08);
}
.wrap.wrap.scroll .links a {
  color: var(--black);
}
.wrap.scroll path {
  stroke: var(--black);
}
.top {
  background: rgba(255, 255, 255, 0.08);
  padding: 10px 0;
  transition: 0.3s;
}
.wrap.scroll .top {
  border-bottom: 1px solid #ebebeb;
  background: white;
}
.wrap.scroll .top p,
.wrap.scroll .top a {
  color: var(--black);
}
.top .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top .left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.top .right {
  display: flex;
  align-items: center;
  gap: 48px;
}
.bottom {
  padding: 32px 0;
}
.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom .right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.links {
  display: flex;
  align-items: center;
  gap: 48px;
  margin: 0;
  border-right: 1px solid #ffffff3d;
  padding-right: 40px;
}
.top .right a,
.top .left p {
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  font-family: var(--meduim);
  color: white;
}
.links a,
.links button {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  font-family: var(--decor-medium);
  color: white;
  text-transform: uppercase;
  transition: 0.4s;
  position: relative;
}
.links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--yellow);
  transition: 0.4s;
}
.top .right a:hover {
  text-decoration: none;
}
.lang .current {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  font-family: var(--decor-bold);
  text-transform: uppercase;
  color: var(--yellow);
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}
.links a:hover {
  text-decoration: none;
  color: var(--yellow);
}
.links a:hover::after {
  width: 100%;
}
.dropper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dropper path {
  transition: 0.4s;
}
.dropper:hover svg path {
  stroke: var(--yellow) !important;
}
.lang,
.caller {
  position: relative;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: -50%;
  border: 1px solid #f5f5f7;
  box-shadow: 0px 8px 32px -8px rgba(8, 54, 97, 0.08);
  border-radius: 16px;
  background: white;
  opacity: 0;
  visibility: hidden;
  /* transform: translateY(-100%); */
  pointer-events: none;
  transition: 0.4s;
  min-width: 200px;
}
.caller:hover .dropdown,
.lang:hover .dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  transform: translateY(0);
}
.dropdown button,
.dropdown a {
  padding: 8px 16px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  z-index: 9999;
}
.lang .dropdown {
  min-width: unset;
}
.dropdown ul {
  margin: 0;
}
.dropdown button,
.dropdown a {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--decor-medium);
  color: #9a999b;
  transition: 0.4s;
  text-transform: uppercase;
}
.dropdown li:last-child button,
.dropdown li:last-child a {
  border-bottom: none;
}
.dropdown button::after,
.dropdown a::after {
  display: none;
}
.dropdown button:hover,
.dropdown a:hover {
  color: var(--yellow);
  text-decoration: none;
}
.caller a::after {
  display: none;
}
.brand-black {
  display: none;
}
.brand {
  display: flex;
}
.wrap.scroll .brand-black {
  display: flex;
}
.wrap.scroll .brand {
  display: none;
}
.dropdown button.disable {
  display: none;
}
.wrap.scroll .links button {
  color: var(--black);
}
.langer button {
  border: none;
}
@media screen and (max-width: 1600px) {
  .links {
    gap: 24px;
    padding-right: 24px;
  }
  .bottom {
    padding: 20px 0;
  }
  .links a,
  .links .dropper,
  .lang .current {
    font-size: 16px;
  }
  .bottom .right {
    gap: 24px;
  }
  .dropdown {
    left: -100%;
  }
}
@media screen and (max-width: 1200px) {
  .wrap {
    display: none;
  }
}
</style>
