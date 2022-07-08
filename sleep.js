/**
 * A sleep function returning a promise to print a phrase after a certain time
 * @param {number} time 
 * @returns Promise<any>
 */
const sleep = (time) => {
  return new Promise((resovled, rejected) => {
    setTimeout(resovled, time)
  })
}

sleep(1000).then(() => console.log("Slept for 1000ms"))

/**
 * 
 */
const printAfterCertainTime = (time) => async(text) =>  {
  await sleep(1000).then(() => console.log(text))
}

printAfterCertainTime(1000)("Slept for 1000ms")