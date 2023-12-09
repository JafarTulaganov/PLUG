<template>
  <div class="wrap">
    <img
      :title="$store.state.translations['main.title-span']"
      src="@/assets/img/hero-mask.svg"
      :alt="$store.state.translations['main.title-span']"
      class="mask"
      loading="lazy"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12 left">
          <div class="content">
            <h1 class="title">
              <span class="yellow">{{
                $store.state.translations['main.title-span']
              }}</span>
              {{ $store.state.translations['main.title-rest'] }}
            </h1>
            <p class="sub">
              {{ $store.state.translations['main.sub'] }}
            </p>
            <NuxtLink :to="localePath('/about')">
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
          </div>

          <div class="items">
            <div class="item">
              <div class="img">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/hero-logo2.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="logo"
                  loading="lazy"
                />
              </div>
              <p class="txt">
                {{ $store.state.translations['main.hero-txt-1'] }}
              </p>
            </div>
            <div class="item">
              <div class="img">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/hero-logo.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="logo"
                  loading="lazy"
                />
              </div>
              <p class="txt">
                {{ $store.state.translations['main.hero-txt-2'] }}
              </p>
            </div>
            <div class="item">
              <div class="img">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/hero-logo3.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="logo"
                  loading="lazy"
                />
              </div>
              <p class="txt">
                {{ $store.state.translations['main.hero-txt-3'] }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12 right">
          <img
            :title="$store.state.translations['main.title-span']"
            src="@/assets/img/hero.webp"
            :alt="$store.state.translations['main.title-span']"
            class="big"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style scoped>
.wrap {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  min-height: 80vh;
  overflow: hidden;
}
.container,
.row {
  min-height: 90vh;
  height: 100%;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mask {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.title {
  font-weight: 700;
  font-size: 72px;
  line-height: 112%;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  color: white;
}
.yellow {
  color: var(--yellow);
}
.sub {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #b4c4d3;
  margin-bottom: 48px;
}
.left a {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-medium);
  display: inline-flex;
  color: white;
  padding: 14px 24px;
  border: 1px solid white;
  width: 100%;
  min-width: 180px;
  max-width: 30%;
  border-radius: 40px;
  justify-content: center;
  gap: 16px;
  align-items: center;
  transition: 0.4s;
}
.left a:hover {
  transform: scale(0.95);
}
.left a:hover {
  text-decoration: none;
}
.left svg {
  transform: rotate(-90deg);
  transition: 0.4s;
}
.left svg path {
  stroke: var(--yellow);
}
.left a:hover svg {
  transform: rotate(-90deg) translateY(4px);
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.right img {
  width: 900px;
  max-width: unset;
  transform: translateX(-5px);
}
.container {
  position: relative;
}
.items {
  position: absolute;
  bottom: 72px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 28px;
  width: 1100px;
}
.item {
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 1px solid #e6e6e61f;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: white;
}
.item:last-child {
  border-right: 0;
}
.item img {
  width: 80px;
  object-fit: contain;
}
.content {
  margin-top: -30px;
}
@media screen and (max-width: 1600px) {
  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 112%;
    text-transform: uppercase;
  }
  .items {
    flex-wrap: wrap;
    gap: 12px;
  }
  .item {
    border: none;
  }
  .right img {
    width: 700px;
  }
}
@media screen and (max-width: 1600px) {
  .row {
    height: 100vh;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 6px;
    bottom: 32px;
  }
  .content {
    margin-top: -100px;
  }
  .item img {
    width: 50px;
  }
  .sub {
    margin-bottom: 24px;
  }
  .title {
    font-size: 40px;
  }
  .left a {
    font-size: 16px;
    min-width: 260px;
  }
}
@media screen and (max-width: 1200px) {
  .title {
    font-size: 32px;
    font-weight: 700;
    line-height: 112%;
    text-transform: uppercase;
  }
  .big {
    width: 400px !important;
    position: absolute;
    bottom: 0;
    object-fit: cover;
    transform: scale(1.3) !important;
  }
  .txt {
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
    position: static;
  }
  .item {
    border: none;
  }
  .container,
  .row {
    min-height: 100vh;
  }
  .sub {
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 40px;
  }
  .left a {
    display: flex;
    max-width: 100%;
    margin-bottom: 24px;
  }
  .left {
    padding-top: 56px;
  }
}
@media screen and (max-width: 1024px) {
  .item img {
    width: 40px;
  }
  .item .txt,
  .sub {
    font-size: 14px;
  }
  .big {
    height: 500px;
    width: 100% !important;
    object-fit: contain;
  }
  .left {
    transform: translateY(100px);
  }
}
</style>
