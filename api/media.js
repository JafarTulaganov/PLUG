/* eslint-disable */

export default {
  async getMedia(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/media')
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
