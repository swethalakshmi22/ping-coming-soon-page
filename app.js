let inputField = document.getElementById('email-input');
let errorMsg= document.getElementsByClassName('error-msg');
let notifyBtn = document.getElementById('input-btn');

notifyBtn.addEventListener('click', e => {
   e.preventDefault();
   let inputValue = inputField.value.trim();
   if (validateEmail(inputValue) || inputValue === '') {
      inputValue = '';
      inputField.focus();
      errorMsg.innerHTML = 'Please provide a valid email address';
   } else {
      inputValue = '';
      inputField.focus();
      errorMsg.innerHTML = '';
   }
   
});

//Regex Expression
function validateEmail(inputValue) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}