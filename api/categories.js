/* eslint-disable */

export default {
  async getCategories(axios, params) {
    let res;

    if (axios) {
      res = await axios.get("/categories", {
        // headers: {
        //   Language: params,
        // },
        ...params,
      });
    }
    return res.data.results;
  },

  async getCategory(slug, axios, params) {
    let res;

    if (axios) {
      res = await axios.get(`/categories/${slug}`, {
        // headers: {
        //   Language: params,
        // },
        ...params,
      });
    }
    return res.data;
  },
};
