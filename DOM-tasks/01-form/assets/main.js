//get from by name
const formEl = document.forms.feedback;
const typeEl = formEl.elements.type;

// get button by queryselector
const btnEl = document.querySelector("form button");
const optionsEl = document.querySelector("#options");

//get elements by object destructing

const handleSubmit = (event) => {
  event.preventDefault();

  const { fullName, email, subject, message } = formEl.elements;
// getting output in console
  const formData = new FormData(formEl);
  formData.delete("type");
  for (let entry of formData.entries()) {
    console.log(...entry);
  }

  alert("Thank you for your feedback!");
};
// getting radio input as subject input
formEl.addEventListener("submit", handleSubmit);

optionsEl.addEventListener("change", (e) => {
  const subjectEl = formEl.subject;
  subjectEl.value = e.target.value;
});
