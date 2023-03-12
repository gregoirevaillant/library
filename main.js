const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const theLordOfTheRings = new Book("The PORSH", "J.R.R. Tolkien", 295, true);
const theSilmarillion = new Book("The TUCH", "J.R.R. Tolkien", 295, true);

let myLibrary = [theHobbit, theLordOfTheRings, theSilmarillion];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const library = document.querySelector("#library");

function render(book) {
    library.innerHTML = "";
    myLibrary.forEach((book) => {
        let id = myLibrary.indexOf(book);
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.setAttribute("data-id", id);

        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.pages} pages</p>
            <p>${book.isRead ? "Read" : "Not read"}</p>
            <button class="deleteButton">Delete</button>
        `;
        library.appendChild(bookCard);
    });
}

// add a new book to the library
const newBookButton = document.querySelector("#newBookButton");
const newBookFormWrapper = document.querySelector("#newBookFormWrapper");
const requestNewBook = document.querySelector("#requestNewBook");
const errorMessage = document.querySelector("#error");

requestNewBook.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead").value;
    if (title === "" || author === "" || pages === "" || isRead === "") {
        errorMessage.classList.remove("hidden");
        return;
    }
    if (isRead === "true") isRead = true;
    else isRead = false;
    let newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    render();
    resetForm();
});

newBookButton.addEventListener("click", () => {
    newBookFormWrapper.classList.toggle("hidden");
});

function resetForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#isRead").value = "";
    newBookFormWrapper.classList.toggle("hidden");
}

render();

library.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
        let id = event.target.parentElement.dataset.id;
        console.log(id);
        myLibrary.splice(id, 1);
        render();
    }
});
