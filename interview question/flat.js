let arr = [[1, 2], [3, 4], [5, [6, [7, 8], 9]], [10, 11, 12], 14, 15];

// const arrFlattened1 = [...arr].flat(1);
// const arrFlattened2 = [...arr].flat(2);
// const arrFlattenedInfinite = [...arr].flat(Infinity);

// console.log(arrFlattened1, arrFlattened2, arrFlattenedInfinite);

const customFlatArray = array => {
  const output = [];

  array.forEach(e => {
    if (Array.isArray(e)) output.push(...e);
    else output.push(e);
  });

  return output;
};

// console.log(customFlatArray(arr));
// console.log(customFlatArray(customFlatArray(arr)));
// console.log(customFlatArray(customFlatArray(customFlatArray(arr))));

const customFlatArrayRecuss = (array, depth = 0) => {
  const output = [];
  let recuss = depth;

  array.forEach(e => {
    if (Array.isArray(e)) output.push(...e);
    else output.push(e);
  });

  if (recuss === Infinity)
    recuss = output.some(item => Array.isArray(item)) ? Infinity : 0;
  else if (recuss > 0) recuss--;

  if (recuss) return customFlatArrayRecuss(output, recuss);

  return output;
};

console.log(customFlatArrayRecuss(arr));
console.log(customFlatArrayRecuss(arr, 1));
console.log(customFlatArrayRecuss(arr, 2));
console.log(customFlatArrayRecuss(arr, Infinity));
