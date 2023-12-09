<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.contacts']" />
    <ContactsMap :info="info" />
    <div class="add__info">
      <div class="container">
        <h4 class="section__title">
          {{ $store.state.translations['inner.add_info'] }}
        </h4>

        <div class="items">
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
          <div class="item">
            <p class="sup">
              {{ $store.state.translations['inner.work_time'] }}
            </p>
            <p class="txt">
              {{ info.work_time }}
            </p>
          </div>
          <div class="item">
            <p class="sup">
              {{ $store.state.translations['inner.requisites'] }}
            </p>
            <p class="txt">
              <span> {{ $store.state.translations['main.inn'] }} </span>
            </p>
            <p class="txt">
              <span> {{ $store.state.translations['main.kpp'] }} </span>
            </p>
            <p class="txt">
              <span> {{ $store.state.translations['main.ogrn'] }} </span>
            </p>
          </div>
          <div class="item">
            <p class="sup">
              {{ $store.state.translations['inner.factory_address'] }}
            </p>
            <p class="txt">
              {{ info.adress_of_factory }}
            </p>
          </div>
          <div class="item">
            <p class="sup">
              {{ $store.state.translations['inner.city_phone'] }}
            </p>
            <p class="txt">
              {{ info.city_phone_number }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <HomeCertificates :certificates="certificates" />
  </div>
</template>

<script>
import certificatesApi from '@/api/certificates'
import infoApi from '@/api/info.js'

import SiteTop from '@/components/SiteTop'
import ContactsMap from '@/components/ContactsPage/ContactsMap'
import HomeCertificates from '@/components/HomePage/HomeCertificates'

export default {
  components: {
    SiteTop,
    ContactsMap,
    HomeCertificates,
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

  async asyncData({ $axios, query, i18n }) {
    const certificates = await certificatesApi.getCertificates($axios, {
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
      certificates,
      info,
    }
  },
}
</script>

<style scoped>
.master {
  padding-bottom: 200px;
}
.add__info {
  padding: 64px 0;
}
.sup {
  font-size: 18px;
  margin-bottom: 8px;
  color: #9f9f9f;
}
.txt {
  font-size: 22px;
  color: black;
}
.socials {
  display: flex;
  align-items: center;
  gap: 44px;
}
.soc {
  font-size: 28px;
  color: var(--black);
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 24px;
}
@media screen and (max-width: 1024px) {
  .master {
    padding-bottom: 100px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
