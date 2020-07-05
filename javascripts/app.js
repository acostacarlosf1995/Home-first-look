/* API GET */

const products = fetch('https://corebiz-test.herokuapp.com/api/v1/products')
.then(response => response.json())
.then(data => {
  injectProducts(data);
  console.log(data)
})
.catch(error => console.log(error));

/* Product rendering */

const injectProducts = (data) => {

    data.forEach(product => {
        document.querySelector('.products-container').innerHTML += `
            <div class="products">
                <img class="image-product" src="${product.imageUrl}" alt="product">
                <p class="title-product-txt">${product.productName}</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p class="price">por R$ ${product.price}</p>
                <p class="quantity">ou em x de R$</p>
                <button class="btn-buy">COMPRAR</button>
            </div>
        `

        // Agregando al carrito de compras

        var totalProducts = document.querySelector(".cart-number"),
        count = 0;

        document.querySelectorAll(".btn-buy").forEach(button => {

            button.addEventListener("click", (e) => {
                count += 1;
                totalProducts.innerHTML = " " + count;              
            });
        });
    })

}