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
    const main = document.querySelector(".main");
    const card = document.createElement("div");
    
    card.classList.add("book-card");
    
    const title = document.createElement("h1");
    title.textContent = `${book.title}`;
    card.appendChild(title);
    
    const desc = document.createElement("p");
    desc.textContent = `${book.description}`;
    card.appendChild(desc);
    
    const author = document.createElement("p");
    author.textContent = `${book.author}`;
    card.appendChild(author);
    
    const pages = document.createElement("p");
    pages.textContent = `${book.pages}`;
    card.appendChild(pages);
    
    const btn1 = document.createElement("button");
    btn1.textContent = "Not read";
    btn1.className = "unread";
    card.appendChild(btn1);
    
    const btn2 = document.createElement("button")
    btn2.textContent = "remove";
    btn2.className = "remove";
    card.appendChild(btn2);    

    main.appendChild(card);
}
