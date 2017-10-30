function sum(a, b) {
  return a + b;
}

function fetchData(data) {
  return new Promise((resolve, reject) => {
    if (1 == data) {
      resolve("peanut butter");
    } else {
      reject("error");
    }
  });
}

module.exports = { sum, fetchData };
