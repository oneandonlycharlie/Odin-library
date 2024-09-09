// This array contains classes of books //
const myLibrary = [];
const cardContainer = document.querySelector(".card-container")
const addButtion = document.querySelector(".addBook")
const dialog = document.querySelector("dialog")
const closeButton = document.querySelector("dialog button")
const submitButtion = document.querySelector("dialog form button")

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


// Activate an input window
addButtion.addEventListener("click", (e)=> {
    dialog.showModal();
    e.preventDefault();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

submitButtion.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("submitted!")
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").value;
    let newBook = new Book(title, author, pages, status);
    addBookToLibrary(newBook);
    dialog.close();
    createCard(cardContainer, newBook)
})

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
    let status = document.createElement("button");
    status.setAttribute("class","status");
    if (item.status.toLowerCase() == "yes"){
        status.textContent = "Read";
    } else if (item.status.toLowerCase() == "no"){
        status.textContent = "Unread";
    }
    let rmButton = document.createElement("button");
    rmButton.textContent = "Remove"
    status.setAttribute("class","remove");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status)
    card.appendChild(rmButton)
    place.appendChild(card);
}

/*Update Status 
1. eventlistening 
2. change library 
3. change textContent
*/


//Delete book
/* function deleteBook(item) {
    1. delete from Library 
    2. delete from page 
*/
