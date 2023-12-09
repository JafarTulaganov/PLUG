<template>
  <div class="wrap">
    <div class="container">
      <h2 class="section__title">
        {{ $store.state.translations['main.about-title'] }}
        <span class="blue">
          {{ $store.state.translations['main.title-span'] }}</span
        >
      </h2>
      <div class="items">
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/check-circle.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-1'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/donation.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-2'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/fast-delivery.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-3'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/warehouse.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-4'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/clock-circle.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-5'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/sort-circle.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-6'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/wave.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-7'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/logo/icons/folder.svg"
              :alt="$store.state.translations['main.title-span']"
              class="icon"
              loading="lazy"
            />
            <p class="txt">
              {{ $store.state.translations['main.about-txt-8'] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--border);
  border-radius: 40px;
  overflow: hidden;
}
.wrap {
  padding: 72px 0 120px 0;
}
.section__title {
  text-align: center;
  margin-bottom: 40px;
}
.item {
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
  margin-bottom: -1px;
  margin-right: -1px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 224px;
}
.icon {
  width: 46px;
  object-fit: contain;
}
.txt {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-transform: uppercase;
  font-family: var(--bold);
}
.content {
  position: absolute;
  top: 50%;
  left: 56px;
  transform: translateY(-50%);
  gap: 20px;
  display: flex;
  flex-direction: column;
  max-width: 320px;
}
@media screen and (max-width: 1200px) {
  .wrap {
    padding: 32px 0;
  }
  .section__title {
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 24px;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    border-radius: 20px;
  }
  .item {
    height: auto;
    padding: 16px;
  }
  .content {
    transform: none;
    position: static;
  }
  .txt {
    font-size: 16px;
  }
  .icon {
    width: 40px;
    height: 40px;
  }
}
@media screen and (max-width: 1024px) {
  .txt {
    font-size: 13px;
  }
}
</style>
