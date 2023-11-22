const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('p1 rejected');
    resolve('p1 resolved');
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 resolved');
  }, 4000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 resolved');
  }, 3000);
});

async function getAllData(...arg) {
  const [...val] = await Promise.all([...arg]);
  console.log(val);
}

getAllData(p1, p2, p3);
async function getAllSettledData(...arg) {
  const settledPromises = await Promise.allSettled([...arg]);
  settledPromises.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(result.value);
    } else {
      console.error(result.reason);
    }
  });
  console.log(...settledPromises);
}

async function getDataRace(...arg) {
  const val = await Promise.race([...arg]);
  console.log(val);
}

async function getDataAny(...arg) {
  const val = await Promise.any([...arg]);
  console.log(val);
}

const P1_URL = 'https://dummyjson.com/products/1';
const P2_URL = 'https://dummyjson.com/products/2';
const P3_URL = 'https://dummyjson.com/products/3';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.title;
}

// getAllSettledData(fetchData(P1_URL), fetchData(P2_URL), fetchData(P3_URL));
