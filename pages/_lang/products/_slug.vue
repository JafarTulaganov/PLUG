<template>
  <div class="master">
    <SiteTop :title="category.name" />
    <ProductsAbout :category="category" />
    <ProductsGrid
      :categories="categories"
      :category="category"
      :services="services"
    />
  </div>
</template>

<script>
import categoriesApi from '@/api/categories'
import servicesApi from '@/api/services'

import SiteTop from '@/components/SiteTop.vue'
import ProductsAbout from '@/components/ProductsPage/ProductsAbout'
import ProductsGrid from '@/components/ProductsPage/ProductsGrid'

export default {
  components: {
    SiteTop,
    ProductsAbout,
    ProductsGrid,
  },

  async asyncData({ params, $axios }) {
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const category = await categoriesApi.getCategory(
      params.slug,
      $axios,
      params.lang
    )
    const services = await servicesApi.getServices($axios, params.lang)

    return {
      categories,
      category,
      services,
    }
  },
}
</script>

<style scoped>
.master {
  padding: 0px 0 200px 0;
}
@media screen and (max-width: 1024px) {
  .master {
    padding: 0 0 120px 0;
  }
}
</style>
