const myLibrary = [];

function Book(title, description, author, pages) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(book) {
    myLibrary.pop(book);
}