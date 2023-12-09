<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12 left">
          <div class="map__wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.716154514564!2d69.32979397952253!3d41.33678521820718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5c6923c4e7d%3A0x6da140a5d41c0c1f!2s%22Polimer%20Group%20Asia%22%20Ltd!5e0!3m2!1sru!2s!4v1686726079446!5m2!1sru!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="items">
              <div class="item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  class="logo"
                  src="@/assets/img/logo/map-1.svg"
                  :alt="info.adres"
                  loading="lazy"
                />
                <p class="txt">{{ info.adres }}</p>
              </div>

              <div class="item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  class="logo"
                  src="@/assets/img/logo/map-2.svg"
                  :alt="info.nbm"
                  loading="lazy"
                />
                <p class="txt">{{ info.nbm }}</p>
              </div>
              <div class="item">
                <img
                  :title="$store.state.translations['main.title-span']"
                  class="logo"
                  src="@/assets/img/logo/map-3.svg"
                  :alt="info.email"
                  loading="lazy"
                />
                <p class="txt">{{ info.email }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12 right">
          <h4 class="title">{{ $store.state.translations['main.form'] }}</h4>
          <form @submit.prevent="onSubmit">
            <input
              v-model="full_name"
              :placeholder="$store.state.translations['main.name']"
              type="text"
            />
            <input
              v-model="number"
              :placeholder="$store.state.translations['main.number']"
              type="number"
            />
            <input
              v-model="email"
              :placeholder="$store.state.translations['main.address']"
              type="email"
            />
            <input
              v-model="town"
              :placeholder="$store.state.translations['main.town']"
              type="text"
            />
            <textarea
              v-model="message"
              :placeholder="$store.state.translations['main.message']"
            ></textarea>
            <button type="submit" name="submit" class="send">
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
</template>

<script>
import formApi from '@/api/form.js'

export default {
  props: ['info'],

  data() {
    return {
      full_name: '',
      number: '',
      email: '',
      town: '',
      message: '',
    }
  },

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
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
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
  padding: 80px 0 0 0;
}
.row {
  margin: 0;
}
.left {
  padding-left: 0;
}
.map__wrap {
  position: relative;
}
iframe {
  width: 100%;
  height: 610px;
  border-radius: 32px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: absolute;
  left: 16px;
  bottom: 20px;
  width: 97%;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(36px);
  border-radius: 16px;
}
.item {
  padding: 28px 48px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.txt {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  color: var(--black);
}
.right {
  padding: 32px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 32px;
}
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--decor-bold);
  margin-bottom: 24px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
input {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c2c2c3;
  padding-bottom: 16px;
}
input::placeholder {
  color: #9a999b;
}
textarea {
  min-height: 90px;
  resize: none;
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  border-bottom: 1px solid #c2c2c3;
}
textarea::placeholder {
  color: #9a999b;
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
  color: white;
  border: 2px solid var(--yellow);
}
.send svg {
  transform: rotate(-90deg);
}
.send:hover {
  border-color: black;
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
  .send {
    min-width: unset;
  }
}
@media screen and (max-width: 1024px) {
  .row {
    margin: 0;
  }
  .left {
    padding: 0;
  }
  .title {
    font-size: 24px;
  }

  .right {
    padding: 24px;
  }

  form input,
  form textarea {
    font-size: 18px;
  }
  .wrap {
    padding: 64px 0 0 0;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
  }
  iframe {
    height: 478px;
  }
  .item {
    padding: 0;
    gap: 8px;
  }
  .txt {
    font-size: 16px;
    line-height: 150%;
  }
  .logo {
    width: 32px;
    height: 32px;
  }
  .send {
    min-width: 100%;
    padding: 12px 0;
  }
}
</style>
