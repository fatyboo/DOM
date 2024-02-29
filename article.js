document.querySelectorAll('.item').forEach(item => {
    const decrementBtn = item.querySelector('.decrement');
    const incrementBtn = item.querySelector('.increment');
    const quantityElement = item.querySelector('.quantity');
    const deleteBtn = item.querySelector('.delete');
    const likeBtn = item.querySelector('.like');
    const priceElement = item.querySelector('.price');

    decrementBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    incrementBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    deleteBtn.addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        likeBtn.classList = '#' + Math.floor(Math.random()*16777215).toString(16);
        likeBtn.style.backgroundColor = randomColor;
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            total += quantity * price;
        });
        document.getElementById('totalAmount').textContent = total.toFixed(2);
    }
});

