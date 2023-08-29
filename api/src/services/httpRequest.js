const axios = require("axios");


async function httpRequest(url) {
  try {
    const {data} = await axios(url); 
       return data;
  } catch (error) {
    return error
  }
}


module.exports = { httpRequest };
