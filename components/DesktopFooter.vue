<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <div class="brand">
          <NuxtLink :to="localePath('/')">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/brand-full.svg"
              :alt="$store.state.translations['main.title-span']"
              loading="lazy"
            />
          </NuxtLink>
        </div>
        <p class="about">
          {{ $store.state.translations['about.about-1'] }}
        </p>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.social'] }}</p>
          <div class="socials">
            <a
              :href="`${info.youtube}`"
              target="_blank"
              class="soc"
              rel="nofollow"
            >
              <i class="bx bxl-youtube"></i>
            </a>
            <a
              :href="`${info.facebook}`"
              target="_blank"
              class="soc"
              rel="nofollow"
            >
              <i class="bx bxl-facebook-circle"></i>
            </a>
            <a
              :href="`${info.instagram}`"
              target="_blank"
              class="soc"
              rel="nofollow"
            >
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a
              :href="`${info.telegram}`"
              target="_blank"
              class="soc"
              rel="nofollow"
            >
              <i class="bx bxl-telegram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-xs-12">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')" class="link">
                {{ $store.state.translations['main.home'] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')" class="link">
                {{ $store.state.translations['main.about'] }}
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink :to="`/${$route.params.lang}/reviews`" class="link">
                {{ $store.state.translations['main.reviews'] }}
              </NuxtLink>
            </li> -->
            <li>
              <NuxtLink :to="localePath('/media')" class="link">
                {{ $store.state.translations['main.media'] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')" class="link">
                {{ $store.state.translations['main.contacts'] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-lg7 col-xs-12">
          <div class="contacts">
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.number'] }}</p>
              <a :href="`tel:${info.nbm}`" class="txt"> {{ info.nbm }} </a>
            </div>
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.email'] }}</p>
              <a :href="`mailto:${info.email}`" class="txt">
                {{ info.email }}
              </a>
            </div>
            <div class="item">
              <p class="sup">{{ $store.state.translations['main.address'] }}</p>
              <p class="txt">{{ info.adres }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="left">
          <p class="copy">
            {{ $store.state.translations['main.footer-info'] }}
          </p>
          <p class="num">{{ $store.state.translations['main.inn'] }}</p>
          <p class="num">{{ $store.state.translations['main.kpp'] }}</p>
          <p class="num">{{ $store.state.translations['main.ogrn'] }}</p>
        </div>
        <p class="by">
          {{ $store.state.translations['main.by'] }}
          <a href="#" target="_blank" class="yellow">{{
            $store.state.translations['main.developer']
          }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from '@/api/info.js'
export default {
  data() {
    return {
      info: {},
    }
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$i18n.locale
    },
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios, {
      headers: {
        language: this.$i18n.locale,
      },
    })

    this.info = info
  },

  watch: {
    async currentLang(val) {
      const info = await infoApi.getInfo(this.$axios, {
        headers: {
          language: this.$i18n.locale,
        },
      })

      this.info = info
    },
  },
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}
.wrap {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  border-radius: 32px 32px 0px 0px;
  margin-top: -50px;
  padding: 56px 0 24px 0;
  color: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  width: 100%;
}
.code {
  background: rgba(255, 255, 255, 0.16);
  border-top: 1px solid rgba(255, 255, 255, 0.56);
  backdrop-filter: blur(32px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  max-width: 414px;
}
.title {
  font-weight: 500;
  font-size: 22px;
  line-height: 110%;
  margin-bottom: 16px;
  font-family: var(--decor-medium);
  text-transform: uppercase;
}

.row ul a {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #c2c2c3;
}
.hours {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  padding-bottom: 20px;
  border-bottom: 1px solid #5d5d5f;
  margin-bottom: 24px;
}
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border-bottom: 1px solid #5d5d5f;
  padding-bottom: 24px;
}
.sup {
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 8px;
  white-space: nowrap;
}
.txt {
  color: var(--White, #fff);
  font-family: var(--decor-medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  white-space: nowrap;
}
.socials {
  display: flex;
  align-items: center;
  gap: 44px;
}
.soc {
  font-size: 28px;
  color: white;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  gap: 40px;
}
.copy {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #c2c2c3;
}
.contacts {
  display: flex;
  gap: 48px;
  align-items: center;
  padding-right: 16px;
}
.row {
  align-items: center;
  justify-content: space-between;
}
.contacts .item:last-child {
  grid-column: 1 / 3;
}
.links {
  display: flex;
  align-items: center;
  gap: 64px;
  margin: 0;
}
.row {
  margin-bottom: 48px;
}
@media screen and (max-width: 1600px) {
  .txt {
    font-size: 15px;
    white-space: initial;
  }
  .links {
    gap: 32px;
  }
  .contacts {
    gap: 24px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    margin-top: 0;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
  .brand {
    width: 120px;
  }
  .row {
    gap: 48px;
  }
  .items,
  .left,
  .bottom {
    gap: 24px;
    align-items: flex-start;
    flex-direction: column;
  }
  .contacts {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
    padding: 0 16px;
  }
  .contacts .item[data-v-9fd6afe8]:last-child {
    grid-column: initial;
  }
  .links {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
