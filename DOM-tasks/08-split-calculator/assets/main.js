const formEl = document.getElementById("form");
console.log(formEl);

const calculateEl = document.getElementById("calculate");
console.log(calculateEl);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const amountEl = document.getElementById("amount").value;
  console.log(amountEl);
  const peopleEl = document.getElementById("people").value;
  console.log(peopleEl);
  const splitEl = amountEl / peopleEl;
  console.log(splitEl);
  const resultEl = document.getElementById("result");
  resultEl.innerText = `your share is : ₹ ${splitEl}`;
  console.log(resultEl);
});
