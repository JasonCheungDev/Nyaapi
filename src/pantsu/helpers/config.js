const axios = require('axios')

const BASE_URL = 'https://nyaa.net/api'

module.exports = {
  url: BASE_URL,

  cli: axios.create({
    baseURL: BASE_URL
  }),

  /**
   * Allows to specify a specific URL to access nyaa
   *
   * @param {String} url New URL to use
   * @returns {void}
   */
  updateBaseUrl (url) {
    this.url = url
    this.cli = axios.create({ baseURL: url })
  }
}
