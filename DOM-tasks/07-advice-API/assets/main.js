const sectionEl = document.querySelector("section");

const quotes = new XMLHttpRequest();
quotes.responseType = "json";

quotes.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    sectionEl.textContent = quotes.response.slip.advice;
  }
};
quotes.open("GET", "https://api.adviceslip.com/advice");
quotes.send();
