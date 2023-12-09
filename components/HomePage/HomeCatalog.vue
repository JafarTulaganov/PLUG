<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <h2 class="section__title">
          {{ $store.state.translations['main.catalog-title'] }}
        </h2>
        <p class="sub">
          {{ $store.state.translations['main.catalog-sub'] }}
        </p>
        <a :href="info.catalog" target="_blank" class="download" download="">
          {{ $store.state.translations['main.download-pdf'] }}
          <i class="bx bxs-file-pdf"></i>
        </a>
      </div>
      <div class="items">
        <div v-for="item in categories" :key="item.id" class="item">
          <div class="top">
            <h3 class="name">{{ item.name }}</h3>
            <div class="specs">
              <div
                v-for="product in item.children"
                :key="product.id"
                class="spec"
              >
                {{ product.name }}
              </div>
            </div>
          </div>
          <div class="bottom">
            <img
              :title="item.name"
              :src="item.image"
              :alt="item.name"
              class="pic"
              loading="lazy"
            />
            <div class="more">
              <NuxtLink :to="localePath(`/products/${item.slug}`)">
                {{ $store.state.translations['main.more'] }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories', 'info'],
}
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
}
.section__title {
  margin-bottom: 16px;
}
.sub {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 24px;
  color: var(--light);
}
.download {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: var(--yellow);
  padding: 8px 24px;
  border-radius: 34px;
  transition: 0.4s;
  border: 1px solid var(--yellow);
  margin-bottom: 24px;
}
.download:hover {
  background: var(--yellow);
  color: white;
  text-decoration: none;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.item {
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px 32px;
  min-height: 493px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.name {
  font-weight: 700;
  font-size: 22px;
  line-height: 140%;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  margin-bottom: 20px;
}
.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.spec {
  background: #f5f5f7;
  border-radius: 84px;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  font-family: var(--medium);
  display: none;
}
.spec:nth-child(1),
.spec:nth-child(2),
.spec:nth-child(3),
.spec:nth-child(4) {
  display: block !important;
}
.pic {
  position: absolute;
  left: -2px;
  bottom: 0;
  width: 234px;
  object-fit: contain;
  height: 180px;
}
.more {
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
}
.more a {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-transform: uppercase;
  color: var(--blue);
  font-family: var(--decor-bold);
  background: white;
  transition: 0.4s;
}
.more a:hover {
  text-decoration: none;
  color: var(--yellow);
}
@media screen and (max-width: 1200px) {
  .wrap {
    padding-bottom: 64px;
  }
  .content {
    width: 100%;
    max-width: 100%;
  }
  .section__title {
    font-size: 31px;
  }
  .sub {
    font-size: 18px;
  }
  .download {
    width: 100%;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .item {
    padding: 16px;
    height: auto;
    min-height: 290px;
    border-radius: 16px;
  }
  .pic {
    position: static;
    border: 1px solid var(--border);
    height: 120px;
    margin: 16px 0;
    border-radius: 8px;
  }
  .name {
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .specs {
    gap: 4px;
    justify-content: center;
  }
  .spec {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 84px;
  }
  .bottom {
    text-align: center;
  }
  .more {
    justify-content: center;
  }
}
</style>
