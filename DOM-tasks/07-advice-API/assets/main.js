const sectionEl = document.querySelector("section");

const URL="https://api.adviceslip.com/advice"

// const quotes = new XMLHttpRequest();
// quotes.responseType = "json";

// quotes.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     sectionEl.textContent = quotes.response.slip.advice;
//   }
// };
// quotes.open("GET", "https://api.adviceslip.com/advice");
// quotes.send();


const result=fetch(URL).then((data)=>{
  
  
console.log(jsonData);
});
console.log(result);


