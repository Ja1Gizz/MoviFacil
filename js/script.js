const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const email = contactForm.querySelector('[name="email"]');
        const message = contactForm.querySelector('[name="message"]');
        const name = contactForm.querySelector('[name="name"]');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
            return;
        }

        if (!email.checkValidity()) {
            event.preventDefault();
            alert('Digite um email válido para continuar.');
            email.focus();
        }
    });
}

const faqButtons = document.querySelectorAll('.faq-toggle');
faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        const answer = button.nextElementSibling;
        if (answer instanceof HTMLElement) {
            answer.hidden = expanded;
        }
    });
});
