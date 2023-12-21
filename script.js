
let cartItems = [
  { name: 'Autumn', author: 'AYUSH YADAV', price: 200, image: 'assets/11th.jpg' },
  { name: 'ENGLISH', author: 'Ayush yadav', price: 25  , image: 'assets/11th.jpg'},
  { name: 'Hybrid MANUFACRTOR', author: 'Er-vivek yadav', price: 24.99 , image: 'assets/11th.jpg' },
  { name: 'Rain must fail', author: 'AYUSH YADAV', price: 200, image: 'assets/RAIN MUST FAIL.jpg' },
  { name: 'physics', author: 'AYUSH YADAV', price: 200, image: 'assets/11thb.jpg' },
  { name: 'math', author: 'AYUSH YADAV', price: 200, image: 'assets/coadin.jpg' },
  { name: 'Autumn', author: 'AYUSH YADAV', price: 200, image: 'assets/geeta.jpg' },
];

function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = cartItems.length;
}

function addToCart(bookDetails) {
  cartItems.push(bookDetails);
  updateCartCount();
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const book = this.parentNode;
    const bookDetails = {
      name: book.querySelector('h3').textContent,
      author: book.querySelector('p:nth-child(3)').textContent,
      price: book.querySelector('p:nth-child(4)').textContent
    };
    addToCart(bookDetails);
  });
});

const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
  button.addEventListener('click', function() {
    const book = this.parentNode;
    const bookDetails = {
      name: book.querySelector('h3').textContent,
      author: book.querySelector('p:nth-child(3)').textContent,
      price: book.querySelector('p:nth-child(4)').textContent
    };
    addToCart(bookDetails);
     window.location.href = 'cart.html'; 
  });
});

