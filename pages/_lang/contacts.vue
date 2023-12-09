<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.contacts']" />
    <ContactsMap :info="info" />
    <HomeReviews :reviews="reviews" />
    <HomeCertificates :certificates="certificates" />
  </div>
</template>

<script>
import certificatesApi from '@/api/certificates'
import reviewsApi from '@/api/reviews.js'
import infoApi from '@/api/info.js'

import SiteTop from '@/components/SiteTop'
import ContactsMap from '@/components/ContactsPage/ContactsMap'
import HomeReviews from '@/components/HomePage/HomeReviews'
import HomeCertificates from '@/components/HomePage/HomeCertificates'

export default {
  components: {
    SiteTop,
    ContactsMap,
    HomeReviews,
    HomeCertificates,
  },

  async asyncData({ $axios, params }) {
    const certificates = await certificatesApi.getCertificates($axios)
    const reviews = await reviewsApi.getReviews($axios, params.lang)
    const info = await infoApi.getInfo($axios, params.lang)

    return {
      certificates,
      reviews,
      info,
    }
  },
}
</script>

<style scoped>
.master {
  padding-bottom: 200px;
}
@media screen and (max-width: 1024px) {
  .master {
    padding-bottom: 100px;
  }
}
</style>
