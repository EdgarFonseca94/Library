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

function displayBooks() {
    myLibrary.forEach(e => console.log(e));
}

// buttons to open dialog box and events
const dialog = document.querySelector('dialog');
const showDialogBtn = document.querySelector('#newBtn');
const submitBtn = document.querySelector('input[type="submit"]');
const gridContainer = document.querySelector('div.grid-container');

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", () => {
    gridItem = document.createElement('div');
    gridItem.className= "grid-item";
    gridContainer.appendChild(gridItem);
    dialog.close();
});