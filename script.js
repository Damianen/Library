const myLibrary = [];

function Book(title, description, author, pages) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    addNewCard(book);
}

function removeBookFromLibrary(book) {
    myLibrary.pop(book);
    const card = document.querySelector(`.${book.title}`);
    card.remove();
}

function addNewCard(book) {
    const card = document.createElement("div");
    const main = document.querySelector(".main");

    card.classList.add("book-card");
    card.classList.add(`${book.title}`);
    
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
    btn1.addEventListener("click", () => {
        if(book.read) { 
            btn1.classList.remove("read");
            btn1.classList.add("unread"); 
            book.read = false;
        } else { 
            btn1.classList.remove("unread");
            btn1.classList.add("read");
            book.read = true;
        }
    });
    card.appendChild(btn1);

    const btn2 = document.createElement("button")
    btn2.textContent = "remove";
    btn2.className = "remove";
    btn2.addEventListener("click", () => {
        removeBookFromLibrary(book);
    });
    card.appendChild(btn2);    

    main.appendChild(card);
}

addBookToLibrary(new Book("test", "test", "test", 10));