<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 left">
          <div class="content">
            <h2 class="section__title">
              {{ $store.state.translations['main.adv-title'] }}
              <span class="blue">{{
                $store.state.translations['main.title-span']
              }}</span>
            </h2>
            <p class="txt">
              {{ $store.state.translations['main.adv-txt-1'] }}
            </p>
            <!-- <p class="txt">
              {{ $store.state.translations['main.adv-txt-2'] }}
            </p> -->
            <div class="items">
              <div class="item">
                <p class="num">
                  {{ $store.state.translations['main.adv-num-1'] }}
                </p>
                <p class="sub">
                  {{ $store.state.translations['main.hero-txt-1'] }}
                </p>
              </div>
              <div class="item">
                <p class="num">
                  {{ $store.state.translations['main.adv-num-2'] }}
                </p>
                <p class="sub">
                  {{ $store.state.translations['main.hero-txt-2'] }}
                </p>
              </div>
              <div class="item">
                <p class="num">
                  {{ $store.state.translations['main.adv-num-3'] }}
                </p>
                <p class="sub">
                  {{ $store.state.translations['about.about-4'] }}
                </p>
              </div>
            </div>
            <div class="flexer">
              <NuxtLink class="more" :to="localePath('/about')">
                {{ $store.state.translations['main.more'] }}
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4163 0.791016L7.99967 7.20768L1.58301 0.791016"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
              <a v-if="info.telegram" :href="info.telegram" class="tel">{{
                $store.state.translations['main.contact-manager']
              }}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-xs-12 right">
          <div class="wrep">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/img-home-1.webp"
              loading="lazy"
              :alt="$store.state.translations['main.title-span']"
              class="pipe"
            />
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/brand-color.svg"
              :alt="$store.state.translations['main.title-span']"
              class="brand"
            />
            <div class="bottom">
              <div class="element">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/medal.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="icon"
                  loading="lazy"
                />
                <p class="name">
                  {{ $store.state.translations['main.adv-elem-1'] }}
                </p>
              </div>
              <div class="element">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/layers.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="icon"
                  loading="lazy"
                />
                <p class="name">
                  {{ $store.state.translations['main.adv-elem-2'] }}
                </p>
              </div>
              <div class="element">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/archive.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="icon"
                  loading="lazy"
                />
                <p class="name">
                  {{ $store.state.translations['main.adv-elem-3'] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
}
</script>

<style scoped>
.wrap {
  padding-bottom: 144px;
}
.section__title {
  margin-bottom: 24px;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 24px;
  display: block;
  max-width: 90%;
  color: #5d5d5f;
}
.items {
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  margin: 40px 0;
}
.fat {
  font-family: var(--medium);
  color: var(--black);
}
.num {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  margin-bottom: 8px;
}
.sub {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #5d5d5f;
  font-family: var(--medium);
  max-width: 90%;
}
.more {
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  padding: 14px 24px;
  border-radius: 40px;
  border: 1px solid var(--yellow);
  color: var(--yellow);
  font-family: var(--decor-medium);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: 0.4s;
}
.more svg {
  transform: rotate(-90deg);
}
.more path {
  stroke: var(--yellow);
  transition: 0.4s;
}
.flexer {
  display: flex;
  align-items: center;
  gap: 56px;
}
.right .wrep {
  border-radius: 32px;
  background: #f5f5f7;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.pipe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.brand {
  margin: 40px;
  width: 45px;
  object-fit: contain;
  position: relative;
  z-index: 2;
}
.bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  z-index: 2;
}
.element {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 32px 16px;
  background: #004a8f;
}
.element:last-child {
  border: none;
}
.name {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  font-family: var(--medium);
  color: white;
}
.tel {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  color: var(--black);
  transition: 0.4s;
}
.tel:hover {
  text-decoration: none;
  color: var(--blue);
}
.more:hover {
  background: var(--yellow);
  color: white;
  text-decoration: none;
}
.more:hover path {
  stroke: white;
}
.left,
.right {
  cursor: auto;
}
@media screen and (max-width: 1500px) {
  .element {
    gap: 8px;
    padding: 12px;
  }
  .name {
    font-size: 16px;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    gap: 12px;
  }
}
@media screen and (max-width: 1200px) {
  .wrap {
    padding-bottom: 64px;
  }
  .section__title {
    font-size: 32px;
  }
  .txt {
    font-size: 18px;
    line-height: 140%;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: flex-start;
  }
  .num {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 18px;
  }
  .flexer {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
  .more {
    width: 100%;
    max-width: 100%;
    text-align: center;
    justify-content: center;
  }
  .wrep {
    border-radius: 24px;
    overflow: hidden;
    min-height: 500px;
  }
  .brand {
    margin: 16px;
    width: 40px;
  }
  .pipe {
    transform: translateX(-50%) scale(1.7);
    top: 50px;
    left: 40%;
  }
  .bottom {
    grid-template-columns: repeat(1, 1fr);
    padding: 8px;
    gap: 16px;
    background: var(--black);
  }
  .element {
    justify-content: flex-start;
    padding: 0;
    gap: 4px;
    border: none;
    background: none;
  }
  .name {
    font-size: 14px;
  }
}
</style>
