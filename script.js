const myLibrary = [];
const libraryContainer = document.getElementById('library-container');
const newBookBtn = document.getElementById('new-book-btn');
const bookDialog = document.getElementById('book-dialog');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.addedDate = new Date().toLocaleDateString();
}

// Toggle read status
Book.prototype.toggleRead = function() {
  this.read = !this.read;
  displayBooks();
};

// Add book to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.unshift(newBook);
  displayBooks();
}

// Display all books
function displayBooks() {
  libraryContainer.innerHTML = '';
  
  if (myLibrary.length === 0 && !document.querySelector('.empty-state')) {
    libraryContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-book-open"></i>
        <h3>Your BookNook is empty</h3>
        <p>Add your first book to get started!</p>
      </div>
    `;
    return;
  }
  
  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.dataset.id = book.id;
    
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><i class="fas fa-user-pen"></i> ${book.author}</p>
      <p><i class="fas fa-file-lines"></i> ${book.pages} pages</p>
      <p><i class="fas fa-calendar-day"></i> Added ${book.addedDate}</p>
      <p>
        <span class="status-indicator ${book.read ? 'status-read' : 'status-unread'}"></span>
        ${book.read ? 'Read' : 'Unread'}
      </p>
      <div class="book-actions">
        <button class="toggle-read ${book.read ? 'read' : ''}">
          ${book.read ? '<i class="fas fa-check"></i> Read' : '<i class="fas fa-book-open"></i> Mark Read'}
        </button>
        <button class="remove-book">
          <i class="fas fa-trash"></i> Remove
        </button>
      </div>
    `;
    
    libraryContainer.appendChild(bookCard);
  });

  // Add event listeners
  document.querySelectorAll('.toggle-read').forEach(button => {
    button.addEventListener('click', (e) => {
      const bookId = e.target.closest('.book-card').dataset.id;
      const book = myLibrary.find(book => book.id === bookId);
      book.toggleRead();
    });
  });

  document.querySelectorAll('.remove-book').forEach(button => {
    button.addEventListener('click', (e) => {
      const bookId = e.target.closest('.book-card').dataset.id;
      const bookIndex = myLibrary.findIndex(book => book.id === bookId);
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    });
  });
}

// Initialize checkbox functionality
function initCheckboxes() {
  const checkboxes = document.querySelectorAll('.fun-checkbox input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const icon = this.nextElementSibling.querySelector('.checkbox-icon');
      if (this.checked) {
        icon.style.backgroundColor = 'var(--primary)';
        icon.style.borderColor = 'var(--primary)';
      } else {
        icon.style.backgroundColor = 'white';
        icon.style.borderColor = '#e0e0e0';
      }
    });
  });
}

// Form event listeners
newBookBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
  bookDialog.close();
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  
  addBookToLibrary(title, author, pages, read);
  
  bookForm.reset();
  bookDialog.close();
});

// Initialize checkboxes on page load
document.addEventListener('DOMContentLoaded', function() {
  initCheckboxes();
  displayBooks(); // Show empty state if no books
});

// Add some sample books if you want
// addBookToLibrary('The Midnight Library', 'Matt Haig', 304, true);
// addBookToLibrary('Project Hail Mary', 'Andy Weir', 476, false);