import books from "../assets/books.json";
const listEl = document.querySelector("#list");

for (const author of books) {
  listEl.innerHTML += `<div class="books-list" >
  <div class="flex  items-center ">
  <div><img src="${author.images}"  ></div>
  <div class="px-10">
  <div>${author.name}</div>
   <div> ${author.age}</div><br>
   <div>${author.about}</div>  

  </div>
   </div><br>
  <div>
  <li>${author.works[0]}</li> 
  <li>${author.works[1]}</li>
  <li>${author.works[2]}</li>
  <li>${author.works[3]}</li>
  <li>${author.works[4]}</li>
  <li>${author.works[5]}</li>
  <li>${author.works[6]}</li>
  <li>${author.works[7]}</li>
  <li>${author.works[8]}</li>
  <li>${author.works[9]}</li>
  </div>
  </div>
  `;
}
