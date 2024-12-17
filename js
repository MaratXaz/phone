document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.getAttribute('data-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            // Добавляем товар в корзину
            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        // Обновляем количество товаров
        cartCount.textContent = cart.length;

        // Очищаем список и сумму
        cartItems.innerHTML = '';
        let total = 0;

        // Перебираем корзину
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = ${item.name} - $${item.price};
            cartItems.appendChild(li);
            total += item.price;
        });

        // Обновляем общую стоимость
        totalPrice.textContent = $${total};
    }

    // Очистка корзины (дополнительно)
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Спасибо за заказ!');
            cart.length = 0; // Очищаем корзину
            updateCart();
        } else {
            alert('Ваша корзина пуста.');
        }
    });
});
