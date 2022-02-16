// update product price
function updatePrice(itemId, itemCost, price) {
    document.getElementById(itemId).addEventListener('click', function() {
        const itemPrice = document.getElementById(itemCost);
        itemPrice.innerText = price;

        const memoryCost = document.getElementById('memory-cost').innerText;
        const storageCost = document.getElementById('storage-cost').innerText;
        const bestPrice = document.getElementById('best-price').innerText;
        const deliveryCost = document.getElementById('delivery-cost').innerText;

        // Calculate total price
        const totalPrice =
            Number(memoryCost) +
            Number(storageCost) +
            Number(deliveryCost) +
            Number(bestPrice);

        const total = document.getElementById('total-price');
        total.innerText = totalPrice;
        document.getElementById(itemId).style.userSelect = "none";
    });
}

// call all price from function
updatePrice('sixteenGB', 'memory-cost', 300);
updatePrice('eightGB', 'memory-cost', 0);
updatePrice('ssd2', 'storage-cost', 200);
updatePrice('ssd3', 'storage-cost', 400);
updatePrice('ssd1', 'storage-cost', 0);
updatePrice('paid-delivery', 'delivery-cost', 100);
updatePrice('free-delivery', 'delivery-cost', 0);

// Error Text handle of coupon
function addErrorText(isRemove) {
    if (isRemove) {
        document.getElementById('applied-text').classList.remove('d-none');
        document.getElementById('not-applied').classList.add('d-none');
    } else {
        document.getElementById('not-applied').classList.remove('d-none');
        document.getElementById('applied-text').classList.add('d-none');
    }
}
// Set Discount Price with coupon
document.getElementById('apply-btn').addEventListener('click', function() {
    const coupon = "pHero"
    const promoCode = document.getElementById('promo-input');
    const total = document.getElementById('total-price');
    const discount = (total.innerText * 20) / 100;

    if (promoCode.value === coupon) {
        total.innerText = total.innerText - discount;

        addErrorText(true)
        document.getElementById('apply-btn').setAttribute('disabled', true);
    } else {
        addErrorText(false)
    }
});

// Reset all product price
document.getElementById('reset-btn').addEventListener('click', function() {
    const bestPrice = document.getElementById('best-price').innerText;
    document.getElementById('memory-cost').innerText = 0;
    document.getElementById('storage-cost').innerText = 0;
    document.getElementById('delivery-cost').innerText = 0;
    document.getElementById('total-price').innerText = bestPrice;
    document.getElementById('promo-input').value = "";
    document.getElementById('apply-btn').removeAttribute('disabled', true);
    document.getElementById('not-applied').classList.add('d-none');
    document.getElementById('applied-text').classList.add('d-none')
});