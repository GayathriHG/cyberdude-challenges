import books from "../assets/books.json";
const listEl = document.querySelector("#list");

for (const author of books) {
  listEl.innerHTML += `<li class="books-list">${author.name}</li>`;
}
