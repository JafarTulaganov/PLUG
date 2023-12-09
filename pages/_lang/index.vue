<template>
  <div>
    <HomeHero />
    <HomeBenefits />
    <HomeAbout />
    <HomeCatalog :info="info" :categories="categories" />
    <HomeProducts :categories="categories" :products="products" />
    <HomeReviews :reviews="reviews" />
    <MyWorld />
    <HomeContact />
    <HomePartners :partners="partners" />
    <HomeNews :news="news" />
    <HomeCertificates :certificates="certificates" />
    <HomeFAQ :faq="faq" />
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
import HomeReviews from '@/components/HomePage/HomeReviews'
import MyWorld from '@/components/HomePage/MyWorld'
import HomeContact from '@/components/HomePage/HomeContact'
import HomePartners from '@/components/HomePage/HomePartners'
import HomeNews from '@/components/HomePage/HomeNews'
import HomeCertificates from '@/components/HomePage/HomeCertificates'
import HomeFAQ from '@/components/HomePage/HomeFAQ'
import HomeForm from '@/components/HomePage/HomeForm'
import HomeFiles from '@/components/HomePage/HomeFiles'

export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  components: {
    HomeHero,
    HomeBenefits,
    HomeAbout,
    HomeCatalog,
    HomeProducts,
    HomeReviews,
    MyWorld,
    HomeContact,
    HomePartners,
    HomeNews,
    HomeCertificates,
    HomeFAQ,
    HomeForm,
    HomeFiles,
  },

  async asyncData({ $axios, params }) {
    const news = await newsApi.getNews($axios, params.lang)
    const faq = await faqApi.getFaq($axios, params.lang)
    const certificates = await certificatesApi.getCertificates($axios)
    const partners = await partnersApi.getPartners($axios)
    const reviews = await reviewsApi.getReviews($axios, params.lang)
    const products = await productsApi.getProducts($axios, params.lang)
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const info = await infoApi.getInfo($axios, params.lang)

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
