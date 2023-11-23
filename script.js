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

function addNewCard(book) {
    const main = document.appendChild(".main");
    const card = document.createElement("div");
    
    card.classList.add("book-card");
    card.appendChild(document.createElement("h1").classList.add("book-title").textContent = `${book.title}`);
    card.appendChild(document.createElement("p").textContent = `${book.description}`);
    card.appendChild(document.createElement("p").textContent = `${book.author}`);
    card.appendChild(document.createElement("p").textContent = `${book.pages}`)
    card.appendChild(document.createElement("button").classList.add("unread").textContent = "unread");
    card.appendChild(document.createElement("button").classList.add("remove").textContent = "remove");
    
    main.appendChild(card);
}