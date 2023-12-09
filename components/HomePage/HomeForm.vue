<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="row">
          <div class="col-lg-6 col-xs-12 left">
            <h2 class="title">
              {{ $store.state.translations['main.contacts-title'] }}
            </h2>
            <div class="items">
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations['main.address'] }}
                </p>
                <p class="txt">{{ info.adres }}</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations['main.number'] }}
                </p>
                <a :href="`tel:${info.nbm}`" class="txt">{{ info.nbm }}</a>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations['main.email'] }}</p>
                <a :href="`mailto:${info.email}`" class="txt">{{
                  info.email
                }}</a>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations['main.socials'] }}
                </p>
                <div class="socials">
                  <a
                    :href="`tel:${info.youtube}`"
                    target="_blank"
                    class="soc"
                    rel="nofollow"
                  >
                    <i class="bx bxl-youtube"></i>
                  </a>
                  <a
                    :href="`tel:${info.facebook}`"
                    target="_blank"
                    class="soc"
                    rel="nofollow"
                  >
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    :href="`tel:${info.instagram}`"
                    target="_blank"
                    class="soc"
                    rel="nofollow"
                  >
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                  <a
                    :href="`tel:${info.telegram}`"
                    target="_blank"
                    class="soc"
                    rel="nofollow"
                  >
                    <i class="bx bxl-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 right">
            <h4 class="title">{{ $store.state.translations['main.form'] }}</h4>
            <form>
              <div class="grid">
                <input
                  v-model="full_name"
                  type="text"
                  :placeholder="$store.state.translations['main.name']"
                  required
                />
                <input
                  v-model="number"
                  type="number"
                  :placeholder="$store.state.translations['main.number']"
                  required
                />
                <input
                  v-model="email"
                  type="email"
                  :placeholder="$store.state.translations['main.email']"
                  required
                />
                <input
                  v-model="town"
                  type="text"
                  :placeholder="$store.state.translations['main.town']"
                />
              </div>
              <textarea v-model="message" placeholder="Post"></textarea>
              <button
                @click="onSubmit()"
                type="submit"
                name="submit"
                class="send"
              >
                {{ $store.state.translations['main.send'] }}
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formApi from '@/api/form.js'

export default {
  data() {
    return {
      full_name: '',
      number: '',
      email: '',
      town: '',
      message: '',
    }
  },

  props: ['info'],

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
        town: this.town,
        message: this.message,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$toast.success('Отправлено')
      } else {
        this.$toast.error('Ошибка')
      }

      this.full_name = ''
      this.number = ''
      this.email = ''
      this.town = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.cardo {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  border-radius: 32px;
  color: white;
}
.left {
  background: url(@/assets/img/hero-mask.svg) center no-repeat;
  background-size: cover;
  padding: 64px 4px 64px 144px;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  font-family: var(--decor-bold);
  text-transform: uppercase;
  margin-bottom: 40px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 72px;
  row-gap: 40px;
}
.txt {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  text-transform: uppercase;
  font-family: var(--decor-bold);
  color: white;
}
.sup {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}
.socials {
  display: flex;
  gap: 44px;
  align-items: center;
}
.soc {
  color: white;
  font-size: 32px;
}
.right {
  padding: 64px 144px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}
input {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  padding-bottom: 16px;
  border-bottom: 1px solid #ffffff2e;
}
input::placeholder {
  color: #ffffff72;
}
textarea {
  min-height: 90px;
  resize: none;
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  border-bottom: 1px solid #ffffff2e;
  margin-bottom: 32px;
}
textarea::placeholder {
  color: #ffffff72;
}
.send {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  font-family: var(--decor-bold);
  text-transform: uppercase;
  border-radius: 40px;
  background: var(--yellow);
  padding: 20px 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 270px;
  transition: 0.4s;
  min-width: 400px;
}
.send svg {
  transform: rotate(-90deg);
}
.send:hover {
  background: white;
  color: black;
}
.send path {
  transition: 0.4s;
}
.send:hover path {
  stroke: black;
}
@media screen and (max-width: 1600px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 64px 0 40px 0;
  }
  .cardo {
    padding: 16px;
    border-radius: 24px;
  }
  .left,
  .right {
    padding: 0;
  }
  .cardo .row {
    margin: 0;
  }
  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .items,
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .left {
    margin-bottom: 56px;
  }
  .txt {
    font-size: 18px;
  }
  .sub {
    font-size: 16px;
  }
  .send {
    width: 100%;
    min-width: 100%;
  }
}
</style>
