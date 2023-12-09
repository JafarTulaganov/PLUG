<template>
  <div class="wrap">
    <div v-if="error.statusCode === 404">
      <h1 class="title">404</h1>
    </div>
    <div v-else>
      <h1 class="title">500</h1>
    </div>
    <img src="@/assets/img/pipes.webp" class="pic" title="404" alt="404" />
    <NuxtLink class="link" :to="localePath('/')"
      >Главная страница
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M10.0039 5.57001L16.4339 12L10.0039 18.43"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        /></svg
    ></NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty',
}
</script>

<style scoped>
.wrap {
  background: var(
    --Blue-linear,
    linear-gradient(94deg, #083661 3.94%, #0657a3 103.12%)
  );
  height: 100vh;
  position: relative;
}
.pic {
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
}
.title {
  font-size: 400px;
  font-weight: 700;
  line-height: 100%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    180deg,
    #fff 40.3%,
    rgba(255, 255, 255, 0) 150.75%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 18.2px */
  text-transform: uppercase;
  border-radius: 40px;
  background: var(--PGA-orange, #ffa206);
  padding: 12px 24px;
  position: absolute;
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 315px;
  transition: 0.4s;
}
.link:hover {
  text-decoration: none;
  background: var(--black);
}
@media screen and (max-width: 1024px) {
  .title {
    top: 40%;
    font-size: 200px;
  }
  .pic {
    height: 70%;
    object-fit: cover;
  }
}
</style>
