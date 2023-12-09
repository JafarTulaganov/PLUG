<template>
  <div>
    <HomeHero />
    <HomeBenefits />
    <HomeAbout :info="info" />
    <HomeCatalog :info="info" :categories="categories" />
    <HomeProducts :categories="categories" :products="products" />
    <!-- <HomeReviews :reviews="reviews" /> -->
    <MyWorld class="myWorld" />
    <HomeContact />
    <HomePartners :partners="partners" />
    <HomeNews :news="news" />
    <HomeCertificates :certificates="certificates" />
    <!-- <HomeFAQ :faq="faq" /> -->
    <HomeForm :info="info" />
    <HomeFiles :info="info" />
  </div>
</template>

<script>
import newsApi from '@/api/news.js'
import infoApi from '@/api/info.js'
import faqApi from '@/api/faq.js'
import certificatesApi from '@/api/certificates'
import partnersApi from '@/api/partners.js'
import reviewsApi from '@/api/reviews.js'
import productsApi from '@/api/products'
import categoriesApi from '@/api/categories'

import HomeHero from '@/components/HomePage/HomeHero'
import HomeBenefits from '@/components/HomePage/HomeBenefits'
import HomeAbout from '@/components/HomePage/HomeAbout'
import HomeCatalog from '@/components/HomePage/HomeCatalog'
import HomeProducts from '@/components/HomePage/HomeProducts'
// import HomeReviews from '@/components/HomePage/HomeReviews'
import MyWorld from '@/components/HomePage/MyWorld'
import HomeContact from '@/components/HomePage/HomeContact'
import HomePartners from '@/components/HomePage/HomePartners'
import HomeNews from '@/components/HomePage/HomeNews'
import HomeCertificates from '@/components/HomePage/HomeCertificates'
// import HomeFAQ from '@/components/HomePage/HomeFAQ'

import HomeForm from '@/components/HomePage/HomeForm'
import HomeFiles from '@/components/HomePage/HomeFiles'

export default {
  name: 'IndexPage',

  data() {
    return {}
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

  components: {
    HomeHero,
    HomeBenefits,
    HomeAbout,
    HomeCatalog,
    HomeProducts,
    // HomeReviews,
    MyWorld,
    HomeContact,
    HomePartners,
    HomeNews,
    HomeCertificates,
    // HomeFAQ,
    HomeForm,
    HomeFiles,
  },

  async asyncData({ $axios, query, i18n }) {
    const news = await newsApi.getNews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const faq = await faqApi.getFaq($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const certificates = await certificatesApi.getCertificates($axios)
    const partners = await partnersApi.getPartners($axios)
    const reviews = await reviewsApi.getReviews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const products = await productsApi.getProducts($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const categories = await categoriesApi.getCategories($axios, {
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
      faq,
      certificates,
      partners,
      reviews,
      products,
      categories,
      info,
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .myWorld {
    display: none;
  }
}
</style>
