const books = [
  { name: 'Autumn', author: 'AYUSH YADAV', price: 200, image: 'assets/11th.jpg' },
  { name: 'ENGLISH', author: 'Ayush yadav', price: 25  , image: 'assets/11th.jpg'},
  { name: 'Hybrid MANUFACRTOR', author: 'Er-vivek yadav', price: 24.99 , image: 'assets/11th.jpg' },
  { name: 'Rain must fail', author: 'AYUSH YADAV', price: 200, image: 'assets/RAIN MUST FAIL.jpg' },
  { name: 'physics', author: 'AYUSH YADAV', price: 200, image: 'assets/11thb.jpg' },
  { name: 'math', author: 'AYUSH YADAV', price: 200, image: 'assets/coadin.jpg' },
  { name: 'Autumn', author: 'AYUSH YADAV', price: 200, image: 'assets/geeta.jpg' },
];

const chosenItemsList = document.getElementById('chosen-items-list');
const buyNowItemsList = document.getElementById('buy-now-items-list');
const totalPrice = document.getElementById('total-price');

function addToCart(item) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50" height="50">
                        <span>${item.name} - $${item.price.toFixed(2)}</span>`;
  
  const buyButton = document.createElement('button');
  buyButton.innerText = 'Buy Now';
  buyButton.onclick = function() {
    buyNow(item);
    listItem.remove();
  };
  listItem.appendChild(buyButton);

  chosenItemsList.appendChild(listItem);
  recalculateTotal();
}

function buyNow(item) {
  const listItem = document.createElement('li');
  listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.onclick = function() {
    listItem.remove();
    recalculateTotal();
  };
  listItem.appendChild(removeButton);

  buyNowItemsList.appendChild(listItem);
  recalculateTotal();
}

function recalculateTotal() {
  let total = 0;
  const allItems = [ ...buyNowItemsList.children];
  allItems.forEach(item => {
    const itemPrice = parseFloat(item.innerText.split('- $')[1]);
    if (!isNaN(itemPrice)) {
      total += itemPrice;
    }
  });
  totalPrice.innerText = total.toFixed(2);
}

books.forEach(item => {
  addToCart(item);
});

function payNow() {
  const total = parseFloat(totalPrice.innerText);
  const message = `Payment of $${total.toFixed(2)} successful!`;
  alert(message);
}
