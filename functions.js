

let books = [];

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
    this.info = function() {
        let info = title + " by " + author + ", " + numPages + " pages, "
        if (haveRead == true) {
            info = info + "have read.";
        } else {
            info = info + "have not yet read."
        }
        return info;
    }
}

const theHobbit = new Book("The Hobbit", "J.R. Tolkein", 295, true);

books.push(theHobbit);

function createCard(bookIndex){
    let book = books[bookIndex];
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.dataset.bookIndex = bookIndex;
    let bookTitle = document.createElement("h2");
    bookTitle.textContent = "\"" + book.title + "\"";
    bookTitle.classList.add("bookTitle");
    bookCard.appendChild(bookTitle);
    let author = document.createElement("div");
    author.textContent = "by " + book.author;
    author.classList.add("author");
    bookCard.appendChild(author);
    let numPages = document.createElement("div");
    numPages.textContent = "Pages: " + book.numPages;
    numPages.classList.add("numPages");
    bookCard.appendChild(numPages);
    let read = document.createElement("div");
    read.classList.add("read");
    if(book.haveRead === true) {
        read.textContent = "Read";
    } else {
        read.textContent = "Not Read";
    }
    bookCard.appendChild(read);
    let delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.textContent = "Delete";
    delButton.dataset.bookIndex = bookIndex;
    bookCard.appendChild(delButton);
    document.querySelector(".content").appendChild(bookCard);
    document.querySelectorAll(".delButton").forEach(button => {
        button.addEventListener("click", delBook);
    });
}

createCard(0);

const newButton = document.querySelector(".createBook");
const submitButton = document.querySelector(".submitButton");

newButton.addEventListener("click", formVisible);
submitButton.addEventListener("click", addBook);

function formVisible(){
    document.querySelector(".newBookForm").style.display = "block";
}

function addBook(event){
    event.preventDefault();
    let newTitle = document.getElementById("newTitle").value;
    let newAuthor = document.getElementById("newAuthor").value;
    let newBookPages = document.getElementById("newBookPages").value;
    let haveRead
    if(document.getElementById("haveReadTrue").checked == true){
        haveRead = true;
    } else {
        haveRead = false;
    }

    books.push(new Book(newTitle, newAuthor, newBookPages, haveRead));
    createCard(books.length-1);
    document.querySelector(".newBookForm").style.display = "none";
}

// Delete Function



function delBook(){
    let index = this.dataset.bookIndex;
    let parent = this.parentElement;
    delete books[index];
    parent.remove();
}


