/* eslint-disable */

export default {
  async sendApplication(formData) {
    try {
      const res = await $nuxt.$axios.post('/appl/create', formData)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
