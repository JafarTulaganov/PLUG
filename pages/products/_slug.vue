<template>
  <div class="master">
    <SiteTop :title="category.name" />
    <ProductsAbout :category="category" />
    <ProductsGrid :categories="categories" :category="category" :services="services" />
  </div>
</template>

<script>
import categoriesApi from "@/api/categories";
import servicesApi from "@/api/services";

import SiteTop from "@/components/SiteTop.vue";
import ProductsAbout from "@/components/ProductsPage/ProductsAbout";
import ProductsGrid from "@/components/ProductsPage/ProductsGrid";

export default {
  components: {
    SiteTop,
    ProductsAbout,
    ProductsGrid,
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category?.desc,
        },
        { hid: "og:title", property: "og:title", content: this.category?.name },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://pga.uz" + this.$route.fullPath,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.category?.desc,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.category?.image,
        },
      ],
    };
  },

  async asyncData({ params, $axios, query, i18n, error }) {
    try {
      const categories = await categoriesApi.getCategories($axios, {
        ...query,
        headers: {
          language: i18n.locale,
        },
      });
      const category = await categoriesApi.getCategory(params.slug, $axios, {
        ...query,
        headers: {
          language: i18n.locale,
        },
      });
      const services = await servicesApi.getServices($axios, {
        ...query,
        headers: {
          language: i18n.locale,
        },
      });

      return {
        categories,
        category,
        services,
      };
    } catch (e) {
      error({
        statusCode: e.response.status,
        message: "This page could not be found",
        layout: "error", // Указываем layout для ошибок
      });
    }
  },
};
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
