// //variables
// const sendBtn = document.getElementById('sendBtn'),
//     resetBtn = document.getElementById('resetBtn'),
//     email = document.getElementById('email'),
//     subject = document.getElementById('subject'),
//     message = document.getElementById('message'),
//     sendEmailform = document.getElementById('email-form');



// //eventlisteners

// eventListeners();

// function eventListeners() {
//     //app init
//     document.addEventListener('DOMContentLoaded', appInit);
//     //validating the form 
//     email.addEventListener('blur', validateField);
//     subject.addEventListener('blur', validateField);
//     message.addEventListener('blur', validateField);
//     resetBtn.addEventListener('click', resetField)
//     sendEmailform.addEventListener('submit', sendEmail);


// }




// //functions
// //initiatlize the app
// //the aim here is to create a default mode for when the form loads
// //for the first time.This helpd to set initial values
// function appInit() {

//     // sendBtn.classList = "btn waves-effect waves-light  pink darken-2 disabled"
//     // resetBtn.classList = "btn waves-effect waves-light light-blue darken-2 disabled"
//     //another method
//     sendBtn.disabled = true;
//     resetBtn.disabled = true;

// }

// function validateField() {
//     let errors;
//     validateLength(this)
//         //validate email
//     if (this.type === 'email') {
//         validateEmail(this);
//     }
//     //this is the other end
//     errors = document.querySelectorAll('.error')

//     //check that the inputs are not empty
//     if (email.value !== '' && subject.value !== '' && message.value !== '') {
//         if (errors.length === 0) {
//             //enbale the button
//             sendBtn.disabled = false;
//             resetBtn.disabled = false;

//         }
//     }

// }

// function sendEmail(e) {
//     e.preventDefault();
//     const spinner = document.querySelector('#spinner')
//     spinner.style.display = 'block'
//     const sendImage = document.createElement('img')
//     sendImage.src = 'img/mail.gif';
//     const loaderDiv = document.getElementById('loaders');
//     loaderDiv.appendChild(sendImage);
//     // sendImage.style.display = 'none';


//     setTimeout(function() {
//         spinner.style.display = 'none';
//         sendImage.style.display = 'block';
//     }, 3000)
//     setInterval(function() {
//         loaderDiv.removeChild(sendImage)
//         sendEmailform.reset(); //this is the form for the project
//         sendBtn.disabled = true
//     }, 7000)


// }
// //validate the length
// function validateLength(field) {
//     if (field.value.length > 0) {
//         field.style.borderBottomColor = 'green';
//         field.classList.remove('error'); //just incase an erro class already exist

//     } else {
//         field.style.borderBottomColor = 'red';
//         field.classList.add('error');
//     }
// }
// ///checks for @in the value
// function validateEmail(field) {
//     let emailText = field.value;
//     //check if the email text contians the @ sign
//     if (emailText.indexOf('@') !== -1) {
//         field.style.borderBottomColor = 'green';
//         field.classList.remove('error'); //just incase an erro class already exist

//     } else {
//         field.style.borderBottomColor = 'red';
//         field.classList.add('error');
//     }
// }

// function resetField() {
//     sendEmailform.reset(); //this is the form for the project
//     sendBtn.disabled = true;


// }





//
//my version
//variables

const sendBtn = document.getElementById('sendBtn'),
    resetBtn = document.getElementById('resetBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

let emailform = document.getElementById('email-form');







//eventListeners
eventlisteners();







//functions
function eventlisteners() {
    document.addEventListener('DOMContentLoaded', initial)

    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', lengthValid);
    message.addEventListener('blur', lengthValid);
    resetBtn.addEventListener('click', reset);
    sendBtn.addEventListener('click', send)

}


function initial() {
    resetBtn.disabled = true;
    sendBtn.disabled = true;
}

// //function for the input boxes
function lengthValid() {
    validateField();
    if (this.value.length > 0) {
        this.style.borderBottomColor = 'green';
        validateField();
    } else {
        this.style.borderBottomColor = 'red'
    }
}


//funvtion to make sure the eamil side has @
function validateField() {

    if (this.type === "email") {
        realvalid(this);
    }
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        sendBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function realvalid(field) {
    let emailText = field.value
    if (emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green'
    } else {
        field.style.borderBottomColor = 'red'
    }


}





//make the reset butoon to reset the whole form
function reset(emailform) {

    this.reset()
}

//bring an image on click of the the send button
function send(e) {
    e.preventDefault();
    let spinner = document.querySelector('#spinner')
    spinner.style.display = 'block'
    let imagereset = document.createElement('img')
    imagereset.src = 'img/mail.gif'
    let loaders = document.getElementById('loaders')
    loaders.appendChild(imagereset);
    imagereset.style.display = 'none'

    setTimeout(function() {
        spinner.style.display = 'none'
        imagereset.style.display = 'block'
    }, 3000);


    setTimeout(function() {
        imagereset.style.display = "none"
    }, 7000)
}