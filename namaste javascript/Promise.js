//* Creation
const createOrderId = cartId =>
  new Promise((resolve, reject) => {
    const orderID = new Date().getTime().toString(26);
    setTimeout(() => {
      if (!cartId) reject(new Error(`Ref no: ${orderID}`));
      else resolve(orderID);
    }, 1000);
  });

//* Consumption
const cartId = Math.round(Math.random());

createOrderId(cartId)
  .then(orderID => console.log('a Order ID:', orderID))
  .catch(error => console.error('a Task failed:', error.message))
  .then(() => console.log('a then promiseState is not pending')) //! prints on console log after experimental function 1 why? (remove settime out in promise to check)
  .finally(() => console.log('a finally promiseState is not pending'));
//# works how it is supposed to work after adding set time out

//* or
console.log('after promise chain');
const processCart = async cartId => {
  try {
    console.log('before await');
    await experimental(1, cartId);
    const orderID = await createOrderId(cartId); //! on reject all lines after this are rejected
    console.log('after await');
    console.log('b Order ID:', orderID);
    await experimental(2, cartId);
  } catch (error) {
    console.error('b Task failed:', error.message);
  } finally {
    console.log('b promiseState is not pending');
  }
};
processCart(cartId);

function experimental(num, ID) {
  return createOrderId(ID)
    .then(result => console.log(num, result))
    .catch(error => console.error(num, error.message))
    .finally(() => console.log(`called: ${num}`));
}

console.log('the end');
