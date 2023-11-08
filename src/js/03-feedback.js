import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email: userEmail, message: userMessage } = userForm.elements;
const userDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? '{}');

userEmail.value = userDate.email ?? '';
userMessage.value = userDate.message ?? '';

userForm.addEventListener('submit', onSubmit);
userForm.addEventListener('input', throttle(onInput, 500));

function onSubmit(i) {
   i.preventDefault();

   if(userEmail.value && userMessage.value) {
      console.log(userDate);

      localStorage.removeItem(LOCALSTORAGE_KEY);
      userForm.reset();
   } else {
      alert('All fields must be filled');
   }
}

function onInput() {
   userDate.email= userEmail.value;
   userDate.message = userMessage.value;

   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));
}


