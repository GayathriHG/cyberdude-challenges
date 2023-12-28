// import validation requirements
import JustValidate from "just-validate";

// get form by Id
const formEl = document.getElementById("book-appointment-form");

const validateForm = new JustValidate(formEl);

// validation of form elements
validateForm.addField("#name",[
    {
        rule:"required",
        errorMessage:"Name is required"
    },
    {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 15,
      },
    ],
    );

    validateForm.addField("#gender",
    [
        {
            rule:"required",
            errorMessage:"Choose an option",
        },
    ],
    );

    validateForm.addField("#breed",
    [
        {
            rule:"required",
            errorMessage:"Breed is required",

        },
        {
            rule: 'minLength',
            value: 3,
          },
          {
            rule: 'maxLength',
            value: 25,
          },
    ],
    );

    validateForm.addField("#type",
    [
        {
            rule:"required",
            errorMessage:"Choose an option",
        },
    ],
    );

    validateForm.addField("#age",
    [
        {
            rule:"required",
            errorMessage:"Age is required",
        },
        {
            rule:"minLength",
            value:1,
        },
        {
            rule:"maxLength",
            value:2,
        },
    ],
    );

    validateForm.addField("#weight",
    [
        {
            rule:"required",
            errorMessage:"Weight is required",
        },
        {
            rule:"minLength",
            value:1,
        },
        {
            rule:"maxLength",
            value:2,
        },
    ],
    );

    validateForm.addField("#mobile",
    [
        {
            rule:"required",
            errorMessage:"Mobile number is required",
        },
        {
            rule:"minLength",
            value:10,
        },
        {
            rule:"maxLength",
            value:10,
        },
    ],
    );
    validateForm.addField("#date",
    [
        {
            rule:"required",
            errorMessage:"Select a date and time",
        },

    ],
    );
    validateForm.addField("#message",[
        {
            rule:"required",
            errorMessage:"Reason is required",
        },
        {
            rule:"minLength",
            value:15,
        },
        {
            rule:"maxLength",
            value:100,
        },

    ],
    );
 

