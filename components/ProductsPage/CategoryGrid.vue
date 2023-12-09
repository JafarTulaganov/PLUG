<template>
  <div class="totalWrap">
    <div class="wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-xs-12 left">
            <div class="aside">
              <div class="header">
                <h4>{{ $store.state.translations['inner.categories'] }}</h4>
              </div>
              <div class="links">
                <ul>
                  <li v-for="item in category.other_children" :key="item.id">
                    <NuxtLink :to="localePath(`/category/${item.slug}`)">{{
                      item.name
                    }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-xs-12">
            <!-- <div class="filter">
                <h4 class="paragraph">Filter</h4>
                <div class="items">
                  <div class="item">
                    <p class="sup">Pipe diameter</p>
                    <div class="select">
                      <select class="form-select">
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                      </select>
                      <div class="arrow">
                        <i class="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <p class="sup">Pipe diameter</p>
                    <div class="select">
                      <select class="form-select">
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                      </select>
                      <div class="arrow">
                        <i class="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <p class="sup">Pipe diameter</p>
                    <div class="select">
                      <select class="form-select">
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                      </select>
                      <div class="arrow">
                        <i class="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            <div class="grid">
              <div
                v-for="item in category.products"
                :key="item.id"
                class="cardo"
              >
                <NuxtLink :to="localePath(`/product/${item.slug}`)">
                  <div class="img">
                    <img
                      :title="$store.state.translations['main.title-span']"
                      :src="item.image"
                      :alt="$store.state.translations['main.title-span']"
                      class="pic"
                      loading="lazy"
                    />
                  </div>
                  <div class="content">
                    <h4 class="name">{{ item.name }}</h4>
                    <p class="category">{{ category.name }}</p>
                    <p class="txt">
                      {{ item.subtitle }}
                    </p>
                    <p class="more">
                      {{ $store.state.translations['main.more'] }}
                      <i class="bx bx-right-arrow-alt"></i>
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapTwo">
      <div class="container">
        <div class="blue__section">
          <div class="blue__cardo">
            <h4 class="blue__title">
              {{ $store.state.translations['inner.blue-title'] }}
            </h4>
            <p class="blue__txt">
              {{ $store.state.translations['inner.blue-sub'] }}
            </p>
          </div>
        </div>
        <div class="services">
          <h4 class="services__title">
            {{ $store.state.translations['main.services'] }}
          </h4>
          <div class="serv__grid">
            <div v-for="item in services" :key="item.id" class="serv__card">
              <img
                :title="$store.state.translations['main.title-span']"
                :src="item.image"
                :alt="$store.state.translations['main.title-span']"
                class="serv__logo"
                loading="lazy"
              />
              <h4 class="serv__name">{{ item.title }}</h4>
              <p class="serv__txt">
                {{ item.subtitle }}
              </p>
              <div class="serv__link">
                <button>
                  {{ $store.state.translations['inner.submit'] }}
                  <i class="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="advantage">
          <div class="adv__card">
            <h4 class="adv__title">
              {{ $store.state.translations['inner.bottom-title'] }}
            </h4>
            <div class="adv__items">
              <div class="adv__item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/secure.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="secure"
                  loading="lazy"
                />
                <p class="adv__txt">
                  {{ $store.state.translations['inner.bottom-1'] }}
                </p>
              </div>
              <div class="adv__item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/secure.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="secure"
                  loading="lazy"
                />
                <p class="adv__txt">
                  {{ $store.state.translations['inner.bottom-2'] }}
                </p>
              </div>
              <div class="adv__item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/secure.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="secure"
                  loading="lazy"
                />
                <p class="adv__txt">
                  {{ $store.state.translations['inner.bottom-3'] }}
                </p>
              </div>
              <div class="adv__item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  src="@/assets/img/logo/secure.svg"
                  :alt="$store.state.translations['main.title-span']"
                  class="secure"
                  loading="lazy"
                />
                <p class="adv__txt">
                  {{ $store.state.translations['inner.bottom-4'] }}
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
  components: {},

  props: ['categories', 'category', 'services'],

  mounted() {},
}
</script>

<style scoped>
.wrap {
  background: #f5f5f7;
  padding: 80px 0 104px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.aside {
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
}
.aside ul {
  margin: 0;
}
.aside .header,
.aside a {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
}
.aside ul li:last-child a {
  border-bottom: none;
}
.aside h4 {
  margin: 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
}
.aside a {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
  font-family: var(--medium);
  transition: 0.4s;
}
.aside a:hover {
  color: var(--blue);
  text-decoration: none;
}
.left {
  position: relative;
}
.aside {
  position: sticky;
  top: 130px;
}
.filter {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px 40px;
  margin-bottom: 24px;
}
.paragraph {
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  margin-bottom: 8px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}
.sup {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  font-family: var(--medium);
  margin-bottom: 8px;
}
.select {
  position: relative;
}
select {
  background: #f5f5f7;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  width: 100%;
  padding: 16px 24px;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  font-size: 24px;
}
.blue__section {
  padding: 120px 0;
}
.blue__cardo {
  max-width: 85%;
  margin: 0 auto;
  background: #004a8f;
  border-radius: 24px;
  padding: 48px;
  color: white;
}
.blue__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  color: #ffffff;
  margin-bottom: 16px;
}
.blue__txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  text-align: center;
  max-width: 1132px;
  margin: 0 auto;
  color: #ffffff;
}
.services {
  padding-bottom: 120px;
}
.services__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  margin-bottom: 40px;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.serv__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.serv__card {
  background: #f5f5f7;
  border: 1px solid #ebebeb;
  border-radius: 24px;
  padding: 32px;
}
.serv__logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 40px;
}
.serv__name {
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #020105;
  font-family: var(--bold);
  margin-bottom: 16px;
}
.serv__txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #5d5d5f;
  margin-bottom: 72px;
}
.serv__link {
  display: flex;
  justify-content: flex-end;
}
.serv__link button {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  color: var(--yellow);
  display: flex;
  align-items: center;
  gap: 8px;
}
.serv__link i {
  font-size: 22px;
}
.adv__card {
  background: #f5f5f7;
  border-radius: 24px;
  padding: 40px;
}
.adv__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 32px;
  font-family: var(--decor-bold);
}
.adv__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.adv__item {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 42px;
  border-right: 1px solid #d9d9df;
}
.secure {
  width: 48px;
  height: auto;
  object-fit: contain;
}
.adv__txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #020105;
}
.adv__item:first-child {
  padding-left: 0;
}
.adv__item:last-child {
  padding-right: 0;
  border-right: 0;
}

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
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0;
  }
  .aside {
    margin-bottom: 16px;
  }
  .grid {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }
  .cardo {
    padding: 16px;
    border-radius: 16px;
  }
  .pic {
    height: 100px;
    border-radius: 8px;
    transform: translateY(0);
  }
  .img {
    margin-bottom: 16px;
  }
  .content,
  .more {
    transform: translateY(0);
  }
  .name {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .category {
    font-size: 16px;
    padding: 4px 12px;
    margin-bottom: 8px;
  }
  .txt {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .more {
    margin: 0;
    font-size: 16px;
  }
  .blue__section {
    padding: 64px 0;
  }
  .blue__cardo {
    max-width: 100%;
    padding: 16px;
  }
  .blue__title {
    margin-bottom: 32px;
    font-size: 24px;
  }
  .blue__txt {
    font-size: 18px;
  }
  .services__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .serv__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .serv__card {
    padding: 16px;
  }
  .serv__logo {
    margin-bottom: 16px;
  }
  .serv__name {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .serv__txt {
    margin-bottom: 16px;
    font-size: 18px;
  }
  .serv__link button {
    font-size: 18px;
  }
  .services {
    padding-bottom: 64px;
  }
  .adv__card {
    padding: 16px;
  }
  .adv__title {
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .adv__items {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .adv__item {
    padding: 0;
    border: none;
    gap: 16px;
  }
  .adv__txt {
    font-size: 22px;
    line-height: 150%;
  }
  .secure {
    width: 32px;
  }
}
</style>
