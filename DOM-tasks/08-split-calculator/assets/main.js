const formEl = document.querySelector("form");
const amountEl = document.querySelector("#amount");

const peopleEl = document.querySelector("#people");
const calculateEl = document.querySelector("#calculate");
const resetEl = document.querySelector("#reset");
const resultEl = document.querySelector("#result");
const historyEl = document.querySelector("#history");




calculateEl.addEventListener("click",(e)=>{
    e.preventDefault();
const amount=parseInt(amountEl.value);
const people=parseInt(peopleEl.value);
const share=amount/people;

resultEl.textContent=`your share is: ₹
${share}
`

});


