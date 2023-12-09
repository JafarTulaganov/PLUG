export default {
  head: {
    title: 'Polimer Group Asia',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'var(--yellow)',
    height: '5px',
  },

  css: ['@/assets/css/base.css', 'boxicons/css/boxicons.min.css'],

  plugins: [
    '@/plugins/replain.js',
    { src: '@/plugins/yandex.js', mode: 'client' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/pwa'],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    '@nuxtjs/i18n',
  ],

  ssr: true,

  i18n: {
    seo: true,
    baseUrl: 'https://pga.uz',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
      },
      {
        code: 'uz',
        iso: 'uz-UZ',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },

  axios: {
    baseURL: 'https://admin.pga.uz/api',
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },

  // target: 'server',
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // },

  pwa: {
    manifest: {
      name: 'Polimer Group Asia',
      lang: 'ru',
      useWebmanifestExtension: false,
    },
  },

  router: {
    middleware: 'redirect',
    middleware: 'lastModified',
  },

  serverMiddleware: ['~/middleware/lastModified.js'],
}
