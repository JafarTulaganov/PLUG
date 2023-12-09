<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo row">
        <div class="col-lg-7 col-xs-12 left">
          <h2 class="title">
            {{ $store.state.translations['main.contacts-title'] }}
          </h2>
          <p class="sub">
            {{ $store.state.translations['main.contacts-sub'] }}
          </p>
        </div>
        <div class="col-lg-5 col-xs-12 right">
          <form>
            <input
              v-model="full_name"
              :placeholder="$store.state.translations['main.name']"
              type="text"
              required
            />
            <input
              v-model="number"
              :placeholder="$store.state.translations['main.number']"
              type="number"
              required
            />
            <button
              @click="onSubmit()"
              type="submit"
              name="submit"
              class="butn"
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
</template>

<script>
import formApi from '@/api/form.js'

export default {
  data() {
    return {
      full_name: '',
      number: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
      }

      const res = await formApi.sendApplication(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.full_name = ''
      this.number = ''
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 64px 0 120px 0;
}
.cardo {
  background: linear-gradient(141deg, #083661 0%, #0657a3 100%);
  border-radius: 32px;
  position: relative;
  min-height: 302px;
  color: white;
}
.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  font-family: var(--decor-bold);
  text-transform: uppercase;
}
.left {
  padding: 72px 56px;
  background: url(@/assets/img/hero-mask.svg) center no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right {
  padding: 72px 56px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
}
form input {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  padding-bottom: 16px;
  border-bottom: 1px solid #ffffff2e;
}
form input::placeholder {
  color: #ffffff72;
}
.butn {
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
}
.butn svg {
  transform: rotate(-90deg);
}
.butn:hover {
  background: white;
  color: black;
}
.butn path {
  transition: 0.4s;
}
.butn:hover path {
  stroke: black;
}
.sub {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  max-width: 600px;
}
@media screen and (max-width: 1500px) {
  .wrap {
    padding: 64px 16px 120px 16px;
  }
  .title {
    font-size: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .left {
    padding: 24px;
  }
  .title {
    font-size: 24px;
  }
  .cardo {
    margin: 1px;
  }
  .sub {
    font-size: 16px;
  }
  .right {
    padding: 24px;
  }
  .butn {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    padding: 12px 24px;
  }
  form input {
    font-size: 18px;
  }
  .wrap {
    padding: 64px 0;
  }
}
</style>
