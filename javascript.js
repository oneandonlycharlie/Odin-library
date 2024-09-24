// Variables //
const myLibrary = [];
const cardContainer = document.querySelector(".card-container")
const addButton = document.querySelector(".addBook")
const dialog = document.querySelector("dialog")
const closeButton = document.querySelector("dialog button")
const submitButton = document.querySelector("dialog form button")
const form = document.getElementsByTagName("form")
const inputs = document.querySelectorAll("input")
const resetButton = document.querySelector("body > dialog > form > button:nth-child(6)")

// This function creates a book instance //
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.number = null;
}

function addBookToLibrary(item) {
    myLibrary.push(item);
    item.number = myLibrary.indexOf(item);
}

const allChecked = (inputs) => {
    return [...inputs].every((element)=> {element.checkValidity()})
}

// Activate an input window
addButton.addEventListener("click", (e)=> {
    dialog.showModal();
    e.preventDefault();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

resetButton.addEventListener("click", ()=> {submitButton.removeAttribute("disabled","")});

submitButton.addEventListener("click", (e)=> {
    e.preventDefault();
    if (allChecked(inputs)){
        let title = document.getElementById("title");
        let author = document.getElementById("author");
        let pages = document.getElementById("pages");
        let status = document.getElementById("status");
        let newBook = new Book(title.value, author.value, pages.value, status.value.toLowerCase());
        addBookToLibrary(newBook);
        dialog.close();
        title.value = title.defaultValue;
        author.value = author.defaultValue;
        pages.value = author.defaultValue;
        status.value = status.defaultValue;
        createCard(cardContainer, newBook)
    } else {
        submitButton.setAttribute("disabled","")
    }
})




//Create and show book info on the webpage
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
    if (item.status == "yes"){
        status.textContent = "Read";
    } else if (item.status == "no"){
        status.textContent = "Unread";
    }
    let rmButton = document.createElement("button");
    rmButton.textContent = "Remove"
    rmButton.setAttribute("class","remove");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status)
    card.appendChild(rmButton)
    place.appendChild(card);
}

//Delete card or change library status

cardContainer.addEventListener("click", (e) => {
    let button = e.target;
    let targetTitle = button.parentNode.childNodes[0];
    const targetBook = myLibrary.find((element) => element.title == targetTitle.textContent);
    switch(button.textContent){
        case "Read":
            button.textContent = "Unread";
            targetBook.status = "no";
            break;
        case "Unread":
            button.textContent = "Read";
            targetBook.status = "yes";
            break;
        case "Remove":
            button.parentNode.remove();
            myLibrary.splice(targetBook.number, 1)
    }
})

