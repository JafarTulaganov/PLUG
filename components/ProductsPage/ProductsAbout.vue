<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 left">
          <h4 class="title">{{ category.name }}</h4>
          <div v-html="category.desc" class="txt"></div>
        </div>
        <div class="col-lg-7 col-xs-12 right">
          <div class="img">
            <img
              :title="$store.state.translations['main.title-span']"
              :src="category.image"
              :alt="$store.state.translations['main.title-span']"
              class="pic"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
}
</script>

<style scoped>
.wrap {
  padding: 80px 0;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  margin-bottom: 24px;
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
  margin-bottom: 24px;
}
.txt:last-child {
  margin-bottom: 0;
}
.pic {
  width: 100%;
  height: 320px;
  object-fit: contain;
  border-radius: 32px;
  border: 1px solid var(--border);
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 64px 0;
  }
  .title {
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .txt {
    font-size: 18px;
    line-height: 120%;
  }
  .pic {
    height: 214px;
    border-radius: 16px;
    margin-top: 64px;
  }
}
</style>
