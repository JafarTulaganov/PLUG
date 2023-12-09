<template>
  <div class="wrapper">
    <DesktopNavbar class="desktop" />
    <MobileNavbar class="mobile" />
    <main>
      <Nuxt />
    </main>
    <div @click="scrollToTop()" id="up" class="up">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.48207 17L15.5179 17C17.0615 17 18.0233 15.3256 17.2455 13.9923L13.7276 7.96153C12.9558 6.63852 11.0442 6.63852 10.2724 7.96153L6.75452 13.9923C5.97675 15.3256 6.93849 17 8.48207 17Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <DesktopFooter />
    <div class="confirm">
      <p>Я соглашаюсь с обработкой личных данных</p>
      <button @click="closeConfirm()">OK</button>
    </div>
  </div>
</template>

<script>
import translationsApi from '@/api/translations'

import DesktopNavbar from '@/components/DesktopNavbar'
import MobileNavbar from '@/components/MobileNavbar'
import DesktopFooter from '@/components/DesktopFooter'

export default {
  name: 'DefaultLayout',
  components: {
    DesktopNavbar,
    DesktopFooter,
    MobileNavbar,
  },

  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        myAttribute: 'My Value',
        ...i18nHead.htmlAttrs,
      },
      link: [...i18nHead.link],
    }
  },

  data() {
    return {
      translations: [],
    }
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    })

    await this.$store.commit('getTranslations', translations.data)
  },

  computed: {
    currentLang() {
      return this.$i18n.locale
    },
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      })

      await this.$store.commit('getTranslations', translations.data)
    },
  },

  mounted() {
    this.$store.commit('reloadStore')

    const modal = document.querySelector('.confirm')

    if (localStorage.getItem('confirmHandle')) {
      modal.classList.add('hide')
    }

    function scrollUp() {
      const navbar = document.getElementById('up')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll')
      } else {
        navbar.classList.remove('scroll')
      }
    }
    window.addEventListener('scroll', scrollUp)
  },

  methods: {
    closeConfirm() {
      const modal = document.querySelector('.confirm')
      localStorage.setItem('confirmHandle', true)

      if (localStorage.getItem('confirmHandle')) {
        modal.classList.add('hide')
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}
main {
  flex: 1 1 auto;
}
.mobile {
  display: none;
}
.up {
  position: fixed;
  inset: auto 20px 110px auto;
  width: 70px;
  height: 70px;
  z-index: 99;
  transition: 0.2s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.up.scroll {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.up button {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.up svg {
  width: 40px;
  height: 40px;
}
.confirm {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 24px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
}
.confirm.hide {
  transform: translateY(100%);
}
.confirm p {
  font-size: 24px;
}
.confirm button {
  font-size: 18px;
  background: var(--blue);
  display: inline-flex;
  width: 100px;
  border-radius: 4px;
  justify-content: center;
  padding: 8px 0;
  color: white;
}
body::after {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
@media screen and (max-width: 1024px) {
  .mobile {
    display: block;
  }
}
</style>
