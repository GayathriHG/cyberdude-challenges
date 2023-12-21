
//get from by name
const formEl=document.forms.feedback;

// get button by queryselector
const btnEl=document.querySelector("form button")



 //get elements by object destructing


const handleSubmit=(event)=>{
  event.preventDefault();

  // const{fullName,email,subject,type,message}=formEl.elements;

  console.log(...new FormData(formEl));

};

// const handleFormData=(e)=>{

  // const formData=e.formData
  // console.log([...formData.values()]);

// }

formEl.addEventListener ("submit",handleSubmit);

// formEl.addEventListener("formdata",handleFormData);
 


