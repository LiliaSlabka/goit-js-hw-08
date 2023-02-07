import throttle from 'lodash.throttle';

const form = document.querySelector('form');

populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(event) {
  if (!form.email.value || !form.message.value) {
    alert('Please, enter data in all fields');
    return;
  }
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state'); 
}


function onTextareaInput() {
  const data = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state',  JSON.stringify(data));
}


function populateTextarea() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    form.email.value = savedData.email;
    form.message.value = savedData.message;
  }
}