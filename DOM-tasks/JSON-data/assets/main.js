import books from "../assets/books.json";
 const booksListEl=document.getElementById("#booksList");

 for(const author of books){
booksListEl.innerText += author
    
    // console.log(author.name);
 }



 