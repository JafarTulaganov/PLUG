<template>
  <div class="item">
    <NuxtLink to="/news/slug">
      <div class="img">
        <img
          :title="$store.state.translations['main.title-span']"
          src="@/assets/img/news-1.svg"
          :alt="$store.state.translations['main.title-span']"
          loading="lazy"
        />
      </div>
      <div class="content">
        <div class="texter">
          <p class="name">What Will Website Be Like In 100 Years?</p>
          <p class="sub">
            Nikko is just north of Tokyo and is the perfect escape from the busy
            district, where you can enjoy lush greenery and the most beautiful
            and well-preserved shrines and temples you’ll ever see...
          </p>
        </div>
        <div class="flexer">
          <p class="date">13 февраля 2023</p>
          <p class="link">
            Read more
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
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.item {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 24px;
}
.item a {
  grid-template-columns: 3fr 7fr;
  display: grid;
}
.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  transition: 0.4s;
}
.img {
  overflow: hidden;
}
.name {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  font-family: var(--medium);
  color: var(--black);
  max-width: 70%;
  transition: 0.4s;
  margin-bottom: 16px;
}
.flexer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9a999b;
}
.link {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: var(--yellow);
  display: flex;
  align-items: center;
  gap: 16px;
}
.sub {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
}
.link svg {
  transform: rotate(-90deg);
}
.link path {
  stroke: var(--yellow);
}
.item a:hover {
  text-decoration: none;
}
.item:hover img {
  transform: scale(1.1);
}
.item:hover .name {
  color: var(--yellow);
}
</style>
