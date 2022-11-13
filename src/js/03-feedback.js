import throttle from 'lodash.throttle';


const form = document.querySelector('form');
const mailInput = document.querySelector('[name = "email"]');
const messageInput = document.querySelector('[name = "message"]');


form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const data = {};

onReload();

function onInput(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

function onReload() {
    try {
        const loadedData = JSON.parse(localStorage.getItem("feedback-form-state"))
        if (loadedData.email) {
            mailInput.value = loadedData.email;
        }
        
        if (loadedData.message) {
            messageInput.value = loadedData.message;
        }

        Object.assign(data, loadedData);
    } catch (error) {}

}

function onSubmit(e) {
    e.preventDefault();

    localStorage.removeItem("feedback-form-state");
    console.log(data);

    e.target.reset();
}
