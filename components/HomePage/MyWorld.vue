<template>
  <div class="world__wrap">
    <div class="brand">
      <img
        :title="$store.state.translations['main.title-span']"
        src="@/assets/img/logo/brand-full.svg"
        :alt="$store.state.translations['main.title-span']"
      />
    </div>
    <div class="world">
      <WorldMap />
    </div>
    <div class="container">
      <div class="cardo">
        <div class="item">
          <div class="img">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/map-2.png"
              :alt="$store.state.translations['main.title-span']"
              loading="lazy"
            />
          </div>
          <div class="content">
            <p class="num">
              {{ $store.state.translations['main.world-num-1'] }}
            </p>
            <p class="sub">
              {{ $store.state.translations['main.world-sub-1'] }}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img
              :title="$store.state.translations['main.title-span']"
              src="@/assets/img/map-1.svg"
              :alt="$store.state.translations['main.title-span']"
              loading="lazy"
            />
          </div>
          <div class="content">
            <p class="num">
              {{ $store.state.translations['main.world-num-2'] }}
            </p>
            <p class="sub">
              {{ $store.state.translations['main.world-sub-2'] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorldMap from '@/components/WorldMap'

export default {
  components: {
    WorldMap,
  },
}
</script>

<style scoped>
@import url('@/assets/css/world.css');
</style>
