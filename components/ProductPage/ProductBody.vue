<template>
  <div class="wrap" itemscope itemtype="https://schema.org/Product">
    <div class="container">
      <div class="header">
        <button
          :class="{ active: specsHandle }"
          type="button"
          @click=";(specsHandle = true), (descHandle = false)"
        >
          {{ $store.state.translations['inner.specs'] }}
        </button>
        <button
          :class="{ active: descHandle }"
          type="button"
          @click=";(specsHandle = false), (descHandle = true)"
        >
          {{ $store.state.translations['inner.desc'] }}
        </button>
      </div>
      <div class="body">
        <div :class="{ show: specsHandle }" class="specs">
          <div
            v-for="spec in product.specification"
            :key="spec.id"
            class="spec"
          >
            <div class="question">
              <div class="twice">
                <img
                  :title="$store.state.translations['main.title-span']"
                  :src="spec.specification.image"
                  :alt="$store.state.translations['main.title-span']"
                  class="icon"
                  loading="lazy"
                />
              </div>
              <p>{{ spec.specification.name }}</p>
            </div>
            <div class="line"></div>
            <div class="answer">
              <p>{{ spec.value }}</p>
            </div>
          </div>
        </div>
        <div :class="{ show: descHandle }" class="description">
          <div class="carti" v-html="product.desc" itemprop="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specsHandle: true,
      descHandle: false,
    }
  },

  props: ['product'],
}
</script>

<style scoped>
.wrap {
  min-height: 400px;
  padding-bottom: 120px;
}
.specs {
  max-width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
  row-gap: 24px;
}
.spec {
  display: flex;
  align-items: center;
  width: 100%;
}
.line {
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  height: 100%;
}
.question {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
  padding-right: 50px;
  background: white;
  position: relative;
  z-index: 3;
  white-space: nowrap;
}
.icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
.answer {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
  padding-left: 16px;
  background: white;
  position: relative;
  z-index: 3;
  white-space: nowrap;
}
.header {
  display: flex;
  align-items: center;
  gap: 95px;
  margin-bottom: 48px;
}
.header button {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  position: relative;
}
.header button::after {
  width: 100%;
  height: 2px;
  background: var(--yellow);
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  display: none;
}
.description {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  max-width: 1144px;
}
.specs,
.description {
  display: none;
}
.specs.show,
.description.show {
  display: grid;
}
.header button.active {
  color: var(--yellow);
}
.header button.active::after {
  display: block;
}

.twice {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5f3ff;
}

.carti::v-deep p,
.carti::v-deep span {
  margin-bottom: 24px;
  color: #5d5d5f;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.carti::v-deep ul {
  padding-left: 24px;
}
.carti::v-deep li {
  list-style: disc;
  color: #5d5d5f;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 12px;
}
.carti::v-deep h1,
.carti::v-deep h2,
.carti::v-deep h3,
.carti::v-deep h4 {
  font-family: var(--decor-bold);
  margin-bottom: 24px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.carti::v-deep td {
  padding: 4px 24px 4px 0;
  margin-bottom: 24px;
  color: #5d5d5f;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
@media screen and (max-width: 1024px) {
  .header {
    gap: 0;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto 28px auto;
  }
  .header button {
    font-size: 18px;
  }
  .header button::after {
    bottom: 0;
  }
  .specs {
    grid-template-columns: repeat(1, 1fr);
    max-width: 100%;
    gap: 16px;
  }
  .question {
    padding-right: 12px;
    font-size: 18px;
  }
  .answer {
    font-size: 18px;
  }
  .all {
    margin-bottom: 24px;
  }
  .price {
    width: 100%;
  }
  .wrap {
    padding-bottom: 64px;
  }
  .description {
    font-size: 18px;
    line-height: 160%;
  }
}
</style>
