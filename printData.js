const axios = require("axios")

/**
 * Promise for getting the data and printing it on the console
 */

axios("https://swapi.dev/api/people/1").then(res => res.data).then(data => console.log(data.name));

/**
 * async function for getting the data and printing it on the console
 */
async function printGottenData(url) {
  const res = await axios(url)
  const name = res.data.name;

  console.log(name)
}

printGottenData("https://swapi.dev/api/people/1")