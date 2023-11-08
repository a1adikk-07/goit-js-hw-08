import throttle from 'lodash.throttle';

const from = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email: userEmail, message: userMessage } = from.ELEMENT_NODE;

const userDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? '{}');

userEmail.value = userDate.email ?? '';
userMessage.value = userDate.message ?? '';

from.addEventListener("submit", onSubmit);
from.addEventListener('input', throttle(onInput, 500));

function onSubmit(i) {
    i.preventDefault();

    if (userEmail.value && userMessage.value) {
        console.log(userDate);
        localStorage.removeItem(LOCALSTORAGE_KEY);
        from.reset();
    } else {
        alert('fields must be filled')
    }
}

function onInput() {
    userDate.email = userEmail.value;
    userDate.message = userMessage.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));

}



