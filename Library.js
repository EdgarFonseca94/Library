const myLibrary = [];

function Book (title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBook() {
        gridItem = document.createElement('div');
        gridItem.className= "grid-item";
        gridContainer.appendChild(gridItem);
} 

// buttons to open dialog box and events
const dialog = document.querySelector('dialog');
const showDialogBtn = document.querySelector('#newBtn');
const submitBtn = document.querySelector('input[type="submit"]');
const gridContainer = document.querySelector('div.grid-container');

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

// form actions
let bookInfo = document.getElementById("bookInfo");

bookInfo.addEventListener("submit", e => {
    // prevent submit event before grabbing info
    e.preventDefault();

    // get information from dialog box
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document. getElementById("pages").value;
    read_status = document.querySelector("input[name='read_status']:checked").value;
    
    // Create book,add to library, and display 
    newBook = new Book(title, author, pages, read_status);
    addBookToLibrary(newBook);
    displayBook();

    //dialog.close();
});