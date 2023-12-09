<template>
  <div class="wrap">
    <div class="container">
      <div class="items">
        <div class="item">
          <img
            :title="$store.state.translations['main.title-span']"
            src="@/assets/img/file.svg"
            :alt="$store.state.translations['main.title-span']"
            class="pic"
            loading="lazy"
          />
          <h4 class="name">
            {{ $store.state.translations['main.certificates'] }}
          </h4>
          <a
            :href="info.certificates"
            download
            target="_blank"
            class="download"
          >
            {{ $store.state.translations['main.download'] }}
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 11L10.0858 12.5858C10.8668 13.3668 12.1332 13.3668 12.9142 12.5858L14.5 11M11.5 13V8M21.5 8V15C21.5 17.2091 19.7091 19 17.5 19H5.5C3.29086 19 1.5 17.2091 1.5 15V5C1.5 2.79086 3.29086 1 5.5 1H8.16667C9.03215 1 9.87428 1.28071 10.5667 1.8L12.4333 3.2C13.1257 3.71929 13.9679 4 14.8333 4H17.5C19.7091 4 21.5 5.79086 21.5 8Z"
                stroke="url(#paint0_linear_1159_4728)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_4728"
                  x1="2.34491"
                  y1="1.00001"
                  x2="23.4897"
                  y2="2.71467"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#083661" />
                  <stop offset="1" stop-color="#0657A3" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <div class="item">
          <img
            :title="$store.state.translations['main.title-span']"
            src="@/assets/img/file.svg"
            :alt="$store.state.translations['main.title-span']"
            class="pic"
            loading="lazy"
          />
          <h4 class="name">{{ $store.state.translations['main.catalog'] }}</h4>
          <a :href="info.catalog" download target="_blank" class="download">
            {{ $store.state.translations['main.download'] }}
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 11L10.0858 12.5858C10.8668 13.3668 12.1332 13.3668 12.9142 12.5858L14.5 11M11.5 13V8M21.5 8V15C21.5 17.2091 19.7091 19 17.5 19H5.5C3.29086 19 1.5 17.2091 1.5 15V5C1.5 2.79086 3.29086 1 5.5 1H8.16667C9.03215 1 9.87428 1.28071 10.5667 1.8L12.4333 3.2C13.1257 3.71929 13.9679 4 14.8333 4H17.5C19.7091 4 21.5 5.79086 21.5 8Z"
                stroke="url(#paint0_linear_1159_4728)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_4728"
                  x1="2.34491"
                  y1="1.00001"
                  x2="23.4897"
                  y2="2.71467"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#083661" />
                  <stop offset="1" stop-color="#0657A3" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <div class="item">
          <img
            :title="$store.state.translations['main.title-span']"
            src="@/assets/img/file.svg"
            :alt="$store.state.translations['main.title-span']"
            class="pic"
            loading="lazy"
          />
          <h4 class="name">
            {{ $store.state.translations['main.information'] }}
          </h4>
          <a :href="info.tech_info" download target="_blank" class="download">
            {{ $store.state.translations['main.download'] }}
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 11L10.0858 12.5858C10.8668 13.3668 12.1332 13.3668 12.9142 12.5858L14.5 11M11.5 13V8M21.5 8V15C21.5 17.2091 19.7091 19 17.5 19H5.5C3.29086 19 1.5 17.2091 1.5 15V5C1.5 2.79086 3.29086 1 5.5 1H8.16667C9.03215 1 9.87428 1.28071 10.5667 1.8L12.4333 3.2C13.1257 3.71929 13.9679 4 14.8333 4H17.5C19.7091 4 21.5 5.79086 21.5 8Z"
                stroke="url(#paint0_linear_1159_4728)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1159_4728"
                  x1="2.34491"
                  y1="1.00001"
                  x2="23.4897"
                  y2="2.71467"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#083661" />
                  <stop offset="1" stop-color="#0657A3" />
                </linearGradient>
              </defs>
            </svg>
          </a>
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
  background: #f5f5f7;
  border-radius: 32px 32px 0px 0px;
  padding: 80px 0 170px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
}
.item {
  width: 100%;
  min-height: 226px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 32px;
}
.pic {
  width: 48px;
  height: auto;
  object-fit: contain;
}
.name {
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  min-height: 46px;
}
.download {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(94.17deg, #083661 3.94%, #0657a3 103.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  display: flex;
  align-items: center;
  gap: 8px;
}
.download:hover svg {
  animation: down 4s infinite;
}
@keyframes down {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-4px);
  }
  75% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0 40px 0;
  }
  .items {
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
}
</style>
