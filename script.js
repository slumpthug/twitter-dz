const author = document.getElementById('author');
const message = document.getElementById('message');
const sendButton = document.getElementById('send');
const form = document.querySelector('.form');

const messages = [];

function renderMessage() {
    messages.forEach((item) => {
    const text = `
        <div class="sms">
            <div class="sms-info">
                <h3>${item.author}: </h3>
                <p>${item.message}</p>
            </div>
            <span>date: ${item.date}</span>
        </div>
        `;

        form.innerHTML += (text);
    });
};

function reset(inputMessage, inputAuthor) {
    inputMessage.value = '';
    inputAuthor.value = '';
};

sendButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (author.value && message.value) {
        const newMesaage = {
            author: author.value,
            message: message.value,
            date: Date.now()
        }
    
        messages.push(newMesaage);
    } else if(author.value.lenght < 3) {
        alert('Заболните')
    } else {
        alert('Заполните все поля')
    };


    renderMessage();
    reset(message, author);
});