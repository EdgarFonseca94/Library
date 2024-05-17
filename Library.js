let myLibrary = [];

function Book (title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = Number(read_status);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}
function clearGrid() {
    gridContainer.innerHTML = "";
}
function clearForm() {
    form = document.getElementById("bookInfo");
    form.reset();
}
function getBookInfo() {
    // get information from dialog box
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document. getElementById("pages").value;
    read_status = document.querySelector("input[name='read_status']:checked").value;
    return(title, author, pages, read_status);
}
function reIndexBooks() {
    // changes values of divs/books in their respective data-attributes
    document.querySelectorAll(`[book-num]`).forEach((item, i=0) => {
        item.setAttribute('book-num', `${i}`);
    });
}
function displayBook(book, index) {
    // creates grid item for card
    gridItem = document.createElement('div');
    gridItem.className= "grid-item";
    gridItem.setAttribute("book-num", index);
    gridContainer.appendChild(gridItem);

    // title
    cardTitle = document.createElement('div');
    cardTitle.className = "cardTitle";
    cardTitle.innerHTML = "Title: " + book.title;
    gridItem.appendChild(cardTitle);

    // author
    cardAuthor = document.createElement('div');
    cardAuthor.className = "cardAuthor";
    cardAuthor.innerHTML = "Author: " + book.author;
    gridItem.appendChild(cardAuthor);

    // pages
    cardPages = document.createElement('div');
    cardPages.className = "cardPages";
    cardPages.innerHTML = "Pages: " + book.pages;
    gridItem.appendChild(cardPages);

    // read status
    cardReadStatus = document.createElement('div');
    cardReadStatus.className = "cardReadStatus";
    cardReadStatus.setAttribute("data-read-num", index);
    cardReadStatus.innerHTML = "Read Status: " + ((book.read_status) ? "Read" : "Not Read");
    gridItem.appendChild(cardReadStatus);

    // Button flex container
    buttonContainer = document.createElement('div');
    buttonContainer.className = "button-container";
    gridItem.appendChild(buttonContainer);

    // create change read status
    changeStatusBtn = document.createElement('button');
    changeStatusBtn.className = "changeStatus";
    changeStatusBtn.innerHTML = "Change Read Status";
    changeStatusBtn.onclick = function () {
        // switch value, expression ? iftrue : iffalse
        // if 1 - > 0
        // if 0 -> 1
        // index for book location
        let changeIndex = +this.closest(".grid-item").getAttribute("book-num")
        myLibrary[changeIndex].read_status = myLibrary[changeIndex].read_status ? 0 : 1;
        document.querySelector(`[data-read-num ="${changeIndex}"]`).innerHTML = "Read Status: " + ((book.read_status) ? "Read" : "Not Read");
    }
    buttonContainer.appendChild(changeStatusBtn);

    // create remove button
    removeBtn = document.createElement('button');
    removeBtn.className = "removeBtn";
    removeBtn.innerHTML = "Remove";
    removeBtn.onclick = function () {
        // move book from array
        // index for book
        let rmvIndex = +this.closest(".grid-item").getAttribute("book-num");
        myLibrary.splice(rmvIndex, 1);
        let childRemove = document.querySelector(`[book-num="${rmvIndex}"`);
        gridContainer.removeChild(childRemove);
        
        // update attribute nums to correct nums
        reIndexBooks();
    }
    buttonContainer.appendChild(removeBtn);
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
const bookInfo = document.getElementById("bookInfo");
const resetBtn = document.getElementById("reset");
const closeBtn = document.getElementById("close");


bookInfo.addEventListener("submit", e => {
    // prevent submit event
    // clear book display
    e.preventDefault();
    clearGrid();

    // get book information from dialog box 
    // Create book,add to library, and display 
    title, author, pages, read_status = getBookInfo();
    newBook = new Book(title, author, pages, read_status);
    addBookToLibrary(newBook);
    
    myLibrary.forEach((book, index) => {
        displayBook(book, index);
    });

    // clear form and close dialog
    clearForm();
    dialog.close();
});

resetBtn.addEventListener('click', () => {
    clearForm();
});

closeBtn.addEventListener('click', () => {
    clearForm();
    dialog.close();
});
