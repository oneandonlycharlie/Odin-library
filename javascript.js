// This array contains classes of books //
const myLibrary = [];
const cardContainer = document.querySelector(".card-container")
const card = document.querySelector(".card")

// This function creates a book class //
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(item) {
    myLibrary.push(item)
}

// Example of an instance

const theHobbit =  new Book("The Hobbit","Tolkin", "100", "Not Read" );

addBookToLibrary(theHobbit)

//Show book info on the webpage
function createCard(place, item) {
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let title = document.createElement("div");
    title.setAttribute("class","title");
    title.textContent = item.title;
    let author = document.createElement("div");
    author.setAttribute("class","author");
    author.textContent = item.author;
    let pages = document.createElement("div");
    pages.setAttribute("class","pages");
    pages.textContent = item.pages + " pages"  
    let read = document.createElement("button");
    read.setAttribute("class","status");
    read.textContent = item.status
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    place.appendChild(card);
}



for (const book of myLibrary) {
    createCard(cardContainer, book);
}
