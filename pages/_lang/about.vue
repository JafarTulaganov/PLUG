<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.about']" />

    <div class="container smaller one">
      <h4 class="title">{{ $store.state.translations['main.title-span'] }}</h4>
      <p class="txt">
        {{ $store.state.translations['about.about-1'] }}
      </p>
      <p class="txt">
        {{ $store.state.translations['about.about-2'] }}
      </p>
    </div>
    <div class="container small two">
      <div class="cardo">
        <div class="items">
          <div class="item">
            <img src="@/assets/img/logo/chart.svg" alt="" class="logo" />
            <p class="sub">{{ $store.state.translations['about.about-3'] }}</p>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/star.svg" alt="" class="logo" />
            <p class="sub">{{ $store.state.translations['about.about-4'] }}</p>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/hand.svg" alt="" class="logo" />
            <p class="sub">{{ $store.state.translations['about.about-5'] }}</p>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/archived.svg" alt="" class="logo" />
            <p class="sub">{{ $store.state.translations['about.about-6'] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container smaller">
      <h4 class="title">{{ $store.state.translations['about.about-7'] }}</h4>
      <p class="txt">
        {{ $store.state.translations['about.about-8'] }}
      </p>
      <div class="img">
        <img src="@/assets/img/about-2.svg" alt="" class="pic" />
        <p class="comment">
          {{ $store.state.translations['about.about-9'] }}
        </p>
      </div>
      <div class="years">
        <div class="year">
          <p class="num">{{ $store.state.translations['about.about-10'] }}</p>
          <p class="info">{{ $store.state.translations['about.about-3'] }}</p>
        </div>
        <div class="year">
          <p class="num">{{ $store.state.translations['about.about-12'] }}</p>
          <p class="info">{{ $store.state.translations['about.about-6'] }}</p>
        </div>
        <div class="year">
          <p class="num">{{ $store.state.translations['about.about-14'] }}</p>
          <p class="info">{{ $store.state.translations['about.about-24'] }}</p>
        </div>
      </div>
      <p class="txt">
        {{ $store.state.translations['about.about-16'] }}
      </p>
      <div class="images">
        <img src="@/assets/img/about-3.svg" alt="" class="pic" />
        <img src="@/assets/img/about-4.svg" alt="" class="pic" />
      </div>
      <p class="karina">
        {{ $store.state.translations['about.about-17'] }}
      </p>
      <h4 class="title">{{ $store.state.translations['about.about-18'] }}</h4>
      <p class="txt">
        {{ $store.state.translations['about.about-19'] }}
      </p>
      <div class="box">
        <p class="paragraph">
          {{ $store.state.translations['about.about-20'] }}
        </p>
        <div class="box__items">
          <div class="box__item">
            <p>
              <i class="bx bx-check-circle"></i>
              {{ $store.state.translations['about.about-21'] }}
            </p>
          </div>
          <div class="box__item">
            <p>
              <i class="bx bx-check-circle"></i>
              {{ $store.state.translations['about.about-22'] }}
            </p>
          </div>
          <div class="box__item">
            <p>
              <i class="bx bx-check-circle"></i>
              {{ $store.state.translations['about.about-23'] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteTop from '@/components/SiteTop'

export default {
  components: {
    SiteTop,
  },
}
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-transform: uppercase;
  background: linear-gradient(94.17deg, #3f4347 3.94%, #17191c 103.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  margin-bottom: 24px;
}
.one {
  padding: 80px 0 32px 0;
}
.txt {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 24px;
}
.cardo {
  position: relative;
  min-height: 582px;
  border-radius: 24px;
  background: url(@/assets/img/about-page.svg) center no-repeat;
  background-size: cover;
  margin-bottom: 80px;
  overflow: hidden;
}
.items {
  background: rgba(43, 43, 43, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(8px);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.item {
  display: flex;
  align-items: center;
  gap: 32px;
  border-right: 1px solid rgba(255, 255, 255, 0.24);
  padding: 20px 32px;
}
.item:first-child {
  padding-left: 0;
}
.item:last-child {
  border-right: 0;
}
.sub {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--medium);
  color: #ffffff;
}
.pic {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 16px;
}
.comment {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #9a999b;
  margin-bottom: 40px;
}
.years {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border);
  gap: 80px;
}
.num {
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  text-transform: uppercase;
  color: var(--yellow);
  font-family: var(--decor-bold);
  margin-bottom: 8px;
}
.info {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
}
.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  bottom: 24px;
}
.images .pic {
  height: 320px;
}
.karina {
  background: #f5f5f7;
  border: 1px solid #ebebeb;
  border-radius: 24px;
  padding: 32px 40px 32px 56px;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #5d5d5f;
  position: relative;
  margin-bottom: 40px;
}
.karina::after {
  height: 60px;
  width: 2px;
  background: var(--yellow);
  content: '';
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
}
.box {
  background: #f5f5f7;
  border: 1px solid #ebebeb;
  border-radius: 24px;
  padding: 32px;
  margin-bottom: 170px;
}
.paragraph {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  background: linear-gradient(94.17deg, #3f4347 3.94%, #17191c 103.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 30px;
  max-width: 500px;
}
.box__items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 54px;
  row-gap: 24px;
  border-top: 1px solid #d9d9df;
  padding-top: 24px;
}
.box__item {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
}
.box__item p {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.box__item i {
  font-size: 24px;
  color: var(--yellow);
  transform: translateY(4px);
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 0 16px !important;
  }
  .title {
    font-size: 24px;
    margin-bottom: 16px;
    line-height: 120%;
  }
  .txt {
    font-size: 14px;
  }
  .one {
    padding-top: 64px !important;
  }
  .cardo {
    min-height: 384px;
    margin-bottom: 64px;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
    gap: 4px;
  }
  .item {
    gap: 4px;
    padding: 0 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }
  .item:nth-child(2) {
    border-right: 0;
  }
  .item:nth-child(3),
  .item:nth-child(4) {
    border-bottom: 0;
  }
  .sub {
    font-size: 10px;
    line-height: 150%;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .pic {
    height: 306px;
  }
  .comment {
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .years {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .num {
    font-size: 20px;
    line-height: 150%;
  }
  .info {
    font-size: 14px;
  }
  .years {
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
  .images {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .images .pic {
    height: 184px;
    border-radius: 16px;
    margin-bottom: 0;
  }
  .karina {
    margin-top: 16px;
    padding: 16px 16px 16px 32px;
    font-size: 14px;
  }
  .karina::after {
    left: 16px;
  }
  .box {
    padding: 16px;
    margin-bottom: 100px;
  }
  .paragraph {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 700;
    font-family: var(--decor-bold);
  }
  .box__items {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .box__item p {
    font-size: 14px;
    line-height: 120%;
  }
}
</style>
