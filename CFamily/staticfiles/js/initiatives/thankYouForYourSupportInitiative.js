document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector(".initiative-register-form");
    const thankYouModal = document.getElementById("thankYouModal");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Предотвратява изпращането на формата


        fetch(registerForm.action, {
            method: 'POST',
            body: new FormData(registerForm),
        }).then(response => {
            if (response.ok) {
                // Успешно изпращане на формата
                registerForm.style.display = "none";
                thankYouModal.style.display = "block";
            } else {
                // Грешка при изпращането на формата
                console.error("Registration failed");
            }
        }).catch(error => {
            console.error(error);
        });

        // За този пример се предполага, че изпращането на формата към сървъра е успешно
        registerForm.style.display = "none";
        thankYouModal.style.display = "block";
    });
});