const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('p1 rejected');
    resolve('p1 resolved');
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('p2 rejected');
    resolve('p2 resolved');
  }, 1500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('p3 rejected');
    resolve('p3 resolved');
  }, 2000);
});

async function getAllData(...arg) {
  try {
    const [...val] = await Promise.all([...arg]);
    console.log(val, 'getAllData');
  } catch (err) {
    console.error(err, 'getAllData');
  }
}

async function getAllSettledData(...arg) {
  const settledPromises = await Promise.allSettled([...arg]);
  settledPromises.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(result.value, 'getAllSettledData');
    } else {
      console.error(result.reason, 'getAllSettledData');
    }
  });
  console.log(settledPromises);
}

async function getDataRace(...arg) {
  try {
    const val = await Promise.race([...arg]);
    console.log(val, 'getDataRace');
  } catch (err) {
    console.error(err, 'getDataRace');
  }
}

async function getDataAny(...arg) {
  try {
    const val = await Promise.any([...arg]);
    console.log(val, 'getDataAny');
  } catch (err) {
    console.error(err, 'getDataAny');
    console.error(err.errors, 'getDataAny');
  }
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

getAllData(p1, p2, p3);
getAllSettledData(p1, p2, p3);
getDataRace(p1, p2, p3);
getDataAny(p1, p2, p3);
