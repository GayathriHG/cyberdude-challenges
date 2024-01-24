const sectionEl = document.querySelector("section ");

const buttonEl = document.querySelector("button");

// const URL = "https://api.adviceslip.com/advice";

buttonEl.addEventListener("click", () => {
  window.location.href = "./";
});

const quotes = new XMLHttpRequest();
quotes.responseType = "json";

quotes.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    sectionEl.textContent = quotes.response.slip.advice;
  }
};
quotes.open("GET", "https://api.adviceslip.com/advice");
quotes.send();


// const result=fetch(URL).then((response)=>{
//   return response.json();
// })
// .then(data => console.log(data))
// .catch()
// console.log(result);
// sectionEl.textContent=result

// buttonEl.addEventListener("click", () => {
//   window.location.href = "/";
// });
// async function getAdviseData() {
//   try {
//     const response = await fetch(URL);
//     const jsonData = await response.json();
//     return jsonData;
//     // console.log("My Advice:",jsonData);
//   } catch (error) {
//     console.error("Oops! error");
//   }
// }

// const adviceData = await getAdviseData();

// sectionEl.textContent = adviceData.slip.advice;
