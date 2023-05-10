const { default: axios } = require("axios");

const apiProva = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
})

export default apiProva