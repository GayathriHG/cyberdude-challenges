import JustValidate from "just-validate";

const formEl = document.getElementById("bill-split-form");
const calculateEl = document.getElementById("calculate");

const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField("#amount", [
  {
    rule: "required",
    errorMessage: "Enter the total amount.",
  },
]),
  validateForm.addField("#people", [
    {
      rule: "required",
      errorMessage: "Enter the total no. of people.",
    },
  ]);

validateForm.onSuccess(() => {
  const formData = new FormData(formEl);
  const formValueObj = Object.fromEntries(formData.entries());
});
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const amountEl = document.getElementById("amount").value;
  console.log(amountEl);
  const peopleEl = document.getElementById("people").value;
  console.log(peopleEl);
  const splitEl = amountEl / peopleEl;
  console.log(splitEl);
  const resultEl = document.getElementById("result");
});
