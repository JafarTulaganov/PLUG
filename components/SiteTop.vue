<template>
  <div class="wrap">
    <!-- <img :title="$store.state.translations['main.title-span']"  src="@/assets/img/hero-mask.svg" :alt="$store.state.translations['main.title-span']" class="mask" /> -->
    <div class="container">
      <h4 class="title">{{ title }}</h4>
      <div class="crumbs">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList">
          <li
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
          >
            <NuxtLink itemprop="item" class="last" :to="localePath('/')">
              <span itemprop="name">
                {{ $store.state.translations['main.home'] }}
              </span>
            </NuxtLink>
            <meta itemprop="position" content="1" />
          </li>
          <li>
            <p>/</p>
          </li>
          <li
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
            v-if="category?.parent"
          >
            <NuxtLink
              itemprop="item"
              class="last"
              :to="localePath(`/products/${category?.parent?.slug}`)"
            >
              <span itemprop="name">
                {{ category?.parent.name }}
              </span>
            </NuxtLink>
            <meta itemprop="position" content="2" />
          </li>
          <li v-if="category?.parent">
            <p>/</p>
          </li>

          <li
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
            v-if="product?.category"
          >
            <NuxtLink
              itemprop="item"
              class="last"
              :to="localePath(`/category/${product?.category?.slug}`)"
            >
              <span itemprop="name">{{ product?.category.name }}</span>
            </NuxtLink>
            <meta itemprop="position" content="2" />
          </li>
          <li v-if="product?.category">
            <p>/</p>
          </li>

          <li
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
          >
            <p itemprop="item" class="current">
              <span itemprop="name">
                {{ title }}
              </span>
            </p>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'categories', 'category', 'product'],

  mounted() {},
}
</script>

<style scoped>
.wrap {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  padding: 200px 0 60px 0;
  position: relative;
  color: white;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}
.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  position: relative;
  z-index: 9;
}
.crumbs {
  position: relative;
  z-index: 1;
}
.crumbs ol {
  display: flex;
  align-items: center;
  gap: 8px;
}
.last {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #ffffff72;
}
.current {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 150px 0 52px 0;
  }
  .container {
    gap: 8px;
  }
  .title {
    font-size: 24px;
    margin: 0;
  }
  .current,
  .last {
    font-size: 14px;
    text-align: start;
  }
}
</style>
