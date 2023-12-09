<template>
  <div class="master">
    <SiteTop :title="product.name" />
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

  async asyncData({ params, $axios }) {
    const product = await productsApi.getProduct(
      params.slug,
      $axios,
      params.lang
    )
    const info = await infoApi.getInfo($axios, params.lang)

    return {
      product,
      info,
    }
  },
}
</script>

<style></style>
