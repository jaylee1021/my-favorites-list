let a = document.createElement('a');
a.href = "http://youtube.com/";
a.textContent = "Youtube!";

document.body.appendChild(a);

let body = document.getElementById('bookListDiv');

let bookList = document.createElement('ul');
bookList.setAttribute('class', 'my-favorite-books')
body.appendChild(bookList);

const books = ['Harry Potter', 'The Great Gatsby', 'Hamlet', 'Moby Dick'];

for (let x = 0; x < books.length; x++) {
    let newBook = document.createElement('li');
    newBook.textContent = books[x];
    bookList.appendChild(newBook);
    newBook.setAttribute('class', 'book');
}

const newBooks = ['Notebook', 'Coding for dummies'];

for (let x = 0; x < newBooks.length; x++) {
    let second = bookList.children[3];
    let newBook = document.createElement('li');
    newBook.textContent = newBooks[x];
    bookList.insertBefore(newBook, second);
}

let closet = document.getElementById('closet');

let itemsInCloset = document.createElement('ul');
itemsInCloset.setAttribute('class', 'my-closet');
closet.appendChild(itemsInCloset);

const items = ['coat', 'shirt', 'pants', 'socks'];

for (let x = 0; x < items.length; x++) {
    let closetItem = document.createElement('li');
    closetItem.textContent = items[x];
    itemsInCloset.appendChild(closetItem);
    closetItem.setAttribute('class', 'items');
}

const newItems = ['jacket', 'wind breaker', 'down jacket', 'shorts'];

for (let x = 0; x < newItems.length; x++) {
    let second = itemsInCloset.children[3];
    let newItem = document.createElement('li');
    newItem.textContent = newItems[x];
    itemsInCloset.insertBefore(newItem, second);
}


let lunch = document.getElementById('lunch');

let lunchList = document.createElement('ul');
lunchList.setAttribute('class', 'my-lunch');
lunch.appendChild(lunchList);

const lunchMenu = ['Hamburger', 'Sandwich', 'French Fries', 'Drink'];

for (let x = 0; x < lunchMenu.length; x++) {
    let lunchItem = document.createElement('li');
    lunchItem.textContent = lunchMenu[x];
    lunchList.appendChild(lunchItem);
    lunchItem.setAttribute('class', 'lunchItem');
}

function move() {
    let removeItem = lunchList.removeChild(lunchList.firstElementChild);
    return removeItem;
}

let dinner = document.getElementById('dinner');

let dinnerList = document.createElement('ul');
dinnerList.setAttribute('class', 'my-dinner');
dinner.appendChild(dinnerList);

function add() {
    return dinnerList.appendChild(move());
}

let button = document.getElementById('button');
button.style.width = '100px';
button.style.height = '50px';
button.style.margin = '10px 0 10px 0';

button.addEventListener('click', function () {
    if (lunchList.childElementCount > 0) {
        add();
    } else {
        alert("No More Menu to Move!");
    }
})