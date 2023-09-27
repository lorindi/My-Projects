var registerButton = document.getElementById('registerButton');
var registerModal = document.getElementById('registerModal');

// Изберете елемента за затваряне на модалния прозорец
var closeButton = registerModal.querySelector('.close');

// Добавете събитие при клик върху бутона за регистрация
registerButton.addEventListener('click', function() {
    registerModal.style.display = 'block';
});

// Добавете събитие при клик върху елемента за затваряне на модалния прозорец
closeButton.addEventListener('click', function() {
    registerModal.style.display = 'none';
});