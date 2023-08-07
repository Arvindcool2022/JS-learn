let product = sessionStorage.getItem('selectedProduct');
console.log(product);

if (product) document.querySelector('.container').innerHTML = product;
