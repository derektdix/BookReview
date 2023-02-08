let myLibrary = []

class Book {
    constructor(name, author, pageLength, rating, read){
        this.name = name
        this.author = author
        this.pageLength = pageLength
        this.rating = rating
        this.read = read
    }
}

document.getElementById('bookSubmit').addEventListener('click', addBookToLibrary)

function addBookToLibrary(){
    let name = document.getElementById('bookName').value
    let author = document.getElementById('bookAuthor').value
    let pageLength = Number(document.getElementById('bookPageLength').value)
    let read = document.getElementById('bookRead').checked
    let rating = document.getElementById('rating-label-stars').value
    
    const book = new Book(name, author, pageLength, rating, read)
    myLibrary.push(book)
    createLibrary(book)
}

function createLibrary(newItem){
    let results = document.getElementById('library-wrapper')
    let div = document.createElement('div')
    div.className = "book-card"
    let final = results.appendChild(div)


    final.append(`Book Title: ${newItem.name}`)
    final.appendChild(document.createElement('br'));
    final.append(`Book Author: ${newItem.author}`)
    final.appendChild(document.createElement('br'));
    final.append(`Book Length: ${newItem.pageLength}`)
    final.appendChild(document.createElement('br'));
    final.append(`Your Rating: ${newItem.rating}`)
    final.appendChild(document.createElement('br'));
    final.append(`Have you Finished: ${newItem.read}`)
}