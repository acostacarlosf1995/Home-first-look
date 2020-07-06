/* API GET */

const products = fetch('https://corebiz-test.herokuapp.com/api/v1/products')
.then(response => response.json())
.then(data => {
  injectProducts(data);
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
                <p class="quantity">ou em 9x de R$ 28,87</p>
                <button class="btn-buy">COMPRAR</button>
            </div>
        `

        // Agregando al carrito de compras

        var totalProducts = document.querySelector(".cart-number")
        var count = 0;

        document.querySelectorAll(".btn-buy").forEach(button => {

            button.addEventListener("click", (e) => {
                count += 1;
                totalProducts.innerHTML = " " + count;
                sessionStorage.setItem('products', count);
            });
        });
    })

}

/* Manteniendo Productos despues de recargar la pagina */

const saveProducts = () => {

    var totalProducts = document.querySelector(".cart-number")
    totalProducts.innerHTML = sessionStorage.getItem('products');
}

saveProducts()

/* Contact form Validation */

let inputName = document.querySelector('.input-name');
let inputEmail = document.querySelector('.input-email');
let inputBtn = document.querySelector('.btn-send-info');

inputBtn.addEventListener('click', (e) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value) === true && inputName.value.length > 0) {
        document.querySelector('.input-name').style.border = 'none';
        document.querySelector('.name-wrong').style.display = 'none';
        document.querySelector('.input-email').style.border = 'none';
        document.querySelector('.email-wrong').style.display = 'none';   

        fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
            method: 'POST',
            body: JSON.stringify({
                "email": "carlos@gmail.com",
                "name": "Carlos"
            }),
        }).then(response => {
            console.log(response.status)
            return response.json();
        })

    } else {
        document.querySelector('.input-name').style.border = '1px solid red';
        document.querySelector('.name-wrong').style.display = 'flex';
        document.querySelector('.input-email').style.border = '1px solid red';
        document.querySelector('.email-wrong').style.display = 'flex';
        document.querySelector('.btn-send-info').style.backgroundColor = '#333333';
    }
})