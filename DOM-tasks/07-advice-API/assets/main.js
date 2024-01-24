const sectionEl = document.querySelector("section ");

const buttonEl = document.querySelector("button");

// buttonEl.style.display="none";

// const URL="https://api.adviceslip.com/advice"

const quotes = new XMLHttpRequest();
quotes.responseType = "json";

quotes.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    sectionEl.textContent = quotes.response.slip.advice;
  }
};
quotes.open("GET", "https://api.adviceslip.com/advice");
quotes.send();
buttonEl.addEventListener("click", () => {
  window.location.href = "/";
});

// const result=fetch(URL).then((response)=>{
//   return response.json();
// })
// .then(data => console.log(data))
// .catch()
// console.log(result);
// sectionEl.textContent=result

// async function getAdviseData(){
//   try{
//     const response = await fetch(URL);
//     const jsonData=await response.json();
//     console.log("My Advice:",jsonData);
//   }catch(error){
// console.log("Oops! error");
//   }
// }
//  getAdviseData();

// sectionEl.textContent= getAdviseData.slip.advice
