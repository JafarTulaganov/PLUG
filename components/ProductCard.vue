<template>
  <div class="cardo">
    <NuxtLink to="/products/slug">
      <div class="img">
        <img
          :title="$store.state.translations['main.title-span']"
          src="@/assets/img/product-5.svg"
          :alt="$store.state.translations['main.title-span']"
          class="pic"
          loading="lazy"
        />
      </div>
      <div class="content">
        <h4 class="name">PE pipes for water supply</h4>
        <p class="category">шаровый кран</p>
        <p class="txt">
          Ease of mounting a polyethylene pipeline is possible due to the
          variety and functionality of HDPE fittings.
        </p>
        <p class="more">Подробнее <i class="bx bx-right-arrow-alt"></i></p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cardo {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  overflow: hidden;
}
.img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.pic {
  width: 279px;
  height: 279px;
  object-fit: cover;
  border-radius: 50%;
}
.name {
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
  font-family: var(--medium);
  margin-bottom: 8px;
  transition: 0.4s;
}
.category {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: var(--light);
  padding: 4px 12px;
  background: #f5f5f7;
  border-radius: 35px;
  display: inline-flex;
  margin-bottom: 20px;
}
.txt {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: var(--light);
  max-width: 90%;
}
.section__title {
  margin-bottom: 24px;
}
.more {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: var(--black);
  margin-top: 20px;
  position: relative;
  display: inline-flex;
  transition: 0.8s;
  transform: translateY(40px);
  align-items: center;
  gap: 4px;
}
.more::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--yellow);
}
.cardo a:hover {
  text-decoration: none;
}
.content {
  transition: 0.6s;
  transform: translateY(40px);
}
.pic {
  transition: 0.4s;
  transform: translateY(12px);
}
.cardo:hover .pic {
  border-radius: 16px;
  transform: translateY(0);
  width: 100%;
}
.cardo:hover .content,
.cardo:hover .more {
  transform: translateY(0);
}
.cardo:hover .name {
  color: var(--yellow);
}
</style>
