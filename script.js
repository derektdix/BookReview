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
    let read = document.getElementById('bookRead').value


    const book = new Book(name, author, pageLength, 5, read)
    myLibrary.push(book)
    createLibrary(book)
}

function createLibrary(newItem){
    let results = document.getElementById('library-wrapper')
    results.append(
        Object.assign(
            document.createElement('p'),
            {
                classList:"bookNameDisplay", 
                innerHTML: `${newItem.name} ${newItem.author}`
            }
            )
        )
}