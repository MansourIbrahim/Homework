//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  // your code goes in here, return the ul element
  let bookList = document.getElementById('bookList');
  bookList.style.margin = '20px';
  bookList.style.padding = '20px';
  let myUL = document.createElement('ul');

  myBooks.forEach((item) => {
    let myLI = document.createElement('li');
    let bookTitle = document.createElement('p');
    let bookImg = document.createElement('img');

    bookTitle.appendChild(
      document.createTextNode(`${item.title} - ${item.author}`)
    );
    myLI.appendChild(bookTitle);

    if (item.title === 'The Design of Everyday Things') {
      bookImg.src = 'assets/the_design_of_everyday_things.jpg';
      myLI.appendChild(bookImg);
    } else if (item.title === 'The Most Human Human') {
      bookImg.src = 'assets/the_most_human_human.jpg';
      myLI.appendChild(bookImg);
    } else {
      bookImg.src = 'assets/the_pragmatic_programmer.jpg';
      myLI.appendChild(bookImg);
    }

    if (item.alreadyRead === true) {
      myLI.style.backgroundColor = 'green';
    } else {
      myLI.style.backgroundColor = 'red';
    }

    myUL.style.listStyle = 'none';
    myUL.style.display = 'flex';
    myUL.style.flexDirection = 'row';
    myLI.style.width = '300px';
    myLI.style.height = '400px';
    myLI.style.margin = '10px';
    myLI.style.padding = '20px';
    myUL.style.listStyle = 'none';
    bookImg.style.width = '200px';
    myUL.appendChild(myLI);
  });

  return myUL;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
