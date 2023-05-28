import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";
let formData = {};

formEl.addEventListener('input', throttle(formInput, 500));
formEl.addEventListener('submit', formSubmit);
window.addEventListener('load', onLoadForm);


function formInput (event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function formSubmit (event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
};

function onLoadForm () {
   try {
    const saveData = localStorage.getItem(STORAGE_KEY);
    if (!saveData) return;
    formData = JSON.parse(saveData);
    Object.entries(formData).forEach(([key, val]) => {
        formEl.elements[key].value = val;
    })
   } catch (error) {
    console.log(error.message);
   }
};

console.log('hello')