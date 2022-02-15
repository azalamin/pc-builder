function updatePrice(itemId, itemCost, price) {
    document.getElementById(itemId).addEventListener('click', function() {
        const memoryPrice = document.getElementById(itemCost);
        memoryPrice.innerText = price;

        const memoryCost = document.getElementById('memory-cost').innerText;
        const storageCost = document.getElementById('storage-cost').innerText;
        const bestPrice = document.getElementById('best-price').innerText;
        const deliveryCost = document.getElementById('delivery-cost').innerText;

        const totalPrice =
            Number(memoryCost) +
            Number(storageCost) +
            Number(deliveryCost) +
            Number(bestPrice);

        const total = document.getElementById('total-price');
        total.innerText = totalPrice;
    });
}
updatePrice('sixteenGB', 'memory-cost', 300);
updatePrice('eightGB', 'memory-cost', 0);
updatePrice('ssd2', 'storage-cost', 200);
updatePrice('ssd3', 'storage-cost', 400);
updatePrice('ssd1', 'storage-cost', 0);
updatePrice('paid-delivery', 'delivery-cost', 100);
updatePrice('free-delivery', 'delivery-cost', 0);





// document.getElementById('sixteenGB').addEventListener('click', function() {
//     const memoryCost = document.getElementById('memory-cost');
//     memoryCost.innerText = 300;

//     const storageCost = document.getElementById('storage-cost');
//     const bestPrice = document.getElementById('best-price');
//     const deliveryCost = document.getElementById('delivery-cost');
//     const totalAmount = Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCost.innerText) + Number(bestPrice.innerText);
//     const totalPrice = document.getElementById('total-price');
//     totalPrice.innerText = totalAmount;
// });
// document.getElementById('ssd2').addEventListener('click', function() {
//     const storageCost = document.getElementById('storage-cost');
//     storageCost.innerText = 200;

//     const bestPrice = document.getElementById('best-price');
//     const memoryCost = document.getElementById('memory-cost');
//     const deliveryCost = document.getElementById('delivery-cost');
//     const totalAmount = Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCost.innerText) + Number(bestPrice.innerText);
//     const totalPrice = document.getElementById('total-price');
//     totalPrice.innerText = totalAmount;
// });