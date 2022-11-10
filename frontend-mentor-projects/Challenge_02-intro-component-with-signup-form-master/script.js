const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailval = email.value.trim();
    var passval = password.value.trim();
    var pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    }
    else {
        successFunc(fname)
    }

    if(lastName === ''){
        errorFunc(lname, 'Last Name cannot be empty')
    }
    else {
        successFunc(lname)
    }

    if(emailval === ''){
        errorFunc(email, 'Email Address cannot be empty')
    } 

    else {
        successFunc(email)
    }

    if(passval === ''){
        errorFunc(password, 'First Name cannot be empty')
    }
    else {
        successFunc(password)
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className +=  'error';
    span.className += 'error-text';
}

function successFunc(req){
    req.className += 'success';
}