var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];

for (var i = 0; i < products.length; i++) {
    // Separa produto: valor em array
    products[i] = products[i].split(':');
    // Converte valor para number
    products[i][1] = Number(products[i][1]);
    // Soma total
    total += products[i][1];

    itemText = `${products[i][0]} - $${products[i][1]}`;

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
