
//get from by name
const formEl=document.forms.feedback;
const typeEl=formEl.elements.type
console.log([...typeEl]);

// get button by queryselector
const btnEl=document.querySelector("form button")
const optionsEl=document.querySelector("#options")
console.log(optionsEl);



 //get elements by object destructing


const handleSubmit=(event)=>{
  event.preventDefault();
  alert("Thank you for your feedback!")

  // const{fullName,email,subject,type,message}=formEl.elements;

  console.log(...new FormData(formEl));
  

};

// const handleFormData=(e)=>{

  // const formData=e.formData
  // console.log([...formData.values()]);

// }

formEl.addEventListener ("submit",handleSubmit);

// formEl.addEventListener("formdata",handleFormData);

optionsEl.addEventListener ("change",(e)=>{
console.log(e.target.value);

const subjectEl=formEl.subject;
subjectEl.value=e.target.value;

});
 


