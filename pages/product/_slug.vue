<template>
  <div class="master">
    <SiteTop :title="product.name" :product="product" />
    <ProductFace :info="info" :product="product" />
    <ProductBody :product="product" />
    <div v-show="product.other_products != 0">
      <ProductOther :product="product" />
    </div>
  </div>
</template>

<script>
import productsApi from '@/api/products'
import infoApi from '@/api/info'

import SiteTop from '@/components/SiteTop.vue'
import ProductFace from '@/components/ProductPage/ProductFace.vue'
import ProductBody from '@/components/ProductPage/ProductBody.vue'
import ProductOther from '@/components/ProductPage/ProductOther.vue'

export default {
  components: {
    SiteTop,
    ProductFace,
    ProductBody,
    ProductOther,
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.desc.replace(/(<([^>]+)>)/gi, ''),
        },
        { hid: 'og:title', property: 'og:title', content: this.product.name },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pga.uz' + this.$route.fullPath,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.desc.replace(/(<([^>]+)>)/gi, ''),
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.images[0].image,
        },
      ],
    }
  },

  mounted() {},

  async asyncData({ params, $axios, query, i18n, error }) {
    try {
      const product = await productsApi.getProduct(params.slug, $axios, {
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
        product,
        info,
      }
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: 'This page could not be found',
        layout: 'error', // Указываем layout для ошибок
      })
    }
  },
}
</script>

<style></style>
