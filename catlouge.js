
const books = {
  "11th": [
    { title: 'Book 11th A', author: 'Ayush ', price: '$15', image: 'assets/11th.jpg' },
    { title: 'Book 11th A', author: 'Ayush ', price: '$15', image: 'assets/11th.jpg' },
    { title: 'Book 11th A', author: 'Ayush ', price: '$15', image: 'assets/11th.jpg' },
  ],
  "12th": [
    { title: 'Book 12th X', author: 'Ayush ', price: '$20', image: 'assets/11thb.jpg' },
    { title: 'Book 12th X', author: 'Ayush ', price: '$20', image: 'assets/11thb.jpg' },
    { title: 'Book 12th X', author: 'Ayush ', price: '$20', image: 'assets/11thb.jpg' },
  
  ],
  "Btech": [
    { title: 'Book Btech P', author: 'Ayush', price: '$25', image: 'assets/coading.jpg' }, 
    { title: 'Book Btech P', author: 'Ayush', price: '$25', image: 'assets/coading.jpg' },
    { title: 'Book Btech P', author: 'Ayush', price: '$25', image: 'assets/coading.jpg' },
    
  
  ],
  "MBA": [
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/mba.jpg' },
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/mba.jpg' },
  ],
  "DHARMIK GRANTH": [
    { title: 'Book MBA M', author: 'LORD KRISHNA ', price: '$30', image:  'assets/geeta.jpg' },
    { title: 'Book MBA M', author: 'LORD KRISHNA ', price: '$30', image:  'assets/geeta.jpg' },
    { title: 'Book MBA M', author: 'LORD KRISHNA ', price: '$30', image:  'assets/geeta.jpg' },
  
  ],
  "BCA": [
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/bca.jpg' },
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/bca.jpg' },
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/bca.jpg' },
    { title: 'Book MBA M', author: 'ayush', price: '$30', image:  'assets/bca.jpg' },
   
  
  ]
};

const bookCollection = document.querySelector('.book-collection');
function displayBooks(classType) {
  bookCollection.innerHTML = '';

  const selectedBooks = books[classType];
  if (!selectedBooks) return; 

  selectedBooks.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const imageElement = document.createElement('img');
    imageElement.src = book.image;
    imageElement.alt = book.title;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('book-details');
    detailsElement.innerHTML = `<h3>${book.title}</h3>
                                <p>Author: ${book.author}</p>
                                <p>Price: ${book.price}</p>`;

    const actionsElement = document.createElement('div');
    actionsElement.classList.add('book-actions');
    actionsElement.innerHTML = `<button onclick="buyNow()">Buy Now</button>
                                <button onclick="addToCart()">Add to Cart</button>`;

    bookElement.appendChild(imageElement);
    bookElement.appendChild(detailsElement);
    bookElement.appendChild(actionsElement);

    bookCollection.appendChild(bookElement);
  });
}

const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', function(event) {
    event.preventDefault();
    const selectedClass = this.textContent.trim(); 
    displayBooks(selectedClass);
  });
});
function buyNow() {
  alert('Buy Now clicked');
}

function addToCart() {
  alert('Add to Cart clicked');
}
