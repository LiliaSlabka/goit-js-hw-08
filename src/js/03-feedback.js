import throttle from 'lodash.throttle';

const form = document.querySelector('form')
const textarea = document.querySelector('textarea')
const input = document.querySelector('input')

populateTextarea()

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onTextareaInput, 500) )

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    console.log('Відправка форми')
}

function onTextareaInput() {
    const data = {
        email: input.value,
        message: textarea.value
    }
    localStorage.setItem('feedback-form-state',JSON.stringify(data))
}

function populateTextarea() {
    const savedData = localStorage.getItem('feedback-form-state')
    if (savedData !== null) {
        input.value = JSON.parse(savedData).email;
        textarea.value = JSON.parse(savedData).message;
    }
    
}