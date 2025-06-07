# 📚BookNook - a Library

A simple JavaScript-powered Library app that lets you manage a collection of books in your browser. Users can add, remove, and update books using an interactive UI — no backend or database needed!

---

## 🚀 Features

- 📖 Add new books with title, author, pages, and read status
- 🔄 Toggle read status of books (Read / Not Read)
- ❌ Remove books from the library
- 🧠 Each book is assigned a unique ID using `crypto.randomUUID()`
- 🎨 Books are displayed as styled cards
- 📂 Fully handled in frontend using JavaScript, HTML, and CSS

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🧩 How It Works

- All book data is stored in a JavaScript array (`myLibrary`)
- Each book is an object created using the `Book` constructor
- The DOM is updated dynamically based on the array
- Forms are used to input book data
- Buttons control actions like remove and toggle status
- The `id` attribute (via `data-id`) helps match DOM elements to book objects

---

## 📋 Usage

Click on the "Add Book" button to open the form
Fill in the title, author, pages, and read status
Click "Submit" to add the book
Use "Remove" to delete a book from the list
Click "Mark as Read"/"Mark as Unread" to toggle status

---

## 🧠 Future Improvements

Add localStorage to persist data between sessions
Add search/filter functionality
Use modal instead of basic form for better UX
Responsive design for mobile devices

---

**Happy Reading! 📖✨**
