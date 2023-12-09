<template>
  <div class="wrap">
    <div class="container">
      <h2 class="section__title">
        {{ $store.state.translations['main.faq-title'] }}
      </h2>
      <div class="items">
        <Accordion>
          <AccordionItem v-for="item in faq" :key="item.id">
            <template slot="accordion-trigger">
              <h4 class="title">{{ item.question }}</h4>

              <div class="arrow">
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4163 0.791016L7.99967 7.20768L1.58301 0.791016"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </template>
            <template slot="accordion-content">
              <div v-html="item.answer" class="txt"></div>
            </template>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  components: {
    Accordion,
    AccordionItem,
  },

  props: ['faq'],
}
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.section__title {
  margin-bottom: 24px;
}
.title {
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  font-family: var(--medium);
}
.txt {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #353437;
}
.txt::v-deep a {
  color: var(--blue) !important;
}
.arrow svg {
  transition: 0.4s;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 64px 0;
  }
}
</style>
