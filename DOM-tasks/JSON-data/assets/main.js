import books from "../assets/books.json";
const listEl = document.querySelector("#list");

for (const author of books) {
  listEl.innerHTML += `<div class="books-list" ><img src="${author.images}"><br><p>${author.name}</p> <p> ${author.age}</p><br>
  <p>${author.about}</p><br>  <p><li>${author.works[0]}</li>
  <li>${author.works[1]}</li>
  <li>${author.works[2]}</li>
  <li>${author.works[3]}</li>
  <li>${author.works[4]}</li>
  <li>${author.works[5]}</li>
  <li>${author.works[6]}</li>
  <li>${author.works[7]}</li>
  <li>${author.works[8]}</li>
  <li>${author.works[9]}</li></p></div>
  `;
}
