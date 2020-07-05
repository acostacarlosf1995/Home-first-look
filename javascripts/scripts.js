const products = fetch('https://corebiz-test.herokuapp.com/api/v1/products')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.log(error));